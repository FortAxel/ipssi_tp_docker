import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import app from '../../src/app.js';
import { pool, waitForDatabase, initSchema } from '../../src/db.js';
import { initLogs } from '../../src/logger.js';

let server;
let baseUrl;

before(async () => {
  initLogs();
  await waitForDatabase();
  await initSchema();
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      baseUrl = `http://127.0.0.1:${server.address().port}`;
      resolve();
    });
  });
});

after(async () => {
  server?.close();
  await pool.end();
});

test('happy path — POST /api/tasks puis GET /api/tasks', async () => {
  const createRes = await fetch(`${baseUrl}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Tâche CI', status: 'todo' }),
  });
  assert.equal(createRes.status, 201);
  const created = await createRes.json();

  const listRes = await fetch(`${baseUrl}/api/tasks`);
  assert.equal(listRes.status, 200);
  const tasks = await listRes.json();
  assert.ok(tasks.some((t) => t.id === created.id));
});

test('edge case — GET /api/tasks/:id inexistant → 404', async () => {
  const res = await fetch(`${baseUrl}/api/tasks/00000000-0000-0000-0000-000000000099`);
  assert.equal(res.status, 404);
});

test('scénario adverse — POST /api/tasks corps vide → 400', async () => {
  const res = await fetch(`${baseUrl}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  assert.equal(res.status, 400);
});
