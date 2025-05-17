import bcrypt from 'bcrypt';

function hashPassword(password: string): string {
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  return hashedPassword;
}

function comparePassword(password: string, hashedPassword: string): boolean {
  return bcrypt.compareSync(password, hashedPassword);
}

export { hashPassword, comparePassword };
// This file is responsible for hashing and comparing passwords.