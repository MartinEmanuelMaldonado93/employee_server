import { z } from 'zod';

export const configSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number(),
});

export const configParse = (config: Record<string, unknown>) => {
  const result = configSchema.parse(config);
  return result;
};
