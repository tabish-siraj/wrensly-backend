import { z } from 'zod';

export const FeedQuerySchema = z.object({
  cursor: z.string().optional(),
  limit: z.number().min(1).max(100).optional()
});

export type FeedQuery = z.infer<typeof FeedQuerySchema>;