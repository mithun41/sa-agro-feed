import CallToAction from "@/components/CallToAction";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import WhySAAgro from "@/components/WhySAAgro";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategories />
      <WhySAAgro />
      <CallToAction />
    </>
  );
}
