import { z } from "zod";

export const CommentSchema = z.object({
    content: z.string().max(500, "Comment must be at most 500 characters long"),
    postId: z.string(),
    parentId: z.string().nullable().optional(),
});

export type CommentInterface = z.infer<typeof CommentSchema>;