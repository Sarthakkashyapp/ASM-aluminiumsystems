import AboutSection from "@/components/home/about-section";
import CarouselSection from "@/components/home/corousel-section";
import HeroSection from "@/components/home/hero-section";
import Quotation from "@/components/home/quotation-section";
import ServicesSection from "@/components/home/services-section";
import TestimonialSection from "@/components/home/testimonial-section";


export default function Home() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        <HeroSection/>
        <AboutSection/>
        <CarouselSection/>
        <ServicesSection/>
        <TestimonialSection/>
        <Quotation/>
      </div>
    </div>
  );
}
