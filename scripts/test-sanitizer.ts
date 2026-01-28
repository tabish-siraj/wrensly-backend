import { sanitizeInput } from '../src/middlewares/sanitizer';
import { Request, Response } from 'express';

// Mock objects
const req: Partial<Request> = {
    body: {},
};
const res: Partial<Response> = {};
const next = () => { };

// Valid shallow object
const validObject = {
    name: 'Test',
    content: '<script>alert("xss")</script>Hello',
};

// Deeply nested object (depth 8)
const deepObject = {
    a: {
        b: {
            c: {
                d: {
                    e: {
                        f: {
                            g: {
                                h: 'too deep',
                            },
                        },
                    },
                },
            },
        },
    },
};

console.log('--- Testing Sanitizer ---');

// Test 1: Standard sanitization
req.body = validObject;
sanitizeInput(req as Request, res as Response, next);
console.log('Test 1 (Standard):', req.body.content === 'Hello' ? 'PASSED' : 'FAILED');

// Test 2: Deep recursion protection
// Since we modified the sanitizer to return null for deep objects, the key might be null or missing
req.body = deepObject;
sanitizeInput(req as Request, res as Response, next);

// We expect the deep part to be nullified or pruned
const result = req.body;
// Check if the deep structure is preserved (it shouldn't be fully preserved if it exceeds depth)
// Our fix returns `null` if depth > MAX_DEPTH (6).
// So deepObject.a.b.c.d.e.f (depth 6) might be object, but .g (depth 7) should be affected.

// Actually, sanitizeInput mutates req.body.
// sanitizeObject(deepObject) -> recursively calls.
// when depth reaches > MAX_DEPTH, it returns null.
// So the structure at that depth will become null.

function checkDepth(obj: any, currentDepth = 0): boolean {
    if (currentDepth > 8) return false; // Should have stopped before this
    if (obj && typeof obj === 'object') {
        for (const key in obj) {
            return checkDepth(obj[key], currentDepth + 1);
        }
    }
    return true; // Reached leaf safely or null
}

console.log('Test 2 (Deep Check):', JSON.stringify(req.body));
console.log('Test 2 Passed if deep keys are null:', req.body.a.b.c.d.e.f.g === null ? "PASSED" : "FAILED (Should be null)");
