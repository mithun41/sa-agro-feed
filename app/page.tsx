import CallToAction from "@/components/CallToAction";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import WhySAAgro from "@/components/WhySAAgro";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestNewsSection from "@/components/LatestNewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategories />

      <TestimonialsSection />

      <WhySAAgro />
      <LatestNewsSection />
      <CallToAction />
    </>
  );
}
