const stats = [
    { label: "Operational Campuses", value: "6+" },
    { label: "Industry Trainers", value: "120+" },
    { label: "Live Industrial Workshops", value: "300+" },
    { label: "Placement Partners", value: "150+" },
  ];
  
  const VisualStatsBand = () => (
    <section className="bg-black border-y border-zinc-800 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-semibold text-purple-600">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
export default VisualStatsBand;