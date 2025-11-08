import { z } from 'zod';

export const PostSchema = z
  .object({
    content: z.string().trim().min(1).max(500).optional(),
    type: z.enum(['POST', 'COMMENT', 'QUOTE', 'REPOST']),
    parentId: z.string().cuid().nullable().optional(),
    rootId: z.string().cuid().nullable().optional(),
  })
  .superRefine((data, ctx) => {
    const requiresParent = ['COMMENT', 'QUOTE', 'REPOST'].includes(data.type);

    if (requiresParent) {
      if (!data.parentId)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `parentId is required for ${data.type}`,
          path: ['parentId'],
        });
    }

    if (data.type === 'POST') {
      if (data.parentId)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'parentId should not be provided for a post',
          path: ['parentId'],
        });
    }

    if (['POST', 'COMMENT', 'QUOTE'].includes(data.type) && !data.content) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `content is required for ${data.type}`,
        path: ['content'],
      });
    }
  });

export type PostInterface = z.infer<typeof PostSchema>;
