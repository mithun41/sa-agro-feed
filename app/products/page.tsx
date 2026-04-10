"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    title: "Poultry Feed",
    description:
      "Balanced nutrition for healthy broiler and layer poultry growth.",
    slug: "poultry",
    image: "/images/products/paultry.jpg",
  },
  {
    title: "Cattle Feed",
    description:
      "High-quality feed formulated for dairy and beef cattle health.",
    slug: "cattle",
    image: "/images/products/cattle.jpg",
  },
  {
    title: "Fish Feed",
    description:
      "Nutritious and protein-rich feed for commercial fish farming.",
    slug: "fish",
    image: "/images/products/fish.png",
  },
  {
    title: "Common Nursery",
    description:
      "Specialized high-protein starter feed for nursery and hatchery stage.",
    slug: "common",
    image: "/images/products/feed.jpg", // আপনার দেওয়া ইমেজের নাম অনুযায়ী
  },
];

export default function ProductsPage() {
  return (
    <section className="py-20 mt-16 bg-white ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality poultry, cattle, and fish feed
            designed to ensure better growth and farm productivity.
          </p>
        </motion.div>

        {/* Product cards */}
        {/* grid-cols-3 থেকে md:grid-cols-2 lg:grid-cols-4 এ পরিবর্তন করেছি যাতে ৪টি কার্ড সুন্দর দেখায় */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="border rounded-xl overflow-hidden hover:shadow-xl transition bg-white flex flex-col"
            >
              <div className="relative w-full h-52">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-red-700">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm flex-grow">
                  {item.description}
                </p>

                <Link
                  href={`/products/${item.slug}`}
                  className="inline-flex items-center justify-center mt-6 px-6 py-3 bg-black text-white border-2 border-red-700 font-medium rounded-lg hover:bg-gray-900 transition-colors"
                >
                  View Details
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}