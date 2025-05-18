// utils/auth.util.ts
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'chin-tapak-dam-dam';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'damadam-mast-kalandar';
const JWT_EXPIRES_IN = '1h';

export function generateToken(payload: object): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): any {
    return jwt.verify(token, JWT_SECRET);
}

export function generateRefreshToken(payload: object): string {
    return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '7d' });
}
export function verifyRefreshToken(token: string): any {
    return jwt.verify(token, JWT_REFRESH_SECRET);
}