import Hero from "@/components/hero";
import TrustStrip from "@/components/trust-strip";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import AboutSection from "@/components/about-section";
import BeforeAfterSlider from "@/components/before-after-slider";
import ReviewsSection from "@/components/reviews-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <BeforeAfterSlider />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
