import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { FeaturedProductsSection } from "@/components/home/featured-products-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <WhyChooseUsSection />
      <FeaturedProductsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
