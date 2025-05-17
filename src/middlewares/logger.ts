import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const requestLogger = (req: Request, _res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
};

export default requestLogger;
// Usage in your Express app
// import express from 'express';
// import requestLogger from './middlewares/logger';
//
// const app = express();
// app.use(requestLogger);
