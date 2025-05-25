// src/services/users/service.ts
import prisma from '../lib/prisma';
import { UserInterface, UserSchema, ProfileInterface, ProfileSchema, UserUpdateInterface, UserUpdateSchema } from './schema';
import { hashPassword } from '../utils/hashing';
import logger from '../utils/logger';

export async function createUser(user: UserInterface) {
    // Validate user data against the schema
    const parsed = UserSchema.safeParse(user);
    if (!parsed.success) {
        logger.warn(`User validation failed: ${JSON.stringify(parsed.error.format())}`);
        const validationErrors = parsed.error.flatten().fieldErrors;
        const error = new Error('Validation failed');
        (error as any).details = validationErrors;
        throw error;
    }

    // Hash the password before storing it
    const hashedPassword = hashPassword(parsed.data.password);
    try {
        const createdUser = await prisma.user.create({
            data: {
                ...parsed.data,
                password: hashedPassword,
            },
        });
        if (!createdUser) {
            logger.warn('User creation failed');
            throw new Error('User creation failed');
        }

        // Initialize profile with empty data
        const userId = createdUser.id;
        await prisma.profile.create({
            data: { userId: userId },
        });

        return createdUser;
    } catch (error) {
        logger.error(`DB error creating user: ${error}`);
        throw new Error('Database error: failed to create user');
    }
}

export async function updateUser(id: string, user: UserUpdateInterface) {
    const parsed = UserUpdateSchema.safeParse(user);
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

export const updateProfile = async (userId: string, profile: ProfileInterface) => {
    const parsed = ProfileSchema.safeParse(profile);
    if (!parsed.success) {
        logger.warn(`Profile validation failed: ${JSON.stringify(parsed.error.format())}`);
        const validationErrors = parsed.error.flatten().fieldErrors;
        const error = new Error('Validation failed');
        (error as any).details = validationErrors;
        throw error;
    }

    try {
        // Exclude userId from the data object to avoid type errors
        const { ...profileData } = parsed.data;
        const updatedProfile = await prisma.profile.update({
            where: { userId },
            data: {
                ...profileData,
            },
        });
        if (!updatedProfile) {
            logger.warn(`Profile for user ID ${userId} not found`);
            const error = new Error('Profile not found');
            (error as any).details = { userId };
            throw error;
        }
        return updatedProfile;
    } catch (error) {
        logger.error(`DB error updating profile: ${error}`);
        throw new Error('Database error: failed to update profile');
    }
}

export const getProfileByUserId = async (userId: string) => {
    try {
        const profile = await prisma.profile.findUnique({
            where: { userId: userId },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        username: true,
                    },
                },
            },
        });
        if (!profile) {
            logger.warn(`Profile for user ID ${userId} not found`);
            const error = new Error('Profile not found');
            (error as any).details = { userId };
            throw error;
        }
        return profile;
    } catch (error) {
        logger.error(`DB error fetching profile: ${error}`);
        throw new Error('Database error: failed to fetch profile');
    }
};