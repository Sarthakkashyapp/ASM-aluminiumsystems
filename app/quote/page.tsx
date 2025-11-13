// app/quote/page.tsx
import type { Metadata } from "next";
// import QuoteForm from "@/components/quote/quote-form";

export const metadata: Metadata = {
  title: "ASM – Get a Quote",
  description:
    "Request a project quote for solar aluminium frames, extrusion profiles, or PV round wires.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold tracking-tight">
            Get a <span className="text-neutral-500">Quote</span>
          </h1>
          <p className="text-neutral-600 mt-4 max-w-2xl">
            Tell us about your requirements and we’ll get back within one business day.
          </p>
        </div>
      </section>

      {/* Form */}
      {/* <QuoteForm /> */}
    </main>
  );
}
