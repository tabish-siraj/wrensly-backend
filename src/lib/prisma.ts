import 'dotenv/config';
import path from 'path';
import fs from 'fs';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is missing');
}

// Ensure the path is absolute
const caPath = path.resolve(process.cwd(), 'ca.pem');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        // This is the critical part for Aiven
        rejectUnauthorized: true,
        ca: fs.readFileSync(caPath).toString(),
    },
});

// Force the pool to connect once to catch errors early
pool.on('error', (err) => console.error('Unexpected pool error', err));

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;
