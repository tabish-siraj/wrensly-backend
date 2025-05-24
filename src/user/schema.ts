import { z } from 'zod';

export const UserSchema = z.object({
  username: z.string().nullable().optional(),
  email: z.string().email(),
  password: z.string(),
});

export type UserInterface = z.infer<typeof UserSchema>;

export const ProfileSchema = z.object({
  userId: z.string().uuid().nullable().optional(),
  firstName: z.string().nullable().optional(),
  lastName: z.string().nullable().optional(),
  dateOfBirth: z.date().nullable().optional(),
  gender: z.string().nullable().optional(),
  bio: z.string().nullable().optional(),
  avatar: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  country: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
  website: z.string().nullable().optional(),
});

export type ProfileInterface = z.infer<typeof ProfileSchema>;