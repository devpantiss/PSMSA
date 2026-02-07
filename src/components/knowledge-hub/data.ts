// components/knowledge-hub/data.ts

export type KnowledgeType =
  | "Report"
  | "Paper"
  | "Article"
  | "Case Study"
  | "Policy Brief";

export type KnowledgeCategory =
  | "Study Materials"
  | "Reports"
  | "TOT Books"
  | "Podcasts";

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

export type KnowledgeItem = {
  id: string;
  title: string;
  description: string;
  type: KnowledgeType;
  category: KnowledgeCategory;
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
};

export const KNOWLEDGE_ITEMS: KnowledgeItem[] = [
  {
    id: "k1",
    title: "ESG Readiness Framework for Mining Workforce Ecosystems",
    description: "A practical framework for ESG-aligned workforce systems.",
    type: "Report",
    category: "Reports",
    sector: ["Mining"],
    theme: ["ESG", "Safety", "Skilling"],
    year: 2026,
    author: "Pantiss Research Unit",
    pages: 48,
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    pdfUrl: "#",
  },
  {
    id: "k3",
    title: "Safety-first Training Models: Simulators + Blended Labs",
    description: "How simulators improve safety readiness.",
    type: "Article",
    category: "Study Materials",
    sector: ["Mining", "Power"],
    theme: ["Safety", "Skilling"],
    year: 2025,
    author: "Pantiss Editorial Desk",
    readingTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    externalUrl: "#",
  },
  {
    id: "k6",
    title: "Digital Twin Adoption for Skill Labs",
    description: "Trainer-of-Trainers guide for digital twins.",
    type: "Report",
    category: "TOT Books",
    sector: ["Mining", "Steel"],
    theme: ["ESG", "Skilling"],
    year: 2026,
    author: "Pantiss Innovation Cell",
    pages: 36,
    coverImage:
      "https://images.unsplash.com/photo-1581091870622-3d1d7c02a6f5",
    pdfUrl: "#",
  },
];
