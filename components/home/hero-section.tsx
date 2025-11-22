"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const foundingYear = 2020;
  const years = new Date().getFullYear() - foundingYear;

  return (
    <section className="relative">
      {/* softer background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_10%,#eef2f6_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-26 pb-26">
        {/* 2-column layout on lg+ */}
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT: copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              Aluminium Specialists · 
            </p>

            <h1 className="mt-3 text-5xl lg:text-6xl font-bold tracking-tight">
              Precision{" "}
              <span className="bg-linear-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent">Aluminium Frames </span>
              for{" "}
              <span className="bg-linear-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent">Modern Spaces</span>
            </h1>

            <p className="mt-4 text-lg text-neutral-600">
              Durable, lightweight and elegant aluminium solutions—designed,
              fabricated and installed by experts across commercial, residential
              and industrial projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact-us">
                <Button className="h-11 rounded-xl px-5 text-sm lg:text-[16px] hover:cursor-pointer">
                  Get in touch
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
              <a
                href="/services"
                className="inline-flex items-center rounded-xl border border-neutral-300 px-5 py-3 text-sm lg:text-[16px] font-medium hover:bg-neutral-100 hover:border-gray-900"
              >
                View Services
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:border-black">
                <p className="text-2xl font-semibold">99%</p>
                <p className="text-neutral-600">On-Time Delivery Rate</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:border-black">
                <p className="text-2xl font-semibold">15+</p>
                <p className="text-neutral-600">Projects Delivered</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:border-black">
                <p className="text-2xl font-semibold">PAN-India</p>
                <p className="text-neutral-600">Service Coverage</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: images (won’t overlap now) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="lg:col-span-5"
            aria-hidden
          >
            <div className="grid grid-cols-2 gap-4 ">
              <div className="aspect-3/5 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-500 hover:scale-105 hover:transition-all hover:ease-in-out duration-200 cursor-pointer">
                <div className="h-full w-full object-cover bg-[url('https://plus.unsplash.com/premium_photo-1679339425145-47beeb3ad28c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsdW1pbml1bSUyMHdpbmRvd3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600')] bg-cover bg-center" />
              </div>
              <div className="aspect-3/5 rounded-2xl overflow-hidden shadow-2xl translate-y-6 border-2 border-gray-500 hover:scale-105 hover:transition-all hover:ease-in-out duration-200 cursor-pointer">
                <div className="h-full w-full object-cover bg-[url('https://plus.unsplash.com/premium_photo-1711132342351-020944fc9d52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWx1bWluaXVtJTIwd2luZG93c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600')] bg-cover bg-center" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
