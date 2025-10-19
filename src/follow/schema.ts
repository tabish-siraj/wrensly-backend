import { z } from 'zod';

export const FollowSchema = z.object({
  following: z.string(),
  operation: z.enum(['follow', 'unfollow']),
});

export type FollowInterface = z.infer<typeof FollowSchema>;
