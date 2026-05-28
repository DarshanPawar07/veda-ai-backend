import { Queue } from "bullmq";

import { redisConnection } from "../config/redis";

export const retryQueue =
  new Queue(
    "retry-queue",
    {
      connection: redisConnection,
    }
  );