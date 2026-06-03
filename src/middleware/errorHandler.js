import { log } from '../logger.js';

export default function errorHandler(err, req, res, next) {
  log('error', `${req.method} ${req.originalUrl} — ${err.message}`);

  if (err.status) {
    return res.status(err.status).json({ error: err.message });
  }

  if (err.code === '23505') {
    return res.status(409).json({ error: 'Conflit de données' });
  }

  res.status(500).json({ error: 'Erreur interne du serveur' });
}
