import prisma from '../lib/prisma';
import { getUserByEmail } from "../user/service";
import { comparePassword } from "../utils/hashing";
import { generateToken, generateRefreshToken, verifyRefreshToken } from "../utils/auth";
import logger from "../utils/logger";
import { NotFoundError, BadRequestError, ForbiddenError, UnauthorizedError, InternalServerError } from "../utils/errors";


export const loginUser = async (email: string, password: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: 'insensitive', // Case insensitive search
                },
            },
        });

        if (!user) {
            logger.error(`User not found: ${email}`);
            throw new NotFoundError("User not found");
        }

        // Assuming you have a function to compare passwords
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            logger.error(`Invalid password for user: ${email}`);
            throw new BadRequestError("Invalid password");
        }

        // Generate a token for the user
        const token = generateToken({ id: user.id, email: user.email });
        const refreshToken = generateRefreshToken({ id: user.id, email: user.email });
        return { token, refreshToken };

    } catch (error) {
        throw error;
    }
}

export const refreshToken = async (token: string) => {
    try {
        // Verify the token and extract user information
        const userData = verifyRefreshToken(token);
        if (!userData) {
            logger.error(`Invalid token: ${token}`);
            throw new BadRequestError("Invalid token");
        }

        // Generate a new token
        const newToken = generateToken({ id: userData.id, email: userData.email });
        return { token: newToken };

    } catch (error) {
        throw error;
    }
};