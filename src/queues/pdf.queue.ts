import { Queue } from "bullmq";

import { redisConnection } from "../config/redis";

export const pdfQueue = new Queue(
  "pdf-generation-queue",
  {
    connection: redisConnection,
  }
);