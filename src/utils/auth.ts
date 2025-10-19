// utils/auth.util.ts
import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserPayload } from '../types/express';

const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';
const JWT_REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || 'your-default-refresh-secret';
const JWT_EXPIRES_IN = '1h';

export function generateToken(payload: UserPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): UserPayload & JwtPayload {
  // The return type of verify is string | JwtPayload. We cast it to our expected payload.
  return jwt.verify(token, JWT_SECRET) as UserPayload & JwtPayload;
}

export function generateRefreshToken(payload: UserPayload): string {
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '7d' });
}
export function verifyRefreshToken(token: string): UserPayload & JwtPayload {
  return jwt.verify(token, JWT_REFRESH_SECRET) as UserPayload & JwtPayload;
}
