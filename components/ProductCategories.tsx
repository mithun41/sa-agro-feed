"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Poultry Feed",
    description: "Balanced nutrition for healthy broiler & layer growth.",
    slug: "poultry",
    image: "/images/products/paultry.jpg",
  },
  {
    title: "Cattle Feed",
    description: "High-quality feed for dairy and beef cattle.",
    slug: "cattle",
    image: "/images/products/cattle.jpg",
  },
  {
    title: "Fish Feed",
    description: "Nutritious feed for fast and healthy fish farming.",
    slug: "fish",
    image: "/images/products/fish.png",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900"
        >
          Our Product Categories
        </motion.h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {categories.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{item.description}</p>

                <Link
                  href={`/products/${item.slug}`}
                  className="inline-block mt-5 text-sm font-medium text-green-700 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
