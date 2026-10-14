export interface QuestionOption {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuestionItem {
  id: string;
  n: number;
  stem: string;
  opts: QuestionOption[];
  ans: 'A' | 'B' | 'C' | 'D';
  explanation?: string;
  context?: string;
}

export interface ModuleData {
  id: string;
  code: string;
  title: string;
  standards: string;
  questionCount: number;
  summary: string;
  lectureOutline: string;
  items: QuestionItem[];
}
