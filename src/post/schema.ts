import { z } from 'zod';

export const PostSchema = z
  .object({
    content: z.string().trim().min(1).max(500),
    parentId: z.string().cuid().nullable().optional(),
  });

export type PostInterface = z.infer<typeof PostSchema>;

export const RepostSchema = z
  .object({
    postId: z.string(),
    action: z.string()
  });

export type RepostInterface = z.infer<typeof RepostSchema>;
