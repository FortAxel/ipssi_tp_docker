import app from './app.js';
import { waitForDatabase } from './db.js';

const port = Number(process.env.PORT) || 3000;

async function start() {
  await waitForDatabase();
  app.listen(port, () => {
    console.log(`API disponible sur http://localhost:${port}`);
  });
}

start().catch((err) => {
  console.error('Impossible de démarrer l\'application:', err);
  process.exit(1);
});
