import { Queue } from "bullmq";

export const pdfQueue = new Queue(
  "pdf-generation-queue",
  {
    connection: {
      url: process.env.REDIS_URL,
    },
  }
);