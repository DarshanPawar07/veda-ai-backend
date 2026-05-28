import { redisClient } from "../config/redis";

export const setCache = async (
  key: string,
  value: any
) => {

  await redisClient.set(
    key,
    JSON.stringify(value)
  );

};

export const getCache = async (
  key: string
) => {

  const data =
    await redisClient.get(key);

  return data
    ? JSON.parse(data)
    : null;

};