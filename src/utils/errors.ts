export class AppError extends Error {
    public statusCode: number;
    public error?: any;

    constructor(message: string, statusCode = 500, error?: any) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class BadRequestError extends AppError {
    constructor(error?: any) {
        super("Bad request", 400, error);
    }
}

export class UnauthorizedError extends AppError {
    constructor(error?: any) {
        super("Unauthorized", 401, error);
    }
}

export class ForbiddenError extends AppError {
    constructor(error?: any) {
        super("Forbidden", 403, error);
    }
}

export class NotFoundError extends AppError {
    constructor(error?: any) {
        super("Resource not found", 404, error);
    }
}

export class AlreadyExistsError extends AppError {
    constructor(error?: any) {
        super("Resource already exists", 409, error);
    }
}

export class InternalServerError extends AppError {
    constructor(error?: any) {
        super("Internal server error", 500, error);
    }
}