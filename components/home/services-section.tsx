// components/home/services-section.tsx
"use client";

import { useReducedMotion, motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Factory, Wrench, BadgeCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      title: "Aluminium extrusion",
      icon: Hammer,
      desc: "Aluminium Alloy: Typically, 6000 series alloys like 6063 or 6061 for their strength, corrosion resistance and formability.",
    },
    {
      title: "Shot Blasting",
      icon: Factory,
      desc: "Our Shot blasting is a versatile and effective process for surface preparation, cleaning, and modification.",
    },
    {
      title: "Powder Coating",
      icon: Wrench,
      desc: "Powder Coating offers customized finishes its a preferred choice contributing to product longevity.",
    },
    {
      title: "Fabrication",
      icon: BadgeCheck,
      desc: "Provided best fabrication solutions",
    },
  ];

  // parent container for staggered children
  const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // only stagger when user hasn’t requested reduced motion
        ...(shouldReduceMotion ? {} : { staggerChildren: 0.08, delayChildren: 0.1 }),
      },
    },
  };

  // individual card animation
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500"
        >
          What We Do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-2 text-neutral-600 max-w-2xl text-lg"
        >
          From drawings to delivery, ASM provides comprehensive aluminium solutions for
          commercial, residential, and industrial projects.
        </motion.p>

        {/* grid with staggered cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ title, icon: Icon, desc }) => (
            <motion.div key={title} variants={item} whileHover={{ y: -4 }}>
              <Card className="rounded-2xl h-full border-neutral-200 hover:shadow-xl transition-shadow hover:border-black border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-1 lg:gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <CardTitle className="lg:text-xl text-base">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="lg:text-[17px] text-sm text-neutral-600">{desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-10"
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center text-sm lg:text-[16px] font-medium rounded-xl px-4 py-2 border border-neutral-300 hover:bg-neutral-100 hover:border-gray-900 "
          >
            Get appointment <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
