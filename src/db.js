import pg from 'pg';

const { Pool } = pg;

const isDockerDev = process.env.NODE_ENV === 'development';

export const pool = new Pool({
  host: process.env.DB_HOST || (isDockerDev ? 'db' : 'localhost'),
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'todo_user',
  password: process.env.DB_PASSWORD || 'todo_pass',
  database: process.env.DB_NAME || 'todo_db',
});

export async function waitForDatabase(maxAttempts = 30, delayMs = 2000) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await pool.query('SELECT 1');
      return;
    } catch (err) {
      if (attempt === maxAttempts) throw err;
      console.log(`En attente de PostgreSQL (${attempt}/${maxAttempts})...`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}

export async function initSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id VARCHAR(36) PRIMARY KEY,
      title VARCHAR(255),
      description TEXT NOT NULL DEFAULT '',
      status VARCHAR(50) NOT NULL DEFAULT 'todo',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}
