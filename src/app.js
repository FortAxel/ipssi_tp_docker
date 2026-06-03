import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import taskRoutes from './routes/tasks.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.use('/api/tasks', taskRoutes);

app.use(errorHandler);

export default app;
