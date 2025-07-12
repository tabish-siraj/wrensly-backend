// src/services/users/service.ts
import prisma from '../lib/prisma';
import { UserInterface, UserSchema, UserResponseInterface, ProfileInterface, ProfileSchema, UserUpdateInterface, UserUpdateSchema } from './schema';
import { hashPassword } from '../utils/hashing';
import logger from '../utils/logger';
import { NotFoundError, BadRequestError, ForbiddenError, UnauthorizedError, AlreadyExistsError, InternalServerError } from "../utils/errors";
import { omitEmptyFields, toUserResponse } from './helper';


export async function createUser(user: UserInterface) {
    // Validate user data against the schema
    const parsed = UserSchema.safeParse(user);
    if (!parsed.success) {
        const validationErrors = parsed.error.flatten().fieldErrors;
        logger.warn(`User validation failed: ${JSON.stringify(validationErrors)}`);
        throw new BadRequestError(validationErrors);
    }

    // Check if the user already exists by email
    const existingUser = await prisma.user.findUnique({
        where: { email: parsed.data.email },
    });
    if (existingUser) {
        logger.warn(`User with email ${parsed.data.email} already exists`);
        throw new AlreadyExistsError({ email: parsed.data.email });
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
            throw new InternalServerError('Failed to create user');
        }

        // Initialize profile with empty data
        const userId = createdUser.id;
        await prisma.profile.create({
            data: { userId: userId },
        });

        return createdUser;
    } catch (error) {
        throw error;
    }
}

export async function updateUser(id: string, user: UserUpdateInterface) {
    const parsed = UserUpdateSchema.safeParse(user);
    if (!parsed.success) {
        const validationErrors = parsed.error.flatten().fieldErrors;
        logger.warn(`User update validation failed: ${JSON.stringify(validationErrors)}`);
        throw new BadRequestError(validationErrors);
    }

    try {

        const username = parsed.data.username;
        delete parsed.data.username;

        // Validate that the username is provided
        if (username) {
            // check if the username is already taken
            const existingUser = await prisma.user.findFirst({
                where: { username: username, NOT: { id: id } },
            });
            if (existingUser) {
                logger.warn(`User with username ${username} already exists`);
                throw new AlreadyExistsError({ username });
            }

            const updatedUser = await prisma.user.update({
                where: { id },
                data: {
                    username: username,
                },
            });
            if (!updatedUser) {
                logger.warn(`User with ID ${id} not found`);
                throw new NotFoundError(`User with ID ${id} not found`);
            }
        }

        const profile = omitEmptyFields(parsed.data)

        await prisma.profile.update({
            where: { userId: id },
            data: {
                ...profile,
            },
        })
        return;
    } catch (error) {
        throw error;
    }
}

export async function getUserById(id: string) {
    try {
        // also get profile and followers/following count
        const user = await prisma.user.findUnique({
            where: { id },
            include: {
                Profile: true,
                _count: {
                    select: {
                        Follower: true,
                        Following: true,
                    },
                },
            },
        });
        if (!user) {
            logger.warn(`User with ID ${id} not found`);
            throw new NotFoundError({ id });
        }

        // // Fetch follower and following counts in parallel
        // const [followerCount, followingCount] = await Promise.all([
        //     prisma.follow.count({ where: { followingId: id } }),
        //     prisma.follow.count({ where: { followerId: id } }),
        // ]);

        return toUserResponse(user);
    } catch (error) {
        throw error;
    }
}

export async function getUserByEmail(email: string) {
    // case insensitive search
    email = email.toLowerCase();
    try {
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                Profile: true,
                _count: {
                    select: {
                        Follower: true,
                        Following: true,
                    },
                },
            },
        });
        if (!user) {
            logger.warn(`User with email ${email} not found`);
            const error = new NotFoundError({ email });
            throw error;
        }

        return toUserResponse(user);
    } catch (error) {
        throw error;
    }
}

export async function getUserByUsername(username: string) {
    // case insensitive search
    username = username.toLowerCase();
    try {
        const user = await prisma.user.findUnique({
            where: { username },
            include: {
                Profile: true,
                _count: {
                    select: {
                        Follower: true,
                        Following: true,
                    },
                },
            },
        });
        if (!user) {
            logger.warn(`User with username ${username} not found`);
            const error = new NotFoundError({ username });
            throw error;
        }

        return toUserResponse(user);
    } catch (error) {
        throw error;
    }
}