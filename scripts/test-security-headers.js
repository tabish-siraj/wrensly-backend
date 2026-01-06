// Self-contained test replicating securityHeaders logic to avoid requiring TypeScript module

function envList(v) {
    return v ? v.split(',').map((s) => s.trim()).filter(Boolean) : [];
}

function buildSecurityHeaders() {
    const defaultImgSrc = ["'self'", 'data:', 'blob:', 'https://encrypted-tbn0.gstatic.com', 'https://images.unsplash.com', 'https://avatars.githubusercontent.com'];
    const defaultConnectSrc = ["'self'", 'https://wrensly-backend.onrender.com'];

    const imgSrc = Array.from(new Set([...defaultImgSrc, ...envList(process.env.CSP_IMG_SRC)]));
    const connectSrc = Array.from(new Set([...defaultConnectSrc, ...envList(process.env.CSP_CONNECT_SRC), ...envList(process.env.ALLOWED_ORIGINS)]));
    const scriptSrc = Array.from(new Set(["'self'", ...envList(process.env.CSP_SCRIPT_SRC)]));
    const styleSrc = Array.from(new Set(["'self'", "'unsafe-inline'", ...envList(process.env.CSP_STYLE_SRC)]));
    const fontSrc = Array.from(new Set(["'self'", ...envList(process.env.CSP_FONT_SRC)]));
    const frameSrc = Array.from(new Set([...envList(process.env.CSP_FRAME_SRC)]));

    const directives = {
        "default-src": ["'self'"],
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

    return {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Content-Security-Policy': csp,
    };
}

function runTest(env = {}) {
    for (const k of Object.keys(env)) process.env[k] = env[k];
    const headers = buildSecurityHeaders();
    console.log('Headers:');
    console.log(headers);
}

console.log('--- Default run (no extra env) ---');
runTest();

console.log('\n--- With env overrides ---');
runTest({
    CSP_IMG_SRC: 'https://cdn.example.com,https://media.example.org',
    CSP_CONNECT_SRC: 'https://api.example.com',
    CSP_SCRIPT_SRC: 'https://cdn.example.com',
    ALLOWED_ORIGINS: 'https://frontend.example.com',
});
