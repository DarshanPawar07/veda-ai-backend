import { Queue } from "bullmq";

export const retryQueue = new Queue(
  "retry-queue",
  {
    connection: {
      url: process.env.REDIS_URL,
    },
  }
);