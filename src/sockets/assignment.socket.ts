import { Socket } from "socket.io";

export const assignmentSocket = (
  socket: Socket
) => {
  socket.on(
    "join-assignment-room",
    (assignmentId) => {
      socket.join(assignmentId);
    }
  );
};