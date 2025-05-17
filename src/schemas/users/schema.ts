import { z } from 'zod';

export const CreateUserSchema = z.object({
  username: z.string().min(3).max(20).optional(),
  email: z.string().email(),
  dateOfBirth: z.string().optional(),
  gender: z.string().optional(),
  phoneNumber: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z.string().min(8).max(20),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;

export const UpdateUserSchema = z.object({
  username: z.string().min(3).max(20).optional(),
  dateOfBirth: z.string().optional(),
  gender: z.string().optional(),
  phoneNumber: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
