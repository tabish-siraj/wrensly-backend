import prisma from "../lib/prisma";
import { FollowSchema, FollowInterface } from "./schema";
import logger from "../utils/logger";
import { NotFoundError, BadRequestError, ForbiddenError, UnauthorizedError, InternalServerError } from "../utils/errors";

export const CreateFollowUnfollow = async (user: any, payload: FollowInterface) => {
    try {
        // Validate follow data against the schema
        const parsed = FollowSchema.safeParse(payload);
        if (!parsed.success) {
            const validationErrors = parsed.error.flatten().fieldErrors;
            logger.warn(`Follow validation failed: ${JSON.stringify(validationErrors)}`);
            throw new BadRequestError(validationErrors);
        }

        // Check if the followed user exists
        const followedUser = await prisma.user.findUnique({
            where: { id: parsed.data.following },
        });
        if (!followedUser) {
            logger.warn(`User you're trying to ${parsed.data.operation ? 'follow' : 'unfollow'} with ID ${parsed.data.following} not found`);
            throw new NotFoundError(`User you're trying to ${parsed.data.operation ? 'follow' : 'unfollow'} with ID ${parsed.data.following} not found`);
        }

        const existingFollow = await prisma.follow.findFirst({
            where: {
                followerId: user.id,
                followingId: parsed.data.following,
            }
        })

        if (existingFollow && !existingFollow.deletedAt) {
            await prisma.follow.update({
                where: { id: existingFollow.id },
                data: { deletedAt: new Date() }
            })
            return "unfollowed"
        } else if (existingFollow && existingFollow.deletedAt) {
            await prisma.follow.update({
                where: { id: existingFollow.id },
                data: { deletedAt: null }
            })
            return "followed"
        } else {
            await prisma.follow.create({
                data: {
                    followerId: user.id,
                    followingId: parsed.data.following,
                }
            })
            return "followed"
        }
    } catch (error) {
        throw error;
    }
}

export const GetFollow = async () => {
    try {
        return await prisma.follow.findMany({});
    } catch (error) {
        throw error;
    }
}
// export const GetFollowers = async (userId: string) => {
//     try {
//         const followers = await prisma.follow.findMany({
//             where: {
//                 followingId: userId,
//                 deletedAt: null
//             },
//             include: {
//                 follower: true
//             }
//         });

//         return followers.map(follow => ({
//             id: follow.follower.id,
//             username: follow.follower.username,
//             email: follow.follower.email,
//             createdAt: follow.follower.createdAt
//         }));
//     } catch (error) {
//         logger.error(`Error fetching followers for user ${userId}: ${error}`);
//         throw new InternalServerError("Failed to fetch followers");
//     }
// }