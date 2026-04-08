"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const newsItems = [
  {
    title: "New Feed Formula Launched",
    date: "January 2026",
    category: "Product Update",
    excerpt:
      "We introduced an improved cattle concentrate specially optimized for lactation performance, digestibility, and balanced nutrition.",
    highlights: [
      "Higher nutrient density",
      "Better digestibility",
      "Improved milk output support",
    ],
  },
  {
    title: "Expanded Dealer Network",
    date: "December 2025",
    category: "Business Growth",
    excerpt:
      "SA Agro Feed added 25 new dealer locations across the region to improve accessibility and ensure timely delivery for farmers.",
    highlights: [
      "Wider availability",
      "Faster distribution",
      "Stronger local support",
    ],
  },
  {
    title: "Farmer Training Initiative",
    date: "November 2025",
    category: "Community",
    excerpt:
      "Our technical team organized practical training sessions on feed management, livestock nutrition, and productivity improvement.",
    highlights: ["Expert guidance", "On-field support", "Better farm outcomes"],
  },
];

export default function LatestNewsSection() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(220,38,38,0.18),_transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="inline-block px-4 py-1 rounded-full border border-red-500/40 bg-red-600/10 text-red-400 text-sm font-medium tracking-wide uppercase">
              Updates & Insights
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
              Latest <span className="text-red-500">News</span>
            </h2>

            <p className="mt-3 text-gray-300 max-w-2xl">
              Stay informed with our latest product launches, dealer expansions,
              technical improvements, and farmer support initiatives.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center justify-center rounded-lg border-2 border-red-600 px-5 py-3 text-red-400 font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            View All News
          </Link>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {newsItems.map((n, i) => (
            <motion.article
              key={n.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group rounded-2xl border border-red-600/20 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 shadow-xl hover:border-red-500/50 hover:shadow-[0_0_35px_rgba(239,68,68,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-block rounded-full bg-red-600/15 border border-red-500/30 px-3 py-1 text-xs font-semibold text-red-400 uppercase tracking-wide">
                  {n.category}
                </span>
                <span className="text-sm text-gray-400">{n.date}</span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                {n.title}
              </h3>

              <p className="mt-3 text-gray-300 leading-relaxed">{n.excerpt}</p>

              <ul className="mt-5 space-y-2">
                {n.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-900/30"
              >
                Read more
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
