// src/types/express/index.d.ts
export interface GlobalParams {
  id?: string;
  username?: string;
  type?: string;
  search?: string;
  limit: number;
  offset: number;
  cursor: string | null;
  page: number;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
      gParams: GlobalParams;
    }
  }
}

export interface UserPayload {
  id: string;
  email: string;
}

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
  type: string;
  createdAt: Date;
  user: NormalizedUser;
  parentId?: string | null;
  parent?: {
    id: string;
    content: string | null;
    type: string;
    createdAt: Date;
    user: NormalizedUser;
  } | null;
  comments?: NormalizedPost[];
  stats: {
    likes: number;
    comments: number;
    reposts: number;
  };
  isLiked: boolean;
  isReposted: boolean;
  isBookmarked: boolean;
}
