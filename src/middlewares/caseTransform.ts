import { Request, Response, NextFunction } from 'express';
import { transformToCamelCase } from '../utils/response';

// Middleware to transform incoming snake_case payloads to camelCase
export const transformIncomingPayload = (req: Request, res: Response, next: NextFunction) => {
    if (req.body && typeof req.body === 'object') {
        req.body = transformToCamelCase(req.body);
    }

    if (req.query && typeof req.query === 'object') {
        const transformedQuery: any = {};
        for (const [key, value] of Object.entries(req.query)) {
            const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
            transformedQuery[camelKey] = value;
        }
        req.query = transformedQuery;
    }

    next();
};