import { z } from 'zod';

export const FollowSchema = z.object({
  followerId: z.string().cuid(),
  followingId: z.string().cuid(),
});