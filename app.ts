import cors from 'cors';
import express from 'express';
import router from './src/routes/index';
import requestLogger from './src/middlewares/logger';
import { errorHandler } from './src/middlewares/errorHandler';

const app = express();

// CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://wrensly-frontend.vercel.app',
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(requestLogger);
app.use('/api', router);
app.use('/test', (req, res) => {
  res.status(200).json({ message: 'Server is running!!!' });
});
app.use(errorHandler);

export default app;
