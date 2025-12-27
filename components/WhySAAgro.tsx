"use client";

import { motion } from "framer-motion";

const points = [
  "Scientifically formulated feed",
  "Consistent quality & nutrition",
  "Trusted by farmers nationwide",
  "Strong dealer & distribution network",
];

export default function WhySAAgro() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose SA Agro Feed
          </h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-700 font-bold">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://www.satv.tv/wp-content/uploads/2022/11/sa-agro-feed.jpg"
            alt="Farm"
            className="rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
