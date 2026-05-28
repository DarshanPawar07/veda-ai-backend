// Assignment interface
export interface IAssignment {
  title: string;

  instructions: string;

  dueDate: string;

  questionTypes: string[];

  totalQuestions: number;

  totalMarks: number;

  uploadedFile?: string;

  extractedContent?: string;

  status: string;
}