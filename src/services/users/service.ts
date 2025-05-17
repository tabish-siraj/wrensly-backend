import prisma from '../../lib/prisma';
import { CreateUserInput, CreateUserSchema } from '../../schemas/users/schema';
import { hashPassword } from '../../utils/hashing';

async function createUser(user: CreateUserInput) {
  // Validate the user input using Zod
  const parsedUser = CreateUserSchema.safeParse(user);
  if (!parsedUser.success) {
    // Handle validation errors
    const errors = parsedUser.error.format();
    throw new Error(
      `Validation failed: ${JSON.stringify(errors, null, 2)}`
    );
  }

  // Hash the password
  const hashedPassword = hashPassword(user.password);


  // Create the user in the database
  const createdUser = await prisma.user.create({
    data: parsedUser.data,
  });
  return createdUser;
}