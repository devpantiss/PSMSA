import React from "react";

interface Props {
  programmes: any[];
  selected: string;
  onSelect: (key: string) => void;
}

const ProgrammeNav: React.FC<Props> = ({
  programmes,
  selected,
  onSelect,
}) => {
  return (
    <aside className="md:col-span-4 md:sticky md:top-24 h-fit">
      <div className="bg-neutral-900/70 border border-purple-600 rounded-xl p-4">
        <h3 className="text-xl font-bold text-purple-600 mb-4">
          Programmes
        </h3>

        <ul className="space-y-2">
          {programmes.map((p) => {
            const active = p.key === selected;
            return (
              <li key={p.key}>
                <button
                  onClick={() => onSelect(p.key)}
                  className={`w-full p-3 rounded-lg text-left transition ${
                    active
                      ? "bg-gradient-to-r from-purple-600 to-green-500 text-black"
                      : "hover:bg-neutral-800"
                  }`}
                >
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-xs opacity-80">
                    {p.subtitle}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ProgrammeNav;
