import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <img
          src="/homepage/aluminium.jpg"
          alt="Pantiss Campus"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Industry-ready skills for <br />
            <span className="text-amber-400">
              Mines, Steel & Aluminium
            </span>
          </h1>

          <p className="text-lg text-slate-200 mb-8 max-w-xl font-light">
            Pantiss School equips youth with certified, hands-on skills aligned
            to core industrial sectors and real-world job roles.
          </p>

          <div className="flex w-full max-w-lg items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-2xl">
            <Search className="ml-2 h-5 w-5 text-slate-300" />
            <input
              type="text"
              placeholder="Search courses or job roles…"
              className="flex-1 h-10 bg-transparent text-white placeholder:text-slate-300 outline-none"
            />
            <button className="h-10 px-6 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold transition">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
