import { hashPassword, comparePassword } from './hashing';

describe('Hashing Utility', () => {
  it('should correctly hash and compare a password', async () => {
    const password = 'my-secret-password';
    const hashedPassword = await hashPassword(password);

    // Ensure the hash is not the same as the password
    expect(hashedPassword).not.toEqual(password);

    // Ensure the correct password passes the comparison
    const isMatch = await comparePassword(password, hashedPassword);
    expect(isMatch).toBe(true);

    // Ensure an incorrect password fails the comparison
    const isNotMatch = await comparePassword('wrong-password', hashedPassword);
    expect(isNotMatch).toBe(false);
  });
});
