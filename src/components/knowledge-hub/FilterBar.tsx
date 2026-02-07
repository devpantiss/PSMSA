import { Search } from "lucide-react";

export default function FilterBar({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (v: string) => void;
}) {
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-8">
      <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
        <div className="flex items-center gap-3">
          <Search className="h-4 w-4 text-white/60" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search knowledge resources..."
            className="w-full bg-transparent text-white outline-none"
          />
        </div>
      </div>
    </div>
  );
}
