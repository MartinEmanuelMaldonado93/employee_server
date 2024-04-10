import { z } from 'zod';

export const configSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.coerce.number(),
});

export function configParse(config: Record<string, unknown>) {
  const result = configSchema.parse(config);
  return result;
}
