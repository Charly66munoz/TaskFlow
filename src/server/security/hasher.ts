import bcrypt from 'bcryptjs';

export async function hashPassword(plainPassword: string) {
  const saltRounds = 10; 
  
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

export async function verifyPassword(plainPassword: string, hashedPasswordFromDatabase: string) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPasswordFromDatabase);
  return isMatch; 
}