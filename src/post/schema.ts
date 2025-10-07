import { z } from 'zod';

export const PostSchema = z
  .object({
    content: z.string().trim().min(1).max(500).optional(),
    parentId: z.string().cuid().nullable().optional(),
  })
  .refine((data) => data.content || data.parentId, {
    message: 'Post must have either content or a parentId (repost).',
  });

export type PostInterface = z.infer<typeof PostSchema>;
