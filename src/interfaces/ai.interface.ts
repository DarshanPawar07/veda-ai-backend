export interface IAIPromptPayload {
  subject: string;

  instructions: string;

  referenceMaterial?: string;

  totalQuestions: number;

  totalMarks: number;

  difficultyDistribution?: {
    easy: number;

    medium: number;

    hard: number;
  };
}

export interface IAIResponse {
  sections: {
    title: string;

    instruction: string;

    questions: {
      text: string;

      difficulty: string;

      marks: number;
    }[];
  }[];
}