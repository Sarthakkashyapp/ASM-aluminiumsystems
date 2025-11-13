// app/services/page.tsx

// import ServicesSection from "@/components/home/services-section";
import TestimonialSection from "@/components/home/testimonial-section";
import IndustrySkillSection from "@/components/services/industry-skill";
import ServicesSec from "@/components/services/services-sec";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* ...hero/top copy */}
      <ServicesSec/>
      <IndustrySkillSection />
      <TestimonialSection/>
    </main>
  );
}
