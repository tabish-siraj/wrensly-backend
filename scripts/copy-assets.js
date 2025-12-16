const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '../src/generated');
const destination = path.join(__dirname, '../dist/src/generated');

try {
    console.log(`Copying assets from ${source} to ${destination}...`);
    fs.cpSync(source, destination, { recursive: true });
    console.log('Assets copied successfully.');
} catch (err) {
    console.error('Error copying assets:', err);
    process.exit(1);
}
