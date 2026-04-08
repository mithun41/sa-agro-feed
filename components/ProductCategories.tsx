"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Poultry Feed",
    description:
      "Engineered for peak performance across broiler and layer operations. Our poultry feed blends essential amino acids, vitamins, and minerals to accelerate growth cycles, improve feed conversion ratios, and boost egg production while keeping your flock in optimal health.",
    slug: "poultry",
    image: "/images/products/paultry.jpg",
    tag: "Broilers & Layers",
    stat: "98% Digestibility",
  },
  {
    title: "Cattle Feed",
    description:
      "Formulated for both dairy and beef herds, our cattle feed delivers the precise nutritional balance your animals need. Rich in energy-dense grains and fortified with trace minerals, it supports strong milk yield, healthy weight gain, and long-term herd vitality.",
    slug: "cattle",
    image: "/images/products/cattle.jpg",
    tag: "Dairy & Beef",
    stat: "High Protein Blend",
  },
  {
    title: "Fish Feed",
    description:
      "Designed for aquaculture excellence, our fish feed promotes rapid, uniform growth while maintaining water quality. With high palatability and a balanced omega profile, it is the trusted choice for tilapia, carp, shrimp, and other farmed species.",
    slug: "fish",
    image: "/images/products/fish.png",
    tag: "Aquaculture",
    stat: "Low FCR Formula",
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

  return (
    <div
      className={`relative flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } min-h-[540px] overflow-hidden w-11/12 mx-auto rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500`}
    >
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-red-700/20 z-10 hidden md:block" />

      {/* Image Panel */}
      <div className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden group">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
        />

        <div
          className={`absolute inset-0 ${
            isReversed
              ? "bg-gradient-to-l from-transparent to-black/40"
              : "bg-gradient-to-r from-transparent to-black/40"
          }`}
        />

        <div className="absolute top-6 left-6 z-10">
          <span className="bg-red-700 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm">
            {item.tag}
          </span>
        </div>
      </div>

      {/* Content Panel */}
      <div
        className={`w-full md:w-1/2 flex items-center bg-white ${
          isReversed ? "md:pl-16 md:pr-20" : "md:pr-16 md:pl-20"
        } px-8 py-14`}
      >
        <div className="max-w-md">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-7xl font-black text-gray-100 leading-none select-none mb-2 -ml-1 animate-pulse"
            style={{ textShadow: "0 0 20px rgba(239, 68, 68, 0.8)" }}
          >
            0{index + 1}
          </motion.p>

          <h2
            className="text-3xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {item.title}
          </h2>

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
            <Link
              href={`/products/${item.slug}`}
              className="group inline-flex items-center gap-3 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold px-7 py-3.5 rounded-md transition-colors duration-200"
            >
              View Product Details
              <span className="transform group-hover:translate-x-1 transition-transform duration-200 text-base">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
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
          <CategorySection key={item.slug} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
