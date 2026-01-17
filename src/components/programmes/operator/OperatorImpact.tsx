import { useEffect, useRef, useState } from "react";
import {
  FileCheck,
  ShieldCheck,
  ClipboardCheck,
  Building2,
  TrendingUp,
  Users,
} from "lucide-react";

/* -----------------------------
   DATA (Mining Vehicle Operator Licensing Program)
----------------------------- */

const metrics = [
  {
    label: "Operators Licensed / Certified",
    value: 2650,
    suffix: "+",
    icon: FileCheck,
  },
  {
    label: "Operator Assessment Success Rate",
    value: 86,
    suffix: "%",
    icon: ClipboardCheck,
  },
  {
    label: "Safety Compliance Readiness",
    value: 93,
    suffix: "%",
    icon: ShieldCheck,
  },
  {
    label: "Deployment / Placement Rate",
    value: 72,
    suffix: "%",
    icon: Building2,
  },
  {
    label: "Partner Mines & Contractors",
    value: 55,
    suffix: "+",
    icon: Users,
  },
  {
    label: "Operators Upgraded to Higher Class Equipment",
    value: 41,
    suffix: "%",
    icon: TrendingUp,
  },
];

/* -----------------------------
   HOOK: Count Up
----------------------------- */

const useCountUp = (end: number, enabled: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const duration = 1600;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Number((progress * end).toFixed(0)));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, enabled]);

  return count;
};

/* -----------------------------
   COMPONENT
----------------------------- */

export default function OperatorImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-black py-24 px-4 text-white">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Mining Vehicle Operator Licensing — Impact
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Verified outcomes from our operator licensing pipeline — focused on
            compliance-ready assessments, safety-first operations, and
            industry-aligned certification for HEMM vehicle roles.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((item, i) => {
            const value = useCountUp(item.value, visible);
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                  bg-neutral-900/80
                  border border-neutral-800
                  rounded-2xl
                  p-8
                  transition
                  hover:border-purple-600/50
                  hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]
                "
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-400">{item.label}</span>
                  <Icon className="w-5 h-5 text-purple-500" />
                </div>

                <div className="text-4xl font-semibold tracking-tight text-white">
                  {value}
                  {item.suffix}
                </div>

                {/* subtle “alive” pulse line */}
                <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-purple-600/60 via-green-500/40 to-transparent opacity-60" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
