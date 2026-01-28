import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(1),
  JWT_REFRESH_SECRET: z.string().min(1),
  MJ_APIKEY_PUBLIC: z.string().min(1).optional(),
  MJ_APIKEY_PRIVATE: z.string().min(1).optional(),
  APP_URL: z.string().url().optional(),
  PORT: z.string().optional(),
  NODE_ENV: z.enum(['development', 'production', 'test']).optional(),
  ALLOWED_ORIGINS: z.string().optional(),
});

export const validateEnv = () => {
  try {
    envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingEnvs = error.errors.map((e) => e.path.join('.')).join(', ');
      throw new Error(
        `Missing or invalid environment variables: ${missingEnvs}`
      );
    }
    throw error;
  }
};
