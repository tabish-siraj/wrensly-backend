import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import router from './src/routes/index';
import requestLogger from './src/middlewares/logger';
import { errorHandler } from './src/middlewares/errorHandler';
import { globalParamsHandler } from './src/middlewares/params';
import { generalRateLimit } from './src/middlewares/rateLimiter';
import { sanitizeInput } from './src/middlewares/sanitizer';
import { responseWrapper } from './src/middlewares/responseWrapper';
import { transformIncomingPayload } from './src/middlewares/caseTransform';
import { securityHeaders } from './src/middlewares/securityHeaders';

const app = express();

// Trust proxy for Render deployment
app.set('trust proxy', 1);

// Security middleware
app.use(helmet());
app.use(securityHeaders);
app.use(mongoSanitize());

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

app.use(express.json({ limit: '10mb' }));
app.use(transformIncomingPayload); // Transform snake_case to camelCase for incoming payloads
app.use(generalRateLimit);
app.use(requestLogger);
app.use(responseWrapper);
app.use('/api', globalParamsHandler, router);
app.use('/test', (req, res) => {
  res.status(200).json({ message: 'Server is running!!!' });
});
app.use('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: {
      hasDatabase: !!process.env.DATABASE_URL,
      hasJwtSecret: !!process.env.JWT_SECRET,
      hasJwtRefreshSecret: !!process.env.JWT_REFRESH_SECRET,
      hasMailjet: !!(process.env.MJ_APIKEY_PUBLIC && process.env.MJ_APIKEY_PRIVATE),
      hasAppUrl: !!process.env.APP_URL
    }
  });
});
app.use(errorHandler);

export default app;
