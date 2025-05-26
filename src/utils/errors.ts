export class AppError extends Error {
    public statusCode: number;
    public details?: any;

    constructor(message: string, statusCode = 500, details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class BadRequestError extends AppError {
    constructor(message = "Bad request", details?: any) {
        super(message, 400, details);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = "Unauthorized", details?: any) {
        super(message, 401, details);
    }
}

export class ForbiddenError extends AppError {
    constructor(message = "Forbidden", details?: any) {
        super(message, 403, details);
    }
}

export class NotFoundError extends AppError {
    constructor(message = "Resource not found", details?: any) {
        super(message, 404, details);
    }
}

export class InternalServerError extends AppError {
    constructor(message = "Internal server error", details?: any) {
        super(message, 500, details);
    }
}