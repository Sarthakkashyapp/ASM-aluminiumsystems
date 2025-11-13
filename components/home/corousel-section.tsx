"use client";

export default function CarouselSection() {
  // ✅ define client names inside the component
  const clients = [
    "Larsen & Toubro",
    "DLF",
    "Tata Projects",
    "Godrej",
    "HCL",
    "ITC",
    "Jindal",
    "Adani",
    "JSW",
    "Infosys",
  ];

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-center text-2xl  font-semibold tracking-widest text-neutral-500 uppercase">
          Our Previous Clients
        </h3>

        <div className="relative mt-10 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap [--duration:35s]">
            {/* Duplicate for seamless loop */}
            {clients.concat(clients).map((c, i) => (
              <div
                key={i}
                className="mx-6 inline-flex items-center rounded-xl border border-neutral-200 bg-white px-4 py-2 lg:text-lg sm:text-sm font-medium shadow-sm hover:border-black cursor-pointer"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
