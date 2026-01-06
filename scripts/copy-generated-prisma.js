const fs = require('fs');
const path = require('path');
const workspaceRoot = path.resolve(__dirname, '..');
const src = path.join(workspaceRoot, 'src', 'generated');
const dest = path.join(workspaceRoot, 'dist', 'src', 'generated');

function copyRecursive(srcPath, destPath) {
    if (!fs.existsSync(srcPath)) {
        console.warn(`Source path does not exist: ${srcPath}`);
        return;
    }
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    try {
        // Node 16+ supports fs.cpSync; Node 22 definitely supports it.
        fs.rmSync(destPath, { recursive: true, force: true });
        fs.cpSync(srcPath, destPath, { recursive: true });
        console.log(`Copied ${srcPath} -> ${destPath}`);
    } catch (err) {
        console.error('Failed to copy generated prisma client:', err);
        process.exit(1);
    }
}

copyRecursive(src, dest);
