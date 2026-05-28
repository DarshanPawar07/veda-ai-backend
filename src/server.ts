import express
from "express";

import cors
from "cors";

import http
from "http";

import path
from "path";

import dotenv
from "dotenv";

dotenv.config();

import { connectDB }
from "./config/db";

import assignmentRoutes
from "./routes/assignment.routes";

import generationRoutes
from "./routes/generation.routes";

import pdfRoutes
from "./routes/pdf.routes";

const app = express();

const server =
  http.createServer(app);

app.use(cors());

app.use(express.json());

app.use(
  "/uploads",

  express.static(
    path.join(
      process.cwd(),
      "uploads"
    )
  )
);

app.use(
  "/api/assignments",
  assignmentRoutes
);

app.use(
  "/api/generation",
  generationRoutes
);

app.use(
  "/api/pdf",
  pdfRoutes
);

const PORT =
  process.env.PORT || 5000;

const startServer =
  async () => {

    try {

      await connectDB();

      server.listen(
        PORT,
        () => {

          console.log(
            `Server running on port ${PORT}`
          );
        }
      );

    } catch (error) {

      console.log(error);
    }
};

startServer();