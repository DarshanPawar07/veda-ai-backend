import GeneratedPaper from "../../models/GeneratedPaper";

export const saveGeneratedPaper =
  async (
    assignmentId: string,
    sections: any[]
  ) => {

    const generatedPaper =
      await GeneratedPaper.create({
        assignmentId,
        sections,
      });

    return generatedPaper;
  };