import { z } from 'zod';

export const PostSchema = z.object({
    content: z.string().min(1).max(500),
    userId: z.string().cuid(), // Assuming userId is a CUID
    parentId: z.string().cuid().nullable().optional(),
});

export type PostInterface = z.infer<typeof PostSchema>;
