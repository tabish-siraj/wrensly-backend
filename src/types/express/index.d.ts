// src/types/express/index.d.ts

// Define the structure of the user payload from the JWT
export interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}
