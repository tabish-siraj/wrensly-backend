import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import logger from './src/utils/logger';
import { validateEnv } from './src/utils/env';

try {
  validateEnv();
  logger.info('✅ Environment variables validated');
} catch (error: any) {
  logger.error('❌ Invalid environment variables:', error.message);
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app
  .listen(PORT, () => {
    logger.info(`🚀 Server running at http://localhost:${PORT}`);
  })
  .on('error', (err) => {
    logger.error('❌ Server failed to start:', err);
    process.exit(1);
  });
// This file is responsible for starting the server.
// It imports the necessary modules, sets up the server, and listens on the specified port.
