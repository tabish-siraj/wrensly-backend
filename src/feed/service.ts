import prisma from '../lib/prisma';

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

export const GetFeed = async (user: any) => {
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
            Profile: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        },
        _count: {
          select: {
            Comment: true,
            Like: true,
            Post: true,
            Bookmark: true,
          },
        },
        Like: {
          where: { userId: user.id },
          select: {
            id: true,
          },
        },
        Bookmark: {
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
                Profile: {
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
      parent: post.parent
        ? {
            id: post.parent.id,
            content: post.parent.content,
            createdAt: post.parent.createdAt,
            user: {
              id: post.parent.user.id,
              username: post.parent.user.username,
              firstName: post.parent.user.Profile?.firstName,
              lastName: post.parent.user.Profile?.lastName,
            },
          }
        : null,
      user: {
        id: post.user.id,
        username: post.user.username,
        firstName: post?.user?.Profile?.firstName,
        lastName: post?.user?.Profile?.lastName,
      },
      stats: {
        likes: post._count.Like,
        comments: post._count.Comment,
      },
      isLiked: post.Like.length > 0,
      isBookmarked: post.Bookmark.length > 0,
    })) as NormalizedPost[];

    return normalizedFeed;
  } catch (error) {
    throw error;
  }
};
