import IORedis from "ioredis";

export const redisConnection = {
  url: process.env.REDIS_URL,
};

export const redisClient = new IORedis(
  process.env.REDIS_URL as string,
  {
    maxRetriesPerRequest: null,
  }
);