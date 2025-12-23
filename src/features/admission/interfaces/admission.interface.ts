export type ScoreType = "ADMISSION";

export interface Admission {
  id: string;
  name: string;
  logo: string;
  roundSeats: number[];
  score: Score | null;
  faculty: Faculty;
  updatedAt: string;
  likes: number;
}

export interface Score {
  id: string;
  year: number;
  scoreType: ScoreType;
  min: number;
  max: number;
  avg: number;
}

export interface Faculty {
  id: string;
  name: string;
  tagId: string;
  university: University;
}

export interface University {
  id: string;
  name: string;
}
