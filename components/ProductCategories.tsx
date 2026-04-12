"use client";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useState } from "react";

const categories = [
  {
    title: "Poultry Feed",
    description:
      "Engineered for peak performance across broiler and layer operations. Our poultry feed blends essential amino acids, vitamins, and minerals to accelerate growth cycles, improve feed conversion ratios, and boost egg production while keeping your flock in optimal health.",
    images: [
      "/images/products/poultry.jpeg",
      "/images/products/poultry2.jpeg",
      "/images/products/poultry3.jpeg",
    ],
    tag: "Broilers & Layers",
    stat: "98% Digestibility",
    youtubeId: "A8wY1HxDCFY",
  },
  {
    title: "Cattle Feed",
    description:
      "Formulated for both dairy and beef herds, our cattle feed delivers the precise nutritional balance your animals need. Rich in energy-dense grains and fortified with trace minerals, it supports strong milk yield, healthy weight gain, and long-term herd vitality.",
    images: [
      "/images/products/cattle.jpg",
      "/images/products/cattle2.jpeg",
      "/images/products/cattle3.jpeg",
    ],
    tag: "Dairy & Beef",
    stat: "High Protein Blend",
    youtubeId: "Js6i7ZkAEvA",
  },
  {
    title: "Fish Feed",
    description:
      "Designed for aquaculture excellence, our fish feed promotes rapid, uniform growth while maintaining water quality. With high palatability and a balanced omega profile, it is the trusted choice for tilapia, carp, shrimp, and other farmed species.",
    images: [
      "/images/products/fish.png",
      "/images/products/fish2.jpeg",
      "/images/products/fish3.jpeg",
    ],
    tag: "Aquaculture",
    stat: "Low FCR Formula",
    youtubeId: "HohN-8BQ73M",
  },
];

function CategorySection({
  item,
  index,
}: {
  item: (typeof categories)[0];
  index: number;
}) {
  const isReversed = index % 2 !== 0;
  const [isOpen, setIsOpen] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2500,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <>
      <div
        className={`relative flex flex-col ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        } min-h-[540px] overflow-hidden w-11/12 mx-auto rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500`}
      >
        {/* Image Slider */}
        <div className="relative w-full md:w-1/2 h-[320px] md:h-[540px] overflow-hidden">
          <Slider {...sliderSettings}>
            {item.images.map((img, idx) => (
              <div key={idx}>
                <div className="relative h-[320px] md:h-[540px] w-full">
                  <Image
                    src={img}
                    alt={`${item.title}-${idx}`}
                    fill
                    priority={idx === 0}
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>

          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none" />

          <div className="absolute top-6 left-6 z-20">
            <span className="bg-red-700 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm">
              {item.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          className={`w-full md:w-1/2 flex items-center bg-white ${
            isReversed ? "md:pl-16 md:pr-20" : "md:pr-16 md:pl-20"
          } px-8 py-14`}
        >
          <div className="max-w-md">
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-7xl font-black text-gray-100 mb-2"
            >
              0{index + 1}
            </motion.p>

            <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>

            <div className="mt-3 mb-6 h-0.5 w-12 bg-red-700" />

            <p className="text-gray-500 text-[15px] leading-relaxed">
              {item.description}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block" />
              <span className="text-red-700 text-xs font-semibold tracking-wide uppercase">
                {item.stat}
              </span>
            </div>

            <div className="mt-8">
              <button
                onClick={() => setIsOpen(true)}
                className="group inline-flex items-center gap-3 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold px-7 py-3.5 rounded-md transition-all duration-300"
              >
                Watch Video ▶
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Youtube Modal */}
      {isOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-[100000] bg-white hover:bg-gray-100 text-black w-10 h-10 rounded-full font-bold"
              >
                ✕
              </button>

              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                title={item.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default function ProductCategories() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-14 text-center">
        <p className="text-red-700 text-xs font-bold tracking-[0.25em] uppercase mb-3">
          What We Offer
        </p>

        <h2
          className="text-4xl font-bold text-gray-900"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Our Product Categories
        </h2>

        <div className="mt-4 mx-auto h-0.5 w-16 bg-red-700" />
      </div>

      <div className="space-y-10 pb-16">
        {categories.map((item, i) => (
          <CategorySection key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
