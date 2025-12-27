"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-green-50">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Quality Feed for <br />
            Poultry, Cattle & Fish
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            SA Agro Feed delivers scientifically formulated feed to ensure
            healthy growth and better farm productivity.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/products"
              className="bg-green-700 text-white px-6 py-3 rounded-md text-sm hover:bg-green-800 transition"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="border border-green-700 text-green-700 px-6 py-3 rounded-md text-sm hover:bg-green-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <img
            src="https://www.satv.tv/wp-content/uploads/2022/11/sa-agro-feed.jpg"
            alt="Agro Feed"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
