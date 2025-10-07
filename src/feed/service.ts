import prisma from '../lib/prisma';
import { UserPayload } from '../types/express';

interface NormalizedUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
}

interface NormalizedPost {
  id: string;
  content: string;
  createdAt: Date;
  user: NormalizedUser;
  parentId?: string | null;
  parent?: {
    id: string;
    content: string;
    createdAt: Date;
    user: NormalizedUser;
  } | null;
  stats: {
    likes: number;
    comments: number;
  };
  isLiked: boolean;
  isBookmarked: boolean;
}

export const GetFeed = async (user: UserPayload) => {
  try {
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

    if (followingIds.length === 0) return [];

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
      parent: post.parent,
      // parent: post.parent
      //   ? {
      //     id: post.parent.id,
      //     content: post.parent.content,
      //     createdAt: post.parent.createdAt,
      //     user: {
      //       id: post.parent.user.id,
      //       username: post.parent.user.username,
      //       firstName: post.parent.user.profile?.firstName,
      //       lastName: post.parent.user.profile?.lastName,
      //     },
      //   }
      //   : null,
      user: {
        id: post.user.id,
        username: post.user.username,
        firstName: post?.user?.profile?.firstName,
        lastName: post?.user?.profile?.lastName,
      },
      stats: {
        likes: post._count.likes,
        comments: post._count.comments,
      },
      isLiked: post.likes.length > 0,
      isBookmarked: post.bookmarks.length > 0,
    })) as NormalizedPost[];

    return normalizedFeed;
  } catch (error) {
    throw error;
  }
};
