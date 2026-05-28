import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 5000,

  MONGO_URI: process.env.MONGO_URI,

  REDIS_URL: process.env.REDIS_URL,

  OPENAI_API_KEY:
    process.env.OPENAI_API_KEY,

  CLIENT_URL:
    process.env.CLIENT_URL,
};