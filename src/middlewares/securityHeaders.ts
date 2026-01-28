import { Request, Response, NextFunction } from 'express';

// Build Content-Security-Policy header from env variables with safe defaults.
// Environment vars (comma-separated lists) supported:
// CSP_IMG_SRC, CSP_CONNECT_SRC, CSP_SCRIPT_SRC, CSP_STYLE_SRC, CSP_FONT_SRC, CSP_FRAME_SRC
// Fallback defaults include 'self' and common image hosts used by frontend.
export const securityHeaders = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');

  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Referrer policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  const envList = (v?: string) =>
    v
      ? v
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

  const defaultImgSrc = [
    "'self'",
    'data:',
    'blob:',
    'https://encrypted-tbn0.gstatic.com',
    'https://images.unsplash.com',
    'https://avatars.githubusercontent.com',
  ];
  const defaultConnectSrc = ["'self'", 'https://wrensly-backend.onrender.com'];

  const imgSrc = Array.from(
    new Set([...defaultImgSrc, ...envList(process.env.CSP_IMG_SRC)])
  );
  const connectSrc = Array.from(
    new Set([
      ...defaultConnectSrc,
      ...envList(process.env.CSP_CONNECT_SRC),
      ...envList(process.env.ALLOWED_ORIGINS),
    ])
  );
  const scriptSrc = Array.from(
    new Set(["'self'", ...envList(process.env.CSP_SCRIPT_SRC)])
  );
  const styleSrc = Array.from(
    new Set(["'self'", ...envList(process.env.CSP_STYLE_SRC)])
  );
  const fontSrc = Array.from(
    new Set(["'self'", ...envList(process.env.CSP_FONT_SRC)])
  );
  const frameSrc = Array.from(new Set([...envList(process.env.CSP_FRAME_SRC)]));

  const directives: Record<string, string[]> = {
    'default-src': ["'self'"],
    'object-src': ["'none'"],
    'img-src': imgSrc,
    'connect-src': connectSrc,
    'script-src': scriptSrc,
    'style-src': styleSrc,
    'font-src': fontSrc,
  };

  if (frameSrc.length > 0) directives['frame-src'] = frameSrc;

  const csp = Object.entries(directives)
    .map(([k, v]) => `${k} ${v.join(' ')}`)
    .join('; ');

  res.setHeader('Content-Security-Policy', csp);

  next();
};
