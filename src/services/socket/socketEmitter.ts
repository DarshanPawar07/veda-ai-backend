import { io } from "../../config/socket";

export const emitGenerationComplete =
  (
    assignmentId: string
  ) => {
    io.emit(
      "generation-complete",
      {
        assignmentId,
      }
    );
  };