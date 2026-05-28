import { connectDB } from "./config/db";

import "./workers/generation.worker";



const startWorkers = async () => {
  try {
    await connectDB();

    console.log(
      "BullMQ Workers Started"
    );
  } catch (error) {
    console.log(error);
  }
};

startWorkers();