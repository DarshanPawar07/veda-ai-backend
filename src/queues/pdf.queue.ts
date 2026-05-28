import { Queue } from "bullmq";

import { redisConfig } from "../config/redis";

export const pdfQueue = new Queue(
  "pdf-generation-queue",
  {
    connection: redisConfig,
  }
);