import prisma from '../lib/prisma';
import { UserPayload, NormalizedPost } from '../types/express';
// import { BadRequestError } from '../utils/errors'

export const GetFeed = async (
  user: UserPayload,
  page: number = 0,
  limit: number = 10
): Promise<NormalizedPost[]> => {
  const skip = (page - 1) * limit;

  const follows = await prisma.follow.findMany({
    where: {
      followerId: user.id,
      deletedAt: null,
    },
    select: {
      followingId: true,
    },
  });

  const followingIds = follows.map((follow) => follow.followingId);
  followingIds.push(user.id); // Include user's own posts

  const feed = await prisma.post.findMany({
    where: {
      userId: {
        in: followingIds,
      },
    },
    skip,
    take: limit,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          profile: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      },
      _count: {
        select: {
          comments: true,
          likes: true,
          reposts: true,
          bookmarks: true,
        },
      },
      likes: {
        where: { userId: user.id },
        select: {
          id: true,
        },
      },
      bookmarks: {
        where: { userId: user.id },
        select: {
          id: true,
        },
      },
      reposts: {
        where: { userId: user.id },
        select: {
          id: true,
        },
      },
      parent: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              username: true,
              profile: {
                select: {
                  firstName: true,
                  lastName: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const normalizedFeed = feed.map((post) => ({
    id: post.id,
    createdAt: post.createdAt,
    content: post.content,
    parentId: post.parentId,
    // prettier-ignore
    parent: post.parent
      ? {
        id: post.parent.id,
        content: post.parent.content,
        createdAt: post.parent.createdAt,
        user: {
          id: post.parent.user.id,
          username: post.parent.user.username,
          firstName: post.parent.user.profile?.firstName,
          lastName: post.parent.user.profile?.lastName,
        },
      }
      : null,
    user: {
      id: post.user.id,
      username: post.user.username,
      firstName: post?.user?.profile?.firstName,
      lastName: post?.user?.profile?.lastName,
    },
    stats: {
      likes: post._count.likes,
      reposts: post._count.reposts,
      comments: post._count.comments,
    },
    isLiked: post.likes.length > 0,
    isReposted: post.reposts.length > 0,
    isBookmarked: post.bookmarks.length > 0,
  })) as NormalizedPost[];

  return normalizedFeed;
};
