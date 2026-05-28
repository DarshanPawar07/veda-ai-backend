import IORedis from "ioredis";

export const redisConfig = new IORedis(
  process.env.REDIS_URL as string,
  {
    maxRetriesPerRequest: null,
  }
);