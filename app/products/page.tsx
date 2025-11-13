// app/products/page.tsx
import type { Metadata } from "next";
import ProductsContent from "@/components/products/products-content";

export const metadata: Metadata = {
  title: "ASM – Products",
  description:
    "Explore ASM’s Solar Aluminium Frames, Aluminium Extrusion Profiles, and PV Round Wires with detailed specs and applications.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Page Hero */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-2">Expertise</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Our <span className="text-neutral-900">Products</span>
          </h1>
          <p className="text-neutral-600 mt-4 max-w-2xl lg:text-xl">
            Precision-engineered aluminium solutions designed for durability, performance, and clean installation.
          </p>
        </div>
      </section>

      <ProductsContent />
    </main>
  );
}
