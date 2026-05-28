import { QueueEvents } from "bullmq";

export const generationQueueEvents =
  new QueueEvents(
    "question-generation-queue",
    {
      connection: {
        url: process.env.REDIS_URL,
      },
    }
  );