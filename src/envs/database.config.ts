import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('database', () => ({
  databaseUrl: process.env.DATABASE_URL,
  password: process.env.DATABASE_PASSWORD,
}));
