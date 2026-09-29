import Hero from "@/components/hero";
import TrustStrip from "@/components/trust-strip";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import AboutSection from "@/components/about-section";
import BeforeAfterSlider from "@/components/before-after-slider";
import ReviewsCarousel from "@/components/reviews-carousel";
import PricingSection from "@/components/pricing-section";
import ServiceAreasSection from "@/components/service-areas-section";
import FaqSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import { siteConfig } from "@/lib/config/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      {siteConfig.showBeforeAfter && <BeforeAfterSlider />}
      <ReviewsCarousel />
      <PricingSection />
      <ServiceAreasSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
