import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import taskRoutes from './routes/tasks.js';
import errorHandler from './middleware/errorHandler.js';
import { logAccess } from './logger.js';
import { metricsMiddleware, metricsHandler } from './metrics.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(json());
app.use(metricsMiddleware);

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => logAccess(req, res, Date.now() - start));
  next();
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.get('/metrics', metricsHandler);

app.use('/api/tasks', taskRoutes);

app.use(errorHandler);

export default app;
