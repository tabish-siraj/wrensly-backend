import { z } from 'zod';

export const CreateUserSchema = z.object({
  username: z.string().min(3).max(20).optional(),
  email: z.string().email(),
  date_of_birth: z.string().optional(),
  gender: z.string().optional(),
  phone_number: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  password: z.string().min(8).max(20),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
