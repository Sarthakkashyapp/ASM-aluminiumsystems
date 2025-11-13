// app/about/page.tsx
import AboutContent from "@/components/about/about-content";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "ASM – About Us",
  description:
    "Learn about ASM Aluminium Frames—our story, mission, vision and values.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <AboutContent/>
    </main>
  );
}
