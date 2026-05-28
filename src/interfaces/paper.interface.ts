export interface IQuestion {
  text: string;

  difficulty: string;

  marks: number;
}

export interface ISection {
  title: string;

  instruction: string;

  questions: IQuestion[];
}

export interface IGeneratedPaper {
  assignmentId: string;

  sections: ISection[];
}