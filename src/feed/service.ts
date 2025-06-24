import prisma from "../lib/prisma";
import logger from "../utils/logger";
import { NotFoundError, BadRequestError, ForbiddenError, UnauthorizedError, InternalServerError } from "../utils/errors";
import { FollowSchema } from "./schema";

export const GetFeed = async (user: any) => {
    try {
        const follows = await prisma.follow.findMany({
            where: {
                followerId: user.id
            },
            select: {
                followingId: true
            }
        });

        const feed = await prisma.feed.findMany({
            where: {
                userId: {
                    in: follows
                }
            },
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
        return feed;

    } catch (error) {
        throw error;
    }
}