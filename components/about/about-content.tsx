// components/about/about-content.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Target, Eye, HeartHandshake } from "lucide-react";

export default function AboutContent() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduce ? {} : { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <>
      {/* Intro / Company Story */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6"
          >
            <p className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              Our Company
            </p>
            <h1 className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight">
              Aluminium solutions built for <span className="text-neutral-500">modern India</span>
            </h1>
            <p className="mt-4 text-neutral-600">
              ASM specialises in precision aluminium frames, extrusion profiles and PV accessories.
              From design and die development to fabrication and on-site installation, our teams
              deliver clean, reliable results with strict quality checks and safe work practices.
            </p>
            <p className="mt-3 text-neutral-600">
              We partner with builders, architects and solar EPCs across India, combining speed with
              craftsmanship to keep projects on time and within budget.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-blue-600/15 blur-xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 shadow-xl">
                <div
                  className="aspect-16/10 bg-cover bg-center object-cover"
                  style={{ backgroundImage: "url(/about/aboutimage.jpg)" }} // put an image in /public/about/company.jpg
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission · Vision · Values */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {/* Mission */}
            <motion.article variants={item} className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <ImagePanel src="/about/mission.jpg" />
              <div className="relative z-10 p-6">
                <Header icon={<Target className="h-5 w-5" />} title="Our Mission" />
                <p className="mt-2 text-sm lg:text-[15px] text-neutral-700">
                  Empower projects with precise aluminium systems—delivered safely, on schedule,
                  and optimised for lifecycle performance.
                </p>
              </div>
            </motion.article>

            {/* Vision */}
            <motion.article variants={item} className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <ImagePanel src="/about/vision.jpg" />
              <div className="relative z-10 p-6">
                <Header icon={<Eye className="h-5 w-5" />} title="Our Vision" />
                <p className="mt-2 text-sm lg:text-[15px] text-neutral-700">
                  Be India’s most trusted partner for aluminium frames and profiles—synonymous with
                  quality, speed and accountability.
                </p>
              </div>
            </motion.article>

            {/* Values */}
            <motion.article variants={item} className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <ImagePanel src="/about/values.jpg" />
              <div className="relative z-10 p-6">
                <Header icon={<HeartHandshake className="h-5 w-5" />} title="Our Values" />
                <ul className="mt-2 space-y-2 text-sm lg:text-[15px] text-neutral-700">
                  <li>• Safety & integrity first</li>
                  <li>• Craftsmanship over shortcuts</li>
                  <li>• Transparent communication</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts / Badge strip (optional flair) */}
      <section className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Fact title="5+ Years" subtitle="Experience" />
          <Fact title="15+ Projects" subtitle="Delivered" />
          <Fact title="PAN-India" subtitle="Coverage" />
          <Fact title="ISO-Aligned" subtitle="Process" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              Build With Confidence
            </p>
            <h2 className="mt-2 text-3xl lg:text-4xl font-semibold tracking-tight">
              Let’s bring your aluminium system to life
            </h2>
            <p className="mt-3 text-neutral-600 max-w-2xl">
              Share your drawings, dimensions and timelines—we’ll revert with the best-fit
              solution and a clear schedule.
            </p>
            <a
              href="/quote"
              className="mt-6 inline-flex items-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium hover:bg-neutral-100"
            >
              Get a project quote
            </a>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <Building2 className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold">ASM Aluminium Systems</p>
                  <p className="text-sm text-neutral-600">Plot 12, Industrial Area, New Delhi</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-neutral-500">
                We also support multi-site rollouts and custom extrusions on request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- small UI helpers ---------- */

function Header({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 group-hover:bg-blue-600 transition-colors">
        <span className="text-neutral-900 group-hover:text-white transition-colors">{icon}</span>
      </span>
      <h3 className="text-base font-semibold">{title}</h3>
    </div>
  );
}

function ImagePanel({ src }: { src: string }) {
  return (
    <>
      {/* soft overlay on hover */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-transparent via-transparent to-black/10" />
      <div
        className="h-40 sm:h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden
      />
    </>
  );
}

function Fact({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-center">
      <p className="text-2xl font-semibold">{title}</p>
      <p className="text-sm text-neutral-600">{subtitle}</p>
    </div>
  );
}
