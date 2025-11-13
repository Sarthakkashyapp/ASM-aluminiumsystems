// components/products/products-content.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, PackageCheck, Sun, Cable } from "lucide-react";

type Product = {
  key: string;
  name: string;
  image: string;       // public/ path or URL
  blurb: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  icon?: React.ElementType; // optional decorative icon
};

const PRODUCTS: Product[] = [
  {
    key: "solar-frames",
    name: "Solar Aluminium Frames",
    image: "/products/solar-frames.jpg", // put an image in public/products/
    blurb:
      "Lightweight, corrosion-resistant frames engineered for high wind loads and long outdoor life.",
    highlights: [
      "High torsional rigidity",
      "Anodized / powder-coated finishes",
      "UV & weather resistant",
    ],
    specs: [
      { label: "Alloy", value: "6xxx series (e.g., 6063-T5/T6)" },
      { label: "Finish", value: "Anodized / Powder Coat (60–80µ)" },
      { label: "Tolerance", value: "±0.2–0.5 mm (profile dependent)" },
      { label: "Length", value: "Custom cut up to 6 m" },
    ],
    icon: Sun,
  },
  {
    key: "extrusion-profiles",
    name: "Aluminium Extrusion Profiles",
    image: "/products/extrusion-profiles.jpg",
    blurb:
      "Custom and standard profiles for architectural, industrial, and facade applications.",
    highlights: [
      "Die development & sampling",
      "Tight dimensional control",
      "Mass & small-batch runs",
    ],
    specs: [
      { label: "Alloy", value: "6061 / 6063 / 6082 (others on request)" },
      { label: "Temper", value: "T4 / T5 / T6" },
      { label: "Finish", value: "Mill / Anodized / Powder Coat" },
      { label: "MOQ", value: "As low as 100–200 kg per profile" },
    ],
    icon: PackageCheck,
  },
  {
    key: "pv-round-wires",
    name: "PV Round Wires",
    image: "/products/pv-wires.jpg",
    blurb:
      "Photovoltaic-grade round wires for reliable electrical interconnection in harsh environments.",
    highlights: [
      "Low resistance, high conductivity",
      "UV & flame retardant insulation",
      "Outdoor-rated (-40°C to 90°C)",
    ],
    specs: [
      { label: "Conductor", value: "Tinned copper / aluminium (as req.)" },
      { label: "Size", value: "2.5 / 4 / 6 mm² (others on request)" },
      { label: "Standards", value: "TÜV / IEC 62930 compliant options" },
      { label: "Voltage", value: "Up to 1500 V DC" },
    ],
    icon: Cable,
  },
];

export default function ProductsContent() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduce ? {} : { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <>
      {/* Product Cards */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {PRODUCTS.map((p) => (
              <motion.article
                key={p.key}
                variants={item}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-xl transition"
              >
                <div className="relative">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={1200}
                    height={800}
                    className="h-56 w-full object-cover"
                    priority={false}
                  />
                  {/* soft top gradient for legibility */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/20 to-transparent" />
                  {/* badge/icon */}
                  {p.icon ? (
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow">
                      {p.icon === Sun && <Sun className="h-4 w-4" />}
                      {p.icon === PackageCheck && <PackageCheck className="h-4 w-4" />}
                      {p.icon === Cable && <Cable className="h-4 w-4" />}
                      {p.name}
                    </div>
                  ) : null}
                </div>

                <div className="p-6">
                  <h3 className="text-lg lg:text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm lg:text-[16px] text-neutral-600">{p.blurb}</p>

                  {/* highlights pills */}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs lg:text-sm rounded-full bg-neutral-100 px-3 py-1 text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* specs */}
                  {/* <dl className="mt-5 grid grid-cols-1 gap-2 text-sm">
                    {p.specs.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-2"
                      >
                        <dt className="text-neutral-500">{s.label}</dt>
                        <dd className="font-medium text-neutral-900">{s.value}</dd>
                      </div>
                    ))}
                  </dl> */}

                  {/* CTA */}
                  <div className="mt-6">
                    <Link
                      href="/#quote"
                      className="inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium group-hover:bg-neutral-100 group-hover:border-gray-900"
                    >
                      Enquire now <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions CTA block */}
      <section className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              One Vendor. Complete Range.
            </p>
            <h2 className="mt-2 text-3xl lg:text-4xl font-semibold tracking-tight">
              Get a solution for all your <span className="text-neutral-500">project needs</span>
            </h2>
            <p className="mt-3 text-neutral-600 max-w-2xl lg:text-lg">
              From solar module frames to custom extrusions and PV cabling—we design, source,
              and deliver everything you need with single-window support.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm lg:text-[16px]">
              <li className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 hover:border-gray-900">• Project-specific customization</li>
              <li className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 hover:border-gray-900">• Strict QA and traceability</li>
              <li className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 hover:border-gray-900">• PAN-India delivery</li>
              <li className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 hover:border-gray-900">• Fast lead times</li>
            </ul>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium hover:bg-neutral-100 hover:border-gray-900"
              >
                Get a project quote <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="font-semibold">Typical supply package</h3>
              <ul className="mt-4 space-y-2 text-sm lg:text-lg text-neutral-700">
                <li>• Drawings & approval samples</li>
                <li>• Production, finishing & QA</li>
                <li>• Packing, logistics & delivery</li>
                <li>• Installation support (as required)</li>
              </ul>
              <p className="mt-4 text-xs lg:text-sm text-neutral-500">
                Need a different alloy/finish/spec? We’ll tailor it to your bill of materials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
