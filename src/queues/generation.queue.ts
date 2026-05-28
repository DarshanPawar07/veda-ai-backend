import { Queue }
from "bullmq";

export const generationQueue =
  new Queue(
    "question-generation-queue",
    {
      connection: {
        url:
          process.env.REDIS_URL,
      },
    }
  );