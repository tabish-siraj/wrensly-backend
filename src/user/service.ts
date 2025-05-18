// src/services/users/service.ts
import prisma from '../lib/prisma';
import { CreateUserInput, CreateUserSchema, UpdateUserInput, UpdateUserSchema } from './schema';
import { hashPassword } from '../utils/hashing';
import logger from '../utils/logger';

export async function createUser(user: CreateUserInput) {
    const parsed = CreateUserSchema.safeParse(user);
    if (!parsed.success) {
        logger.warn(`User validation failed: ${JSON.stringify(parsed.error.format())}`);
        const validationErrors = parsed.error.flatten().fieldErrors;
        const error = new Error('Validation failed');
        (error as any).details = validationErrors;
        throw error;
    }

    const hashedPassword = hashPassword(parsed.data.password);
    try {
        const createdUser = await prisma.user.create({
            data: {
                ...parsed.data,
                password: hashedPassword,
            },
        });
        return createdUser;
    } catch (error) {
        logger.error(`DB error creating user: ${error}`);
        throw new Error('Database error: failed to create user');
    }
}

export async function updateUser(id: string, user: UpdateUserInput) {
    const parsed = UpdateUserSchema.safeParse(user);
    if (!parsed.success) {
        logger.warn(`User validation failed: ${JSON.stringify(parsed.error.format())}`);
        const validationErrors = parsed.error.flatten().fieldErrors;
        const error = new Error('Validation failed');
        (error as any).details = validationErrors;
        throw error;
    }

    try {
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...parsed.data,
            },
        });
        if (!updatedUser) {
            logger.warn(`User with ID ${id} not found`);
            const error = new Error('User not found');
            (error as any).details = { id };
            throw error;
        }
        return updatedUser;
    } catch (error) {
        logger.error(`DB error updating user: ${error}`);
        throw new Error('Database error: failed to update user');
    }
}

export async function getUserById(id: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            logger.warn(`User with ID ${id} not found`);
            const error = new Error('User not found');
            (error as any).details = { id };
            throw error;
        }
        return user;
    } catch (error) {
        logger.error(`DB error fetching user: ${error}`);
        throw new Error('Database error: failed to fetch user');
    }
}

export async function getUserByEmail(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            logger.warn(`User with email ${email} not found`);
            const error = new Error('User not found');
            (error as any).details = { email };
            throw error;
        }
        return user;
    } catch (error) {
        logger.error(`DB error fetching user: ${error}`);
        throw new Error('Database error: failed to fetch user');
    }
}