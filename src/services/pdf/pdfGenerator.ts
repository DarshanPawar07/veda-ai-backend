import PDFDocument from "pdfkit";

import fs from "fs";

import path from "path";

export const generatePDF = async (
  assignment: any,
  paper: any
): Promise<string> => {

  return new Promise(
    (
      resolve,
      reject
    ) => {

      try {

        const uploadsDir =
          path.join(
            __dirname,
            "../../../uploads/pdfs"
          );

        if (
          !fs.existsSync(
            uploadsDir
          )
        ) {

          fs.mkdirSync(
            uploadsDir,
            {
              recursive: true,
            }
          );
        }

        const fileName =
          `${assignment._id}.pdf`;

        const filePath =
          path.join(
            uploadsDir,
            fileName
          );

        const pdfUrl =
          `/uploads/pdfs/${fileName}`;

        const doc =
          new PDFDocument({
            margin: 50,
          });

        const stream =
          fs.createWriteStream(
            filePath
          );

        doc.pipe(stream);

        // TITLE

        doc
          .fontSize(24)
          .text(
            assignment.title,
            {
              align: "center",
            }
          );

        doc.moveDown();

        // INSTRUCTIONS

        doc
          .fontSize(14)
          .text(
            `Instructions: ${assignment.instructions}`
          );

        doc.moveDown(2);

        // SECTIONS

        paper.sections.forEach(
          (
            section: any,
            sectionIndex: number
          ) => {

            doc
              .fontSize(18)
              .text(
                `${section.title}`,
                {
                  underline: true,
                }
              );

            doc.moveDown(0.5);

            doc
              .fontSize(12)
              .text(
                section.instruction
              );

            doc.moveDown();

            // QUESTIONS

            section.questions.forEach(
              (
                question: any,
                questionIndex: number
              ) => {

                doc
                  .fontSize(13)
                  .text(
                    `${
                      questionIndex + 1
                    }. ${
                      question.question
                    }`
                  );

                doc.moveDown(
                  0.3
                );

                doc
                  .fontSize(11)
                  .fillColor(
                    "gray"
                  )
                  .text(
                    `Difficulty: ${question.difficulty}`
                  );

                doc
                  .text(
                    `Marks: ${question.marks}`
                  );

                doc
                  .fillColor(
                    "black"
                  );

                doc.moveDown();
              }
            );

            doc.moveDown();
          }
        );

        doc.end();

        stream.on(
          "finish",

          () => {

            resolve(
              pdfUrl
            );
          }
        );

        stream.on(
          "error",

          (
            error
          ) => {

            reject(
              error
            );
          }
        );

      } catch (error) {

        reject(error);
      }
    }
  );
};