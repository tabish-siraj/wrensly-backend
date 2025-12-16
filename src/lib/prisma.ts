// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient({
//   log: [
//     { level: 'query', emit: 'stdout' },
//     { level: 'info', emit: 'stdout' },
//     { level: 'warn', emit: 'stdout' },
//     { level: 'error', emit: 'stdout' },
//   ],
// });

// export default prisma;

import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma;
