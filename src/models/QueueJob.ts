import mongoose from "mongoose";

const queueJobSchema =
  new mongoose.Schema(
    {
      jobId: String,

      queueName: String,

      status: String,

      failedReason: String,
    },

    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "QueueJob",
  queueJobSchema
);