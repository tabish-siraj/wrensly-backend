import { Request, Response, NextFunction } from 'express';
import { transformToCamelCase } from '../utils/response';

// Middleware to transform incoming snake_case payloads to camelCase
export const transformIncomingPayload = (req: Request, res: Response, next: NextFunction) => {
    // Transform body only - skip query transformation for now to avoid read-only property error
    if (req.body && typeof req.body === 'object') {
        req.body = transformToCamelCase(req.body);
    }

    // Skip query transformation to avoid "Cannot set property query" error
    // TODO: Implement safer query transformation if needed

    next();
};