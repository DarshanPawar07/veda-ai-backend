import { Server } from "socket.io";

let io: Server;

export const initializeSocket = (
  server: any
) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(
      `Socket Connected: ${socket.id}`
    );

    socket.on("disconnect", () => {
      console.log(
        `Socket Disconnected: ${socket.id}`
      );
    });
  });

  return io;
};

export { io };