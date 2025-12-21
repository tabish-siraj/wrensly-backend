import { z } from 'zod';

export const LikeSchema = z.object({
  post_id: z.string(),
  is_liked: z.boolean(),
});

export type LikeInterface = z.infer<typeof LikeSchema>;
