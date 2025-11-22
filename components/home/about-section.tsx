"use client";

type AboutProps = {
  foundingYear?: number;
};

export default function AboutSection({ foundingYear = 2020 }: AboutProps) {
  const years = new Date().getFullYear() - foundingYear;

  return (
    <section id="about" className="bg-white border-y border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: Copy */}
        <div>
          <p className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
            About ASM
          </p>

          <h2 className="mt-2 text-4xl lg:text-5xl font-semibold tracking-normal">
            Reliable Aluminium Framing Solutions Designed for Every Project
          </h2>

          <p className="mt-3 text-neutral-600 text-lg">
            ASM designs, fabricates, and installs high-quality aluminium framing
            systems for commercial, residential, and industrial projects. Our
            in-house team follows stringent QA checks to deliver clean,
            long-lasting results on time.
          </p>

          {/* Feature bullets */}
          <ul className="mt-6 flex flex-col gap-3 text-sm lg:text-[17px]">
            <li className="rounded-2xl border-2 border-neutral-200 p-4 bg-neutral-50 hover:border-black lg:w-4/5">
              <p className="font-semibold">End-to-End Delivery</p>
              <p className="text-neutral-600 mt-1">Design → Fabrication → Install</p>
            </li>
            <li className="rounded-2xl border-2 border-neutral-200 p-4 bg-neutral-50 hover:border-black lg:w-4/5">
              <p className="font-semibold">ISO-Aligned Process</p>
              <p className="text-neutral-600 mt-1">Quality & safety first</p>
            </li>
            <li className="rounded-2xl border-2 border-neutral-200 p-4 bg-neutral-50 hover:border-black lg:w-4/5">
              <p className="font-semibold">PAN-India Reach</p>
              <p className="text-neutral-600 mt-1">Urban & industrial sites</p>
            </li>
            <li className="rounded-2xl border-2 border-neutral-200 p-4 bg-neutral-50 hover:border-black lg:w-4/5">
              <p className="font-semibold">Trusted by Builders</p>
              <p className="text-neutral-600 mt-1">Tier-1 contractors</p>
            </li>
          </ul>
        </div>

        {/* RIGHT: Single Image */}
        <div className="rounded-2xl overflow-hidden shadow-md aspect-6/5 lg:mt-46 hover:border-gray-600 border-2 hover:scale-95 transition-all duration-300">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1652366643487-a432187cbff8?auto=format&fit=crop&q=60&w=1000')] bg-cover bg-center" />
        </div>

      </div>
    </section>
  );
}
