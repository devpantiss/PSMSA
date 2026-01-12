import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-20 text-center">
    <h2 className="text-3xl font-bold">
      Ready to Experience Campus Life?
    </h2>

    <p className="mt-4 text-neutral-300">
      Join Pantiss School and build a career in core industries.
    </p>

    <Link
      to="/apply"
      className="inline-block mt-8 px-8 py-4 bg-purple-600 rounded-xl font-semibold hover:scale-105 transition"
    >
      Apply Now
    </Link>
  </section>
);

export default CTASection;