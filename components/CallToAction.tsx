"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-green-700 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center text-white"
      >
        <h2 className="text-3xl font-bold">
          Looking for a trusted feed supplier?
        </h2>
        <p className="mt-4 text-green-100">
          Contact SA Agro Feed today and grow your farm with confidence.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
}
