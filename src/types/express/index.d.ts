// src/types/express/index.d.ts

// Define the structure of the user payload from the JWT
export interface UserPayload {
  id: string;
  email: string;
}

export interface GlobalParams {
  id?: string;
  username?: string;
  type?: string;
  search?: string;
  limit: number;
  offset: number;
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
