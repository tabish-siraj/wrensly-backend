import { z } from 'zod';

export const BookmarkSchema = z.object({
  post_id: z.string(),
  is_bookmarked: z.boolean(),
});

export type BookmarkInterface = z.infer<typeof BookmarkSchema>;
