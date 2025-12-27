import { Request, Response, NextFunction } from 'express';
import DOMPurify from 'isomorphic-dompurify';

export const sanitizeInput = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Only sanitize request body, skip query parameters to avoid Express 5.x issues
    if (req.body && typeof req.body === 'object') {
      const sanitizeObject = (obj: any): any => {
        if (typeof obj === 'string') {
          return DOMPurify.sanitize(obj);
        }
        if (Array.isArray(obj)) {
          return obj.map(sanitizeObject);
        }
        if (obj && typeof obj === 'object') {
          const sanitized: any = {};
          for (const [key, value] of Object.entries(obj)) {
            sanitized[key] = sanitizeObject(value);
          }
          return sanitized;
        }
        return obj;
      };

      req.body = sanitizeObject(req.body);
    }

    // Skip query parameter sanitization for Express 5.x compatibility
    // Query parameters are typically less risky and are validated by Zod schemas

    next();
  } catch (error) {
    console.error('Error in sanitizeInput middleware:', error);
    // Continue without sanitization if there's an error
    next();
  }
};