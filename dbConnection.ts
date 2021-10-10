export const dbConnection: any =
  process.env.NODE_ENV === 'development'
    ? {
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: String(process.env.POSTGRES_PASSWORD),
        database: process.env.POSTGRES_DB,
      }
    : { url: process.env.DATABASE_URL };
