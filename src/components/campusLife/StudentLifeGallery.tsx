const StudentLifeGallery = () => (
    <section className="py-20 px-6 bg-zinc-950">
      <h2 className="text-2xl font-semibold text-center mb-10">
        Life on Campus
      </h2>
  
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-40 bg-zinc-800 rounded-lg animate-pulse"
          />
        ))}
      </div>
    </section>
  );
  
  export default StudentLifeGallery;  