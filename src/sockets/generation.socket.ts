import { Socket } from "socket.io";

export const generationSocket = (
  socket: Socket
) => {
  socket.on(
    "generation-status",
    (data) => {
      console.log(data);
    }
  );
};