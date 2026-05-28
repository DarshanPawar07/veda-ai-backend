// Assignment service
import Assignment from "../../models/Assignment";

export const createAssignmentService =
  async (data: any) => {
    return await Assignment.create(data);
  };

export const getAssignmentsService =
  async () => {
    return await Assignment.find().sort({
      createdAt: -1,
    });
  };