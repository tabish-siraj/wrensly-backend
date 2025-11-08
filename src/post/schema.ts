import { z } from 'zod';

export const PostSchema = z
  .object({
    content: z.string().trim().min(1).max(500),
    type: z.enum(['POST', 'COMMENT', 'QUOTE', 'REPOST']),
    parentId: z.string().cuid().nullable().optional(),
    rootId: z.string().cuid().nullable().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === 'COMMENT' || data.type === 'QUOTE') {
      if (!data.parentId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `parentId is required for ${data.type}`,
          path: ['parentId'],
        });
      }
      if (!data.rootId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `rootId is required for ${data.type}`,
          path: ['rootId'],
        });
      }
      if (!data.content) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `content is required for ${data.type}`,
          path: ['content'],
        });
      }
    }

    if (data.type === 'REPOST') {
      if (!data.parentId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'parentId is required for reposts',
          path: ['parentId'],
        });
      }
      if (!data.rootId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'rootId is required for reposts',
          path: ['rootId'],
        });
      }
    }

    if (data.type === 'POST') {
      if (data.parentId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'parentId should not be provided for a post',
          path: ['parentId'],
        });
      }
      if (data.rootId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'rootId should not be provided for a post',
          path: ['rootId'],
        });
      }
      if (!data.content) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'content is required for a post',
          path: ['content'],
        });
      }
    }
  });

export type PostInterface = z.infer<typeof PostSchema>;
