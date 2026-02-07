import { motion } from "framer-motion";
import { KnowledgeItem } from "./data";

export default function KnowledgeCard({
  item,
  onOpen,
}: {
  item: KnowledgeItem;
  onOpen: () => void;
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5"
    >
      <h3 className="font-semibold">{item.title}</h3>
      <p className="mt-2 text-sm text-white/65 line-clamp-3">
        {item.description}
      </p>
      <div className="mt-4 flex justify-between">
        <span className="text-xs text-white/45">{item.year}</span>
        <button
          onClick={onOpen}
          className="text-sm text-white/80 hover:text-white"
        >
          View →
        </button>
      </div>
    </motion.article>
  );
}
