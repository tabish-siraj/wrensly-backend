import { z } from "zod";

export const BookmarkSchema = z.object({
    postId: z.string(),
    isBookmarkd: z.boolean(),
});

export type BookmarkInterface = z.infer<typeof BookmarkSchema>;