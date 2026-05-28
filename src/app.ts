import express from "express";

import cors from "cors";

import morgan from "morgan";

import routes from "./routes";

import { errorMiddleware } from "./middleware/error.middleware";

import { loggerMiddleware } from "./middleware/logger.middleware";

import { rateLimiter } from "./middleware/rateLimiter.middleware";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(loggerMiddleware);

app.use(rateLimiter);

app.use("/uploads", express.static("uploads"));

app.use("/api", routes);

app.use(errorMiddleware);

export default app;