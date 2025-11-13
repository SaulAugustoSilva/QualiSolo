export interface Question {
  id: number;
  text: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  options: QuestionOption[];
  weight: number;
}

export interface QuestionOption {
  value: string;
  label: string;
  score: number;
}

export interface Answer {
  questionId: number;
  selectedValue: string;
  score: number;
}

export interface EvaluationResult {
  totalScore: number;
  percentage: number;
  category: SoilQualityCategory;
  answers: Answer[];
}

export interface SoilQualityCategory {
  name: string;
  description: string;
  color: string;
  bgColor: string;
  icon: string;
  recommendations: string[];
}

export interface ProgressInfo {
  current: number;
  total: number;
  percentage: number;
}