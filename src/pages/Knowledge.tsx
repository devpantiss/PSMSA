import { useMemo, useState } from "react";

import { KNOWLEDGE_ITEMS } from "../components/knowledge-hub/data";
import { groupByCategory } from "../components/knowledge-hub/utils";
import KnowledgeDetailsView from "../components/knowledge-hub/KnowledgeDetailsView";
import HeroSection from "../components/knowledge-hub/HeroSection";
import FilterBar from "../components/knowledge-hub/FilterBar";
import KnowledgeSection from "../components/knowledge-hub/KnowledgeSection";

export default function KnowledgeHub() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return KNOWLEDGE_ITEMS.filter(
      (x) =>
        !q ||
        x.title.toLowerCase().includes(q) ||
        x.description.toLowerCase().includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => groupByCategory(filtered), [filtered]);

  if (activeId) {
    const item = KNOWLEDGE_ITEMS.find((x) => x.id === activeId)!;
    return (
      <KnowledgeDetailsView
        item={item}
        onBack={() => setActiveId(null)}
      />
    );
  }

  return (
    <section className="bg-black text-white">
      <HeroSection />
      <FilterBar query={query} setQuery={setQuery} />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {Object.entries(grouped).map(([category, items]) => (
          <KnowledgeSection
            key={category}
            title={category}
            items={items}
            onOpen={setActiveId}
          />
        ))}
      </div>
    </section>
  );
}
