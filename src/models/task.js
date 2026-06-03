import { v4 as uuidv4 } from 'uuid';
import { pool } from '../db.js';

function mapRow(row) {
  if (!row) return null;
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function findAll() {
  const [rows] = await pool.query(
    'SELECT id, title, description, status, created_at, updated_at FROM tasks ORDER BY created_at DESC'
  );
  return rows.map(mapRow);
}

export async function findById(id) {
  const [rows] = await pool.query(
    'SELECT id, title, description, status, created_at, updated_at FROM tasks WHERE id = ?',
    [id]
  );
  return mapRow(rows[0]);
}

export async function create({ title, description, status }) {
  const id = uuidv4();
  await pool.query(
    'INSERT INTO tasks (id, title, description, status) VALUES (?, ?, ?, ?)',
    [id, title ?? null, description, status ?? 'todo']
  );
  return findById(id);
}

export async function update(id, { title, description, status }) {
  const existing = await findById(id);
  if (!existing) return null;

  await pool.query(
    'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
    [
      title !== undefined ? title : existing.title,
      description !== undefined ? description : existing.description,
      status !== undefined ? status : existing.status,
      id,
    ]
  );
  return findById(id);
}

export async function remove(id) {
  const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
  return result.affectedRows > 0;
}
