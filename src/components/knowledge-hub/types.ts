// types.ts
export type KnowledgeType =
  | "Report"
  | "Paper"
  | "Article"
  | "Case Study"
  | "Policy Brief";

export type Sector =
  | "Mining"
  | "Steel"
  | "Aluminium"
  | "Power"
  | "Hydrocarbons";

export type Theme =
  | "ESG"
  | "CSR"
  | "Safety"
  | "Skilling"
  | "Decarbonization";

export type KnowledgeSection = {
  heading: string;
  content: string[];
};

export type KnowledgeItem = {
  id: string;
  title: string;
  description: string;
  type: KnowledgeType;
  sector: Sector[];
  theme: Theme[];
  year: number;
  author: string;
  pages?: number;
  readingTime?: string;
  pdfUrl?: string;
  externalUrl?: string;
  coverImage?: string;
  featured?: boolean;

  reportIntro?: string;
  keyFindings?: string[];
  recommendations?: string[];
  sections?: KnowledgeSection[];
};
