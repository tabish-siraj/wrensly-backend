import { NormalizedPost } from '../types/express';

// Helper function to normalize post data
export const normalizePostData = (
  post: any,
  currentUserId: string
): NormalizedPost => {
  return {
    id: post.id,
    createdAt: post.createdAt,
    content: post.content,
    parentId: post.parentId,
    type: post.type,
    parent: post.parent
      ? {
          id: post.parent.id,
          content: post.parent.content,
          type: post.parent.type,
          createdAt: post.parent.createdAt,
          user: {
            id: post.parent.user.id,
            username: post.parent.user.username,
            firstName: post.parent.user.profile?.firstName || null,
            lastName: post.parent.user.profile?.lastName || null,
            avatar: post.parent.user.profile?.avatar || null,
          },
        }
      : null,
    user: {
      id: post.user.id,
      username: post.user.username,
      firstName: post.user.profile?.firstName || null,
      lastName: post.user.profile?.lastName || null,
      avatar: post.user.profile?.avatar || null,
    },
    stats: {
      likes: post._count.likes,
      reposts: post._count.reposts,
      comments: post._count.comments,
    },
    isLiked: post.likes.length > 0,
    isReposted: post.reposts.length > 0,
    isBookmarked: post.bookmarks.length > 0,
  };
};
