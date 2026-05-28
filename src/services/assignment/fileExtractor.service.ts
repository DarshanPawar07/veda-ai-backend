import fs from "fs";

export const extractTextFromFile =
  async (filePath: string) => {
    try {
      const content =
        fs.readFileSync(
          filePath,
          "utf-8"
        );

      return content;
    } catch (error) {
      return "";
    }
  };