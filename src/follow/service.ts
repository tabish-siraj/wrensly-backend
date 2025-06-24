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

        const alreadyFollowing = await prisma.follow.findUnique({
            where: {
                followerId: user.id,
                followingId: parsed.data.following,
                deletedAt: null
            }
        })

        if (alreadyFollowing){
            await prisma.follow.update({
                where: {
                    followerId: user.id,
                    followingId: parsed.data.following,
                    deletedAt: null
                },
                data: {
                    deletedAt: new Date()
                }
            })
            return "unfollowed"
        } else{
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
