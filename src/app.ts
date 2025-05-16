import express from 'express';
import userRoutes from './routes/users/route';
import { PrismaClient } from '@prisma/client';


const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

const prisma = new PrismaClient();
export default app;
export { prisma };
