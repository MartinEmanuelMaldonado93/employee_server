export const config = (): EnvConfig => ({
  serverConfig: {
    port: Number(process.env.PORT),
  },
  database: {
    databaseUrl: process.env.DATABASE_URL,
  },
});
