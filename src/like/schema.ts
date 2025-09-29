import { z } from "zod";

export const LikeSchema = z.object({
    postId: z.string(),
    isLiked: z.boolean(),
});

export type LikeInterface = z.infer<typeof LikeSchema>;