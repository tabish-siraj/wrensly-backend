import prisma from '../lib/prisma';
import { UserPayload } from '../types/express';
import { BadRequestError } from '../utils/errors';

interface NormalizedUser {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
}

interface NormalizedPost {
  id: string;
  content: string | null;
  createdAt: Date;
  user: NormalizedUser;
  parentId?: string | null;
  parent?: {
    id: string;
    content: string | null;
    createdAt: Date;
    user: NormalizedUser;
  } | null;
  stats: {
    likes: number;
    comments: number;
    reposts: number;
  };
  isLiked: boolean;
  isReposted: boolean;
  isBookmarked: boolean;
}

export const GetFeed = async (
  user: UserPayload,
  page: number,
  limit: number
): Promise<NormalizedPost[]> => {
  if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
    throw new BadRequestError('Invalid pagination parameters.');
  }

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
      parent: post.parent ? {
        id: post.parent.id,
        content: post.parent.content,
        createdAt: post.parent.createdAt,
        user: {
          id: post.parent.user.id,
          username: post.parent.user.username,
          firstName: post.parent.user.profile?.firstName,
          lastName: post.parent.user.profile?.lastName
        }
      } : null,
      user: {
        id: post.user.id,
        username: post.user.username,
        firstName: post?.user?.profile?.firstName,
        lastName: post?.user?.profile?.lastName
      },
      stats: {
        likes: post._count.likes,
        reposts: post._count.reposts,
        comments: post._count.comments
      },
      isLiked: post.likes.length > 0,
      isReposted: post._count.reposts > 0,
      isBookmarked: post.bookmarks.length > 0
    })) as NormalizedPost[];

  return normalizedFeed;
};
