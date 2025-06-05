import { z } from 'zod';

export const PostSchema = z.object({
    content: z.string().min(1).max(500, "Post content must be between 1 and 500 characters long"),
    parentId: z.string().cuid().nullable().optional(),
});

export type PostInterface = z.infer<typeof PostSchema>;
