import { redisConnection } from "../config/redis";

export const setCache = async (
  key: string,
  value: any
) => {
  await redisConnection.set(
    key,
    JSON.stringify(value)
  );
};

export const getCache = async (
  key: string
) => {
  const data =
    await redisConnection.get(key);

  return data
    ? JSON.parse(data)
    : null;
};