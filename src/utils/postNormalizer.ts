import { NormalizedPost } from '../types/express';

// Helper function to normalize post data
export const normalizePostData = (
  post: any,
  currentUserId: string
): NormalizedPost => {
  return {
    id: post.id,
    user_id: post.user_id || post.userId,
    root_id: post.root_id || post.rootId,
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
          username: post.parent.user.username || '',
          first_name: post.parent.user.profile?.first_name || '',
          last_name: post.parent.user.profile?.last_name || '',
          avatar: post.parent.user.profile?.avatar || '',
        },
      }
      : null,
    user: {
      id: post.user.id,
      username: post.user.username || '',
      first_name: post.user.profile?.first_name || '',
      last_name: post.user.profile?.last_name || '',
      avatar: post.user.profile?.avatar || '',
    },
    // Handle Twitter-like repost metadata
    reposted_by: post.reposted_by || null,
    stats: {
      likes: post._count?.likes || post.stats?.likes || 0,
      reposts: post._count?.reposts || post.stats?.reposts || 0,
      comments: post._count?.comments || post.stats?.comments || 0,
    },
    is_liked: post.likes?.length > 0 || post.is_liked || false,
    is_reposted: post.reposts?.length > 0 || post.is_reposted || false,
    is_bookmarked: post.bookmarks?.length > 0 || post.is_bookmarked || false,
  };
};
