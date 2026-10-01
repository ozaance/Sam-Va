# Studio UGC

Génère des vidéos publicitaires de style UGC (portrait 9:16) à partir de photos d'une personne et d'un produit, avec le modèle `agnes-video-2.5-flash` d'Agnes AI.

## Fonctionnement

- `index.html` : la page. Elle ne contient aucune clé.
- `api/videos.js` : crée une vidéo chez Agnes.
- `api/video-status.js` : suit l'avancement d'une vidéo.

La clé Agnes ne quitte jamais le serveur. Le navigateur envoie seulement un mot de passe d'accès, vérifié par les fonctions `/api` avant tout appel à Agnes.

## Variables d'environnement (Vercel → Settings → Environment Variables)

| Variable | Contenu |
| - | - |
| `AGNES_API_KEY` | Votre clé Agnes (platform.agnes-ai.com → Settings → API Keys) |
| `APP_PASSWORD` | Le mot de passe à saisir dans la page. Long et aléatoire, par exemple `openssl rand -base64 24` |

Après avoir ajouté ou modifié une variable, redéployez le projet pour qu'elle soit prise en compte.

## Limites

- 5 images de référence au maximum par vidéo. Une vidéo déposée est remplacée par une image extraite.
- Durée de 4 à 12 secondes, en 720P.
- Les images sont recompressées pour rester sous la limite de 4,5 Mo par requête imposée par Vercel.

## Test en local

```
npx vercel dev
```

Ouvrez ensuite l'adresse affichée. Ouvrir `index.html` directement ne marche pas : les fonctions `/api` ne tourneraient pas.
