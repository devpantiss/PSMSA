import { ArrowLeft } from "lucide-react";
import { KnowledgeItem } from "./data";

export default function KnowledgeDetailsView({
  item,
  onBack,
}: {
  item: KnowledgeItem;
  onBack: () => void;
}) {
  return (
    <section className="bg-black text-white p-10">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-2 text-sm text-white/70"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Knowledge Hub
      </button>

      <h1 className="text-3xl font-bold">{item.title}</h1>
      <p className="mt-4 text-white/70">{item.description}</p>
    </section>
  );
}
