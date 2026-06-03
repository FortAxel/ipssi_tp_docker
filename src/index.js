import app from './app.js';
import { waitForDatabase, initSchema } from './db.js';
import { initLogs, log } from './logger.js';

const port = Number(process.env.PORT) || 3000;

async function start() {
  initLogs();
  await waitForDatabase();
  await initSchema();
  app.listen(port, () => {
    log('info', `API disponible sur http://localhost:${port}`);
  });
}

start().catch((err) => {
  log('error', `Démarrage impossible: ${err.message}`);
  process.exit(1);
});
