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
    parent: post.parent
      ? {
          id: post.parent.id,
          content: post.parent.content,
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
    isLiked: post.likes.length > 0, // Check if the current user liked it
    isReposted: post.reposts.length > 0, // Check if the current user reposted it
    isBookmarked: post.bookmarks.length > 0, // Check if the current user bookmarked it
  };
};
