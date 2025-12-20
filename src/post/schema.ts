import { z } from 'zod';

export const PostSchema = z.object({
  content: z.string().trim().min(1).max(500),
});

export const CommentSchema = z.object({
  content: z.string().trim().min(1).max(500),
  parentId: z.string().cuid(),
});

export const QuoteSchema = z.object({
  content: z.string().trim().min(1).max(500),
  parentId: z.string().cuid(),
});

export const RepostSchema = z.object({
  parentId: z.string().cuid(),
});

export type PostInterface = z.infer<typeof PostSchema>;
export type CommentInterface = z.infer<typeof CommentSchema>;
export type QuoteInterface = z.infer<typeof QuoteSchema>;
export type RepostInterface = z.infer<typeof RepostSchema>;
