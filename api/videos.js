// POST /api/videos — crée une tâche de génération vidéo chez Agnes.
// Seuls le prompt, la durée, les images et la graine viennent du navigateur ;
// le modèle, le mode et le format sont fixés ici pour qu'on ne puisse pas détourner la clé.
import { MODEL, forward, guard, sendError } from './_agnes.js';

const MAX_IMAGES = 5;
const MAX_PROMPT_LENGTH = 4000;

function isImageRef(value) {
  return typeof value === 'string' && (value.startsWith('data:image/') || value.startsWith('https://'));
}

export default async function handler(req, res) {
  if (!guard(req, res, 'POST')) return;

  const { prompt, seconds, images, seed } = req.body || {};
  if (typeof prompt !== 'string' || !prompt.trim() || prompt.length > MAX_PROMPT_LENGTH) {
    return sendError(res, 400, 'Prompt manquant ou trop long');
  }
  const duration = Number(seconds);
  if (!Number.isInteger(duration) || duration < 4 || duration > 12) {
    return sendError(res, 400, 'La durée doit être comprise entre 4 et 12 secondes');
  }
  if (!Array.isArray(images) || images.length < 1 || images.length > MAX_IMAGES || !images.every(isImageRef)) {
    return sendError(res, 400, `Entre 1 et ${MAX_IMAGES} images de référence sont requises`);
  }

  const payload = {
    model: MODEL,
    prompt,
    mode: 'reference',
    seconds: String(duration),
    size: '720P',
    aspect_ratio: '9:16',
    images,
  };
  if (Number.isInteger(seed) && seed >= 0) payload.seed = seed;

  return forward(res, '/v1/videos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}
