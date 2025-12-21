import { NormalizedPost } from '../types/express';

// Helper function to normalize post data
export const normalizePostData = (
  post: any,
  currentUserId: string
): NormalizedPost => {
  return {
    id: post.id,
    created_at: post.created_at,
    content: post.content,
    parent_id: post.parent_id,
    type: post.type,
    parent: post.parent
      ? {
        id: post.parent.id,
        content: post.parent.content,
        type: post.parent.type,
        created_at: post.parent.created_at,
        user: {
          id: post.parent.user.id,
          username: post.parent.user.username,
          first_name: post.parent.user.profile?.first_name || null,
          last_name: post.parent.user.profile?.last_name || null,
          avatar: post.parent.user.profile?.avatar || null,
        },
      }
      : null,
    user: {
      id: post.user.id,
      username: post.user.username,
      first_name: post.user.profile?.first_name || null,
      last_name: post.user.profile?.last_name || null,
      avatar: post.user.profile?.avatar || null,
    },
    stats: {
      likes: post._count.likes,
      reposts: post._count.reposts,
      comments: post._count.comments,
    },
    is_liked: post.likes.length > 0,
    is_reposted: post.reposts.length > 0,
    is_bookmarked: post.bookmarks.length > 0,
  };
};
