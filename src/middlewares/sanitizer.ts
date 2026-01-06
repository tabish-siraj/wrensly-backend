import { Request, Response, NextFunction } from 'express';
import DOMPurify from 'isomorphic-dompurify';
import logger from '../utils/logger';

// Sanitize incoming JSON payloads (req.body) for XSS and unsafe HTML.
// Designed to be safe with Express 5: does not touch `req.query` and avoids
// expensive recursion by limiting depth and string length.
const MAX_DEPTH = 6;
const MAX_STRING_LENGTH = 20000; // avoid extremely large strings that could cause DoS

const sanitizeObject = (obj: any, depth = 0): any => {
  if (depth > MAX_DEPTH) return obj;
  if (typeof obj === 'string') {
    if (obj.length > MAX_STRING_LENGTH) return obj.slice(0, MAX_STRING_LENGTH);
    return DOMPurify.sanitize(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map((v) => sanitizeObject(v, depth + 1));
  }
  if (obj && typeof obj === 'object' && !(obj instanceof Buffer)) {
    const sanitized: any = {};
    for (const [key, value] of Object.entries(obj)) {
      sanitized[key] = sanitizeObject(value, depth + 1);
    }
    return sanitized;
  }
  return obj;
};

export const sanitizeInput = (req: Request, _res: Response, next: NextFunction) => {
  try {
    // Only sanitize request body when it's a plain object
    if (req.body && typeof req.body === 'object') {
      req.body = sanitizeObject(req.body);
    }

    // Note: intentionally skipping `req.query` sanitization to avoid
    // compatibility and parsing differences with Express 5. Query params
    // should be validated with Zod or similar validators in route handlers.

    return next();
  } catch (error: any) {
    logger.error(`sanitizeInput error: ${error?.message || error}`);
    return next();
  }
};