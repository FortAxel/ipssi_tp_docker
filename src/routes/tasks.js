import express from 'express';
import * as taskModel from '../models/task.js';

const router = express.Router();

function validateCreate(body) {
  const desc = typeof body?.description === 'string' ? body.description.trim() : '';
  const title = typeof body?.title === 'string' ? body.title.trim() : '';
  if (!desc && !title) {
    const err = new Error('title ou description requis');
    err.status = 400;
    throw err;
  }
}

router.get('/', async (req, res, next) => {
  try {
    const tasks = await taskModel.findAll();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const task = await taskModel.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Tâche introuvable' });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    validateCreate(req.body);
    const task = await taskModel.create({
      title: req.body.title,
      description: req.body.description?.trim() ?? '',
      status: req.body.status,
    });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const task = await taskModel.update(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
    });
    if (!task) {
      return res.status(404).json({ error: 'Tâche introuvable' });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await taskModel.remove(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Tâche introuvable' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

export default router;
