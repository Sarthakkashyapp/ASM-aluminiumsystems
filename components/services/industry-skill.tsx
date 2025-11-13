// components/services/industry-skill.tsx
"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

type Skill = { label: string; value: number };

const DEFAULT_SKILLS: Skill[] = [
  { label: "Production", value: 90 },
  { label: "Industrial", value: 80 },
  { label: "Factory Fabrication", value: 95 },
  { label: "On-site Installation", value: 85 },
];

function SkillBar({ label, value }: Skill) {
  // number counter
  const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.2 });
    return controls.stop;
  }, [value, count]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-[15px] font-semibold text-gray-900">
        <span>{label}</span>
        <motion.span>
           {value}%
        </motion.span>
      </div>

      {/* track */}
      <div className="h-2.5 w-full rounded-full bg-white/30">
        {/* fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="h-2.5 rounded-full bg-linear-to-r from-neutral-500 via-gray-700 to-gray-800"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={value}
          role="progressbar"
          aria-label={label}
        />
      </div>
    </div>
  );
}

export default function IndustrySkillSection({
  skills = DEFAULT_SKILLS,
  imageUrl = "https://images.unsplash.com/photo-1762715461119-cbd8d82a0aee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
}: {
  skills?: Skill[];
  imageUrl?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* subtle background using our theme */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-neutral-700 via-[#1d2340] to-neutral-700" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-blue-600/20 blur-xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-105 transition-all duration-400">
                <div
                  className="aspect-16/14 bg-cover bg-center  object-cover"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
              </div>
            </div>
          </div>

          {/* Right: text + progress */}
          <div className="lg:col-span-6 text-white">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              Our Industry Skill
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight bg-linear-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Get a solution for all your <span className="text-neutral-600">industry needs</span>.
            </h2>
            <p className="mt-4 text-neutral-600 max-w-2xl text-lg">
              We combine in-house fabrication with on-site execution to deliver
              reliable aluminium systems at scale—fast, safe, and hassle-free.
            </p>

            <div className="mt-8 space-y-6">
              {skills.map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
