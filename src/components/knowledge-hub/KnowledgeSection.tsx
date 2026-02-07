import KnowledgeCard from "./KnowledgeCard";
import { KnowledgeItem } from "./data";

export default function KnowledgeSection({
  title,
  items,
  onOpen,
}: {
  title: string;
  items: KnowledgeItem[];
  onOpen: (id: string) => void;
}) {
  if (!items.length) return null;

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex-1 h-px bg-white/20" />
        <span className="text-xs text-white/50">{items.length} items</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <KnowledgeCard
            key={item.id}
            item={item}
            onOpen={() => onOpen(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
