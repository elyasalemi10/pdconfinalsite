import type { Metadata } from "next";
import HeroGeometric from "@/components/kokonutui/hero-geometric"
import ImageTextSection from "@/components/sections/image-text-section"
import ServicesSection from "@/components/sections/floor-coating-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import HomeContactSection from "@/components/sections/home-contact-section"
import FinalCTASection from "@/components/sections/final-cta-section"
import Footer from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "PdCon - Complete Property Development Solutions",
  description: "Professional property development specialists in Melbourne and south east Melbourne suburbs. Comprehensive consultation, project management, sub contracting, and buying agent services. Your trusted development partner.",
};

export default function HomePage() {
  return (
    <div className="relative">
      <main>
      <HeroGeometric />
        <ImageTextSection />
        <ServicesSection />
        <TestimonialsSection />
        <HomeContactSection />
        <FinalCTASection />
      <Footer />
    </main>


    </div>
  )
}
