import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import logger from './src/utils/logger';

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app
  .listen(PORT, () => {
    logger.info(`🚀 Server running at http://localhost:${PORT}`);
  })
  .on('error', (err) => {
    logger.error('❌ Server failed to start:', err);
  });
// This file is responsible for starting the server.
// It imports the necessary modules, sets up the server, and listens on the specified port.
