import React from "react";
import { Link } from "react-router-dom";

const LabsCTA:React.FC = () => (
  <section className="py-20 bg-gradient-to-r from-green-600 to-purple-700 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">
      Experience Our Futuristic Labs
    </h2>
    <p className="text-gray-100 mb-8">
      Partner with Pantiss or enroll to train on industry-grade infrastructure
    </p>

    <div className="flex justify-center gap-4">
      <Link to="/apply" className="px-8 py-4 bg-black text-green-400 rounded-lg font-semibold">
        Enroll Now
      </Link>
      <Link to="/contact" className="px-8 py-4 bg-white text-purple-700 rounded-lg font-semibold">
        Partner With Us
      </Link>
    </div>
  </section>
);

export default LabsCTA;