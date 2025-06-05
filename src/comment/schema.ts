import { z } from "zod";

export const CommentSchema = z.object({
    content: z.string(),
    postId: z.string(),
    parentId: z.string().nullable().optional(),
});

export type CommentInterface = z.infer<typeof CommentSchema>;