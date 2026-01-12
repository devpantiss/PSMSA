import React from "react";

interface Props {
  title: string;
  items: string[];
}

const ProgrammeSections: React.FC<Props> = ({ title, items }) => {
  return (
    <section>
      <h3 className="text-xl font-semibold text-purple-600 mb-2">{title}</h3>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ProgrammeSections;