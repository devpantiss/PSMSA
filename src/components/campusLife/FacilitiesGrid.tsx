const facilities = [
    "Workshop Labs",
    "Mining Simulators",
    "Steel Processing Units",
    "Aluminium Fabrication Bays",
    "Hostels & Dining",
    "Medical & Safety Rooms",
  ];
  
  const FacilitiesGrid = () => (
    <section className="py-20 px-6 bg-zinc-950">
      <h2 className="text-2xl font-semibold text-center mb-12">
        Campus Facilities
      </h2>
  
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((f) => (
          <div
            key={f}
            className="border border-zinc-800 rounded-lg p-6 text-center text-neutral-300 bg-zinc-900"
          >
            {f}
          </div>
        ))}
      </div>
    </section>
  );
  
  export default FacilitiesGrid;  