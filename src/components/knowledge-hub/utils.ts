// components/knowledge-hub/utils.ts
import { FileText, BookOpen, Newspaper, Layers, Tag } from "lucide-react";
import { KnowledgeType, KnowledgeItem, KnowledgeCategory } from "./data";

export function typeIcon(t: KnowledgeType) {
  switch (t) {
    case "Report":
      return FileText({ className: "h-4 w-4" });
    case "Paper":
      return BookOpen({ className: "h-4 w-4" });
    case "Article":
      return Newspaper({ className: "h-4 w-4" });
    case "Case Study":
      return Layers({ className: "h-4 w-4" });
    case "Policy Brief":
      return Tag ({className: "h-4 w-4"});
  }
}

export function groupByCategory(items: KnowledgeItem[]) {
  const map: Record<KnowledgeCategory, KnowledgeItem[]> = {
    "Study Materials": [],
    Reports: [],
    "TOT Books": [],
    Podcasts: [],
  };

  items.forEach((i) => map[i.category].push(i));
  return map;
}
