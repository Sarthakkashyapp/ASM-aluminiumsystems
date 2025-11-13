"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion, motion } from "framer-motion";
import { Hammer, Factory, Wrench, BadgeCheck, ChevronRight } from "lucide-react";

type Service = {
  key: string;
  title: string;
  desc: string;
  img: string; // path under /public/services/
  Icon: React.ElementType;
};

const SERVICES: Service[] = [
  {
    key: "aluminium-extrusion",
    title: "Aluminium Extrusion",
    desc: "6000-series alloys, custom die development and tight tolerances for architectural and industrial profiles.",
    img: "/services/extrusion-profiles.jpg",
    Icon: Hammer,
  },
  {
    key: "shot-blasting",
    title: "Shot Blasting",
    desc: "Surface preparation and finishing for long-lasting adhesion and a clean substrate for coatings.",
    img: "/services/shot-blasting.jpeg",
    Icon: Factory,
  },
  {
    key: "powder-coating",
    title: "Powder Coating",
    desc: "Durable, consistent powder coated finishes with multiple texture and colour options.",
    img: "/services/powder-coating.jpg",
    Icon: Wrench,
  },
  {
    key: "fabrication",
    title: "Fabrication",
    desc: "Precision cutting, welding and assembly with quality checks and dimensional control.",
    img: "/services/fabrication.jpeg",
    Icon: BadgeCheck,
  },
];

export default function ServicesSection() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduce ? {} : { staggerChildren: 0.09, delayChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((s) => (
            <motion.article
              key={s.key}
              variants={item}
              whileHover={reduce ? {} : { y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
            >
              {/* IMAGE + OVERLAY */}
              <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden rounded-t-2xl">
                {/* next/image for better LCP and optimization */}
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* subtle dark gradient for legibility */}
                <div className="absolute inset-0 bg-linear-to-b from-black/10 to-transparent pointer-events-none" />

                {/* icon badge — sits above image */}
                <div className="absolute left-4 top-4 z-20">
                  <div
                    className="
                      inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow
                      transform transition-all duration-350 group-hover:scale-105 group-hover:rotate-6
                    "
                  >
                    <s.Icon className="h-4 w-4 text-neutral-900" />
                    <span className="hidden sm:inline text-xs text-neutral-900">{s.title}</span>
                  </div>
                </div>

                {/* blue sweep from left on hover (overlay) */}
                <div
                  aria-hidden
                  className="
                    absolute inset-0 z-10 -translate-x-full bg-neutral-600/85 mix-blend-screen 
                    transition-transform duration-400 ease-in-out group-hover:translate-x-0
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 relative z-20">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-gray-900">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-600 transition-colors group-hover:text-neutral-900">
                  {s.desc}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium border border-neutral-300 bg-white/90 transition-colors group-hover:bg-gray-900 group-hover:text-white "
                  >
                    Enquire
                    <ChevronRight className="h-4 w-4" />
                  </Link>

                  {/* <span className="text-xs text-neutral-400">Learn more →</span> */}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center text-sm lg:text-[16px] font-medium rounded-xl px-5 py-3 border border-neutral-300 hover:bg-neutral-100 hover:border-black"
          >
            Get appointment <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
