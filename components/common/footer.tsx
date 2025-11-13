// components/common/footer.tsx
"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-200">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-14 items-center justify-center rounded-xl text-neutral-900 text-sm font-semibold">
               <Image
                  src="/ASM/logo.jpg"
                  alt=""
                  width={800}
                  height={500}
                  className="rounded-sm h-12 w-13"
               />
            </span>
            <span className="font-semibold">ASM Aluminium Systems</span>
          </Link>
          <p className="mt-3 text-sm text-neutral-400">
            High-quality aluminium framing systems for builders, architects, and businesses.
          </p>
        </div>

        <div>
          <p className="font-semibold">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li><a href="/about-us" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/services#testimonials" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Support</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li><a href="/contact-us" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 8923925982</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> asmalusystem@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Plot 12, Industrial Area, New Delhi</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-neutral-500 flex items-center justify-between">
          <p>© {year} ASM Aluminium Systems. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-neutral-300">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
