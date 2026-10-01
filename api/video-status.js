// GET /api/video-status?video_id=… — suit l'avancement d'une tâche Agnes.
import { MODEL, forward, guard, sendError } from './_agnes.js';

export default async function handler(req, res) {
  if (!guard(req, res, 'GET')) return;

  const videoId = String((req.query && req.query.video_id) || '');
  if (!/^[A-Za-z0-9_-]{1,200}$/.test(videoId)) {
    return sendError(res, 400, 'video_id invalide');
  }
  const query = new URLSearchParams({ video_id: videoId, model_name: MODEL });
  return forward(res, `/agnesapi?${query}`);
}
