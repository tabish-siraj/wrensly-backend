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
    constructor(details?: any) {
        super("Bad request", 400, details);
    }
}

export class UnauthorizedError extends AppError {
    constructor(details?: any) {
        super("Unauthorized", 401, details);
    }
}

export class ForbiddenError extends AppError {
    constructor(details?: any) {
        super("Forbidden", 403, details);
    }
}

export class NotFoundError extends AppError {
    constructor(details?: any) {
        super("Resource not found", 404, details);
    }
}

export class InternalServerError extends AppError {
    constructor(details?: any) {
        super("Internal server error", 500, details);
    }
}