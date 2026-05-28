export type DifficultyLevel =
  | "easy"
  | "medium"
  | "hard";

export interface Question {
  text: string;

  difficulty: DifficultyLevel;

  marks: number;
}

export interface Section {
  title: string;

  instruction: string;

  questions: Question[];
}