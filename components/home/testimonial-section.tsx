// components/home/testimonial-section.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialSection() {
  const shouldReduceMotion = useReducedMotion();

  const testimonials: Testimonial[] = [
    {
      quote:
        "ASM delivered flawless frames for our new HQ—on schedule and within budget.",
      name: "Priya Sharma",
      role: "Admin, Skyline Realty",
    },
    {
      quote:
        "Fantastic quality and responsive team. We recommend ASM for any commercial fit-out.",
      name: "Rahul Mehta",
      role: "Project Lead, Vertex Builders",
    },
    {
      quote:
        "From design to installation, the process was smooth and professional.",
      name: "Aisha Khan",
      role: "Owner, Craft Café",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduceMotion
        ? {}
        : { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="testimonials" className="bg-neutral-50 border-y border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500"
        >
          What Our Clients Say
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight"
        >
          Testimonials
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, idx) => (
            <motion.div key={idx} variants={item} whileHover={{ y: -4 }}>
              <Card className="rounded-2xl border-neutral-200 hover:shadow-2xl transition-shadow h-full hover:border-black border-2">
                <CardContent className="pt-8 pb-8">
                  <p className="text-neutral-700 lg:text-[17px] text-base leading-relaxed">
                    “{t.quote}”
                  </p>
                  <div className="mt-6">
                    <p className="text-base font-semibold">{t.name}</p>
                    <p className="text-sm text-neutral-600">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
