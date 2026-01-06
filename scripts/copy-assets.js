const fs = require('fs');
const path = require('path');
const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.printf(({ level, message, timestamp }) => `[${timestamp}] ${level.toUpperCase()}: ${message}`)
    ),
    transports: [new transports.Console(), new transports.File({ filename: 'logs/copy-assets.log' })],
});

const source = path.join(__dirname, '../src/generated');
const destination = path.join(__dirname, '../dist/src/generated');

try {
    logger.info(`Copying assets from ${source} to ${destination}...`);
    fs.cpSync(source, destination, { recursive: true });
    logger.info('Assets copied successfully.');
} catch (err) {
    logger.error('Error copying assets:', err);
    process.exit(1);
}
