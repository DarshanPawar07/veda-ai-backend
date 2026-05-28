import { Server } from "socket.io";

import { assignmentSocket } from "./assignment.socket";

import { generationSocket } from "./generation.socket";

export const socketHandlers = (
  io: Server
) => {
  io.on("connection", (socket) => {
    console.log(
      `Socket Connected: ${socket.id}`
    );

    assignmentSocket(socket);

    generationSocket(socket);

    socket.on("disconnect", () => {
      console.log(
        `Socket Disconnected: ${socket.id}`
      );
    });
  });
};