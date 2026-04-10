import CallToAction from "@/components/CallToAction";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import WhySAAgro from "@/components/WhySAAgro";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategories />
      <VideoSection />
      <TestimonialsSection />

      <WhySAAgro />
      <LatestNewsSection />
      <CallToAction />
    </>
  );
}
