export const assignmentValidation =
  (assignment: any) => {
    if (!assignment.title) {
      throw new Error(
        "Title is required"
      );
    }

    return true;
  };