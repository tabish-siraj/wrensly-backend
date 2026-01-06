const DOMPurify = require('isomorphic-dompurify');

const MAX_DEPTH = 6;
const MAX_STRING_LENGTH = 20000;

function sanitizeObject(obj, depth = 0) {
    if (depth > MAX_DEPTH) return obj;
    if (typeof obj === 'string') {
        if (obj.length > MAX_STRING_LENGTH) return obj.slice(0, MAX_STRING_LENGTH);
        return DOMPurify.sanitize(obj);
    }
    if (Array.isArray(obj)) return obj.map((v) => sanitizeObject(v, depth + 1));
    if (obj && typeof obj === 'object' && !(obj instanceof Buffer)) {
        const sanitized = {};
        for (const [k, v] of Object.entries(obj)) {
            sanitized[k] = sanitizeObject(v, depth + 1);
        }
        return sanitized;
    }
    return obj;
}

const sample = {
    text: "Hello <script>alert('xss')</script> world",
    nested: {
        bio: "<img src=x onerror=alert('oops')> Nice",
        arr: ["<b>bold</b>", "normal", { deep: "<iframe src=evil></iframe>" }],
    },
    long: 'a'.repeat(21000),
};

console.log('--- BEFORE SANITIZE ---');
console.log(JSON.stringify(sample, null, 2));

const sanitized = sanitizeObject(sample);

console.log('\n--- AFTER SANITIZE ---');
console.log(JSON.stringify(sanitized, null, 2));
