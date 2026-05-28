export interface GenerationJobPayload {
  assignmentId: string;
}

export interface QueueJobStatus {
  jobId: string;

  status: string;
}