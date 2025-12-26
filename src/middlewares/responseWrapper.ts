import { Request, Response, NextFunction } from 'express';

export const responseWrapper = (req: Request, res: Response, next: NextFunction) => {
    const originalJson = res.json;

    res.json = function (data: any) {
        // If data is already wrapped (has success and message properties), send as-is
        if (data && typeof data === 'object' &&
            (data.hasOwnProperty('success') && data.hasOwnProperty('message'))) {
            return originalJson.call(this, data);
        }

        // For raw data, wrap it in success response
        const wrappedResponse = {
            success: true,
            message: "Request successful",
            data: data,
            meta: {
                timestamp: new Date().toISOString()
            }
        };

        return originalJson.call(this, wrappedResponse);
    };

    next();
};