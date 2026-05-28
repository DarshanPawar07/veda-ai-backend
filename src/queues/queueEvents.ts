import { QueueEvents } from "bullmq";

import { redisConfig } from "../config/redis";

export const generationQueueEvents =
  new QueueEvents(
    "question-generation-queue",
    connection: {
  url: process.env.REDIS_URL,
}
  );