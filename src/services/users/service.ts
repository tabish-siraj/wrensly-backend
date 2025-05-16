import bcrypt from 'bcrypt';
import { prisma } from '../../app';
import { CreateUserInput } from '../../interfaces/users/interface';

export const createUser = async ({ username, email, password }: CreateUserInput) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { username, email, password: hashedPassword },
  });
};
