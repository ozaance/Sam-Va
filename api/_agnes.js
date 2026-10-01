// Code partagé des fonctions /api (le préfixe « _ » empêche Vercel d'en faire une route).
// La clé Agnes ne quitte jamais le serveur : elle vient de la variable d'environnement AGNES_API_KEY.
import { createHash, timingSafeEqual } from 'node:crypto';

export const AGNES_BASE = 'https://apihub.agnes-ai.com';
// agnes-video-v2.0 a été retiré le 25/09/2026 ; 2.5 Flash est son remplaçant gratuit (720P, 5 images max).
export const MODEL = 'agnes-video-2.5-flash';

function sendError(res, status, message) {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(status).json({ error: message });
}

// Vérifie la configuration et le mot de passe ; renvoie false (réponse déjà envoyée) si refusé.
export function guard(req, res, method) {
  if (req.method !== method) {
    res.setHeader('Allow', method);
    sendError(res, 405, 'Méthode non autorisée');
    return false;
  }
  // Nomme les variables absentes (jamais leur valeur) pour faciliter la configuration sur Vercel
  const missing = ['AGNES_API_KEY', 'APP_PASSWORD'].filter((name) => !process.env[name]);
  if (missing.length) {
    sendError(res, 500, `Serveur non configuré : variable(s) manquante(s) ${missing.join(', ')}`);
    return false;
  }
  // Comparaison à temps constant (via empreintes de même longueur)
  const given = createHash('sha256').update(String(req.headers['x-app-password'] || '')).digest();
  const expected = createHash('sha256').update(process.env.APP_PASSWORD).digest();
  if (!timingSafeEqual(given, expected)) {
    sendError(res, 401, 'Mot de passe incorrect');
    return false;
  }
  return true;
}

export { sendError };

// Relaie la requête vers Agnes en ajoutant la clé, et renvoie la réponse telle quelle.
export async function forward(res, path, init = {}) {
  let upstream;
  try {
    upstream = await fetch(AGNES_BASE + path, {
      ...init,
      headers: { ...(init.headers || {}), Authorization: `Bearer ${process.env.AGNES_API_KEY}` },
    });
  } catch (e) {
    return sendError(res, 502, 'Agnes est injoignable, réessayez plus tard');
  }
  // Ne pas faire croire au navigateur que son mot de passe est faux : c'est la clé du serveur qui est refusée
  if (upstream.status === 401 || upstream.status === 403) {
    return sendError(res, 502, 'La clé Agnes configurée sur le serveur est refusée (AGNES_API_KEY)');
  }
  const body = await upstream.text();
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json');
  return res.status(upstream.status).send(body);
}
