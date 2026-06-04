import fs from 'fs';
import path from 'path';

const LOG_DIR = process.env.LOG_DIR || '/app/logs';
const APP_LOG = path.join(LOG_DIR, 'app.log');
const ACCESS_LOG = path.join(LOG_DIR, 'access.log');

export function initLogs() {
  fs.mkdirSync(LOG_DIR, { recursive: true });
  log('info', 'Logs initialisés', APP_LOG);
}

export function log(level, message, file = APP_LOG) {
  const line = `${new Date().toISOString()} [${level}] ${message}\n`;
  fs.mkdirSync(LOG_DIR, { recursive: true });
  fs.appendFileSync(file, line);
  if (level === 'error') console.error(message);
  else console.log(message);
}

export function logAccess(req, res, durationMs) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
  const line = `${new Date().toISOString()} ${req.method} ${req.originalUrl} ${res.statusCode} ${durationMs}ms\n`;
  fs.appendFileSync(ACCESS_LOG, line);
}

export { LOG_DIR, APP_LOG, ACCESS_LOG };
