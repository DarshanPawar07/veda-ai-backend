export const assignmentFormatter = (
  assignment: any
) => {
  return {
    id: assignment._id,

    title: assignment.title,

    dueDate: assignment.dueDate,

    status: assignment.status,
  };
};