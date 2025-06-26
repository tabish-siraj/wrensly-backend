// src/services/users/service.ts
import prisma from '../lib/prisma';
import { UserInterface, UserSchema, UserResponseInterface, ProfileInterface, ProfileSchema, UserUpdateInterface, UserUpdateSchema } from './schema';
import { hashPassword } from '../utils/hashing';
import logger from '../utils/logger';
import { NotFoundError, BadRequestError, ForbiddenError, UnauthorizedError, AlreadyExistsError, InternalServerError } from "../utils/errors";
import { omitEmptyFields } from './helper';


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

// export async function updateUser(id: string, user: UserUpdateInterface) {
//     const parsed = UserUpdateSchema.safeParse(user);
//     if (!parsed.success) {
//         const validationErrors = parsed.error.flatten().fieldErrors;
//         logger.warn(`User update validation failed: ${JSON.stringify(validationErrors)}`);
//         throw new BadRequestError(validationErrors);
//     }

//     try {
//         const updatedUser = await prisma.user.update({
//             where: { id },
//             data: {
//                 ...parsed.data,
//             },
//         });
//         if (!updatedUser) {
//             logger.warn(`User with ID ${id} not found`);
//             throw new NotFoundError({ id });
//         }
//         return updatedUser;
//     } catch (error) {
//         throw error;
//     }
// }

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

        // check if the username is already taken
        const existingUser = await prisma.user.findFirst({
            where: { username: username, NOT: { id: id} },
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

        const profile = omitEmptyFields(parsed.data)

        await prisma.profile.update({
            where: { userId: id },
            data: {
                ...profile,
            },
        })
        return updatedUser;
    } catch (error) {
        throw error;
    }
}

export async function getUserById(id: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { id },
            include: {
                Profile: true,
            },
        });
        if (!user) {
            logger.warn(`User with ID ${id} not found`);
            const error = new NotFoundError({ id });
            throw error;
        }
        const userResponse: UserResponseInterface = {
            id: user.id,
            username: user.username || "",
            email: user.email,
            firstName: user.Profile?.firstName || "",
            lastName: user.Profile?.lastName || "",
            dateOfBirth: user.Profile?.dateOfBirth?.toString() || "",
            gender: user.Profile?.gender || "",
            bio: user.Profile?.bio || "",
            avatar: user.Profile?.avatar || "",
            city: user.Profile?.city || "",
            state: user.Profile?.state || "",
            country: user.Profile?.country || "",
            phone: user.Profile?.phone || "",
            website: user.Profile?.website || "",
            createdAt: user.createdAt.toString() || "",
            updatedAt: user.updatedAt.toString() || "",
        };
        return userResponse;
    } catch (error) {
        throw error;
    }
}

export async function getUserByEmail(email: string) {
    // case insensitive search
    email = email.toLowerCase();
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: 'insensitive', // Case insensitive search
                },
            },
            include: {
                Profile: true,
            },
        });
        if (!user) {
            logger.warn(`User with email ${email} not found`);
            const error = new NotFoundError({ email });
            throw error;
        }
        const userResponse: UserResponseInterface = {
            id: user.id,
            username: user.username || "",
            email: user.email,
            firstName: user.Profile?.firstName || "",
            lastName: user.Profile?.lastName || "",
            dateOfBirth: user.Profile?.dateOfBirth?.toString() || "",
            gender: user.Profile?.gender || "",
            bio: user.Profile?.bio || "",
            avatar: user.Profile?.avatar || "",
            city: user.Profile?.city || "",
            state: user.Profile?.state || "",
            country: user.Profile?.country || "",
            phone: user.Profile?.phone || "",
            website: user.Profile?.website || "",
            createdAt: user.createdAt.toString() || "",
            updatedAt: user.updatedAt.toString() || "",
        };
        return userResponse;
    } catch (error) {
        throw error;
    }
}

// export const updateProfile = async (userId: string, profile: ProfileInterface) => {
//     const parsed = ProfileSchema.safeParse(profile);
//     if (!parsed.success) {
//         const validationErrors = parsed.error.flatten().fieldErrors;
//         logger.warn(`Profile validation failed: ${JSON.stringify(validationErrors)}`);
//         throw new BadRequestError(validationErrors);
//     }

//     try {
//         // Exclude userId from the data object to avoid type errors
//         const { ...profileData } = parsed.data;
//         return await prisma.profile.update({
//             where: { userId },
//             data: {
//                 ...profileData,
//             },
//         });
//     } catch (error) {
//         throw error;
//     }
// }

// export const getProfileByUserId = async (userId: string) => {
//     try {
//         const profile = await prisma.profile.findUnique({
//             where: { userId: userId },
//             include: {
//                 user: {
//                     select: {
//                         id: true,
//                         email: true,
//                         username: true,
//                     },
//                 },
//             },
//         });
//         if (!profile) {
//             logger.warn(`Profile for user ID ${userId} not found`);
//             throw new NotFoundError({ userId });
//         }
//         return profile;
//     } catch (error) {
//         throw error;
//     }
// };