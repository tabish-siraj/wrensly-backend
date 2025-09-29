import prisma from "../lib/prisma";
import logger from "../utils/logger";
import { NotFoundError, BadRequestError, ForbiddenError, UnauthorizedError, InternalServerError } from "../utils/errors";
import { FollowSchema } from "./schema";

export const GetFeed = async (user: any) => {
    try {
        const follows = await prisma.follow.findMany({
            where: {
                followerId: user.id,
                deletedAt: null
            },
            select: {
                followingId: true
            }
        });

        const followingIds = follows.map(follow => follow.followingId);

        if (followingIds.length === 0) return [];

        const feed = await prisma.post.findMany({
            where: {
                userId: {
                    in: followingIds
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        Profile: {
                            select: {
                                firstName: true,
                                lastName: true
                            }
                        }
                    }
                },
                _count: {
                    select: {
                        Comment: true,
                        Like: true
                    }
                },
                Like: {
                    where: { userId: user.id },
                    select: {
                        id: true
                    }
                }
            }
        });
        return feed;
    } catch (error) {
        throw error;
    }
}