import { Request, Response, NextFunction } from 'express';
import { securityHeaders } from './securityHeaders';

describe('securityHeaders middleware', () => {
    let req: Partial<Request>;
    let res: Partial<Response> & { headers: Record<string, string> };
    let next: NextFunction;

    beforeEach(() => {
        // Clear CSP-related env vars for deterministic tests
        delete process.env.CSP_IMG_SRC;
        delete process.env.CSP_CONNECT_SRC;
        delete process.env.CSP_SCRIPT_SRC;
        delete process.env.CSP_STYLE_SRC;
        delete process.env.CSP_FONT_SRC;
        delete process.env.CSP_FRAME_SRC;
        delete process.env.ALLOWED_ORIGINS;

        req = {};
        res = {
            headers: {},
            setHeader(name: string, value: string | number | readonly string[]) {
                // normalize to string for test assertions
                this.headers[name] = String(value as any);
                return this as any;
            },
        };
        next = jest.fn();
    });

    test('sets required security headers and default CSP entries', () => {
        securityHeaders(req as Request, res as Response, next);

        expect(res.headers['X-Frame-Options']).toBe('DENY');
        expect(res.headers['X-Content-Type-Options']).toBe('nosniff');
        expect(res.headers['X-XSS-Protection']).toBe("1; mode=block");
        expect(res.headers['Referrer-Policy']).toBe('strict-origin-when-cross-origin');

        const csp = res.headers['Content-Security-Policy'];
        expect(typeof csp).toBe('string');
        expect(csp).toContain("default-src 'self'");
        expect(csp).toContain('img-src');
        expect(csp).toContain('connect-src');
    });

    test('includes env overrides in CSP', () => {
        process.env.CSP_IMG_SRC = 'https://cdn.example.com';
        process.env.CSP_CONNECT_SRC = 'https://api.example.com';
        process.env.CSP_SCRIPT_SRC = 'https://scripts.example.com';
        process.env.ALLOWED_ORIGINS = 'https://frontend.example.com';

        securityHeaders(req as Request, res as Response, next);

        const csp = res.headers['Content-Security-Policy'];
        expect(csp).toContain('https://cdn.example.com');
        expect(csp).toContain('https://api.example.com');
        expect(csp).toContain('https://scripts.example.com');
        expect(csp).toContain('https://frontend.example.com');
    });
});
