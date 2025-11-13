"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products"},
  { label: "About Us", href: "/about-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 backdrop-blur supports-backdrop-filter:bg-white/70",
        "border-b transition-shadow",
        scrolled ? "shadow-sm border-neutral-200" : "border-transparent",
      ].join(" ")}
      aria-label="Site Header"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="ASM Home">
          <span className="inline-flex h-9 w-14 items-center justify-center rounded-xl  text-white text-sm font-semibold">
            <Image
              src="/ASM/logo.jpg"
              alt=""
              width={800}
              height={500}
              className="rounded-sm h-12 w-13 object-cover"
            />
          </span>
          <span className="font-semibold text-xl">ASM Aluminium Systems</span>
        </Link>

        {/* Right: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 rounded-xl text-lg font-medium"
            >
              {item.label}
            </a>
          ))}
          <Link href="/contact-us" className="ml-1">
            <Button className="rounded-xl h-9 px-4 text-sm cursor-pointer">Contact Us</Button>
          </Link>
        </nav>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-neutral-100"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile: Slide-down Panel */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-neutral-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link href="/contact-us" onClick={() => setOpen(false)}>
              <Button className="mt-1 rounded-xl h-9 w-full text-sm">Contact Us</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
