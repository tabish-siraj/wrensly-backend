import { getUserByEmail } from "../user/service";
import { comparePassword } from "../utils/hashing";
import { generateToken, generateRefreshToken, verifyRefreshToken } from "../utils/auth";
import logger from "../utils/logger";

export const loginUser = async (email: string, password: string) => {
    const user = await getUserByEmail(email);
    if (!user) {
        logger.error(`User not found: ${email}`);
        throw new Error("User not found");
    }

    // Assuming you have a function to compare passwords
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
        logger.error(`Invalid password for user: ${email}`);
        throw new Error("Invalid password");
    }

    // Generate a token for the user
    const token = generateToken({ id: user.id, email: user.email });
    const refreshToken = generateRefreshToken({ id: user.id, email: user.email });
    return { token, refreshToken };
}

export const refreshToken = async (token: string) => {
    // Verify the token and extract user information
    const userData = verifyRefreshToken(token);
    if (!userData) {
        logger.error(`Invalid token: ${token}`);
        throw new Error("Invalid token");
    }

    // Generate a new token
    const newToken = generateToken({ id: userData.id, email: userData.email });
    return { token: newToken };
};