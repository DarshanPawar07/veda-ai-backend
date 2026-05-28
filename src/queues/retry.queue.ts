import { Queue } from "bullmq";

import { redisConfig } from "../config/redis";

export const retryQueue =
  new Queue(
    "retry-queue",
    {
      connection: redisConfig,
    }
  );