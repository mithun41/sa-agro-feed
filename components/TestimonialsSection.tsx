"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const stats = [
  { value: "10,000+", label: "Farmers Using SA Feed" },
  { value: "25+", label: "Dealer Locations" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "15+", label: "Feed Products" },
];

const testimonials = [
  {
    name: "Rahim Uddin",
    role: "Poultry Farmer",
    location: "Bogura",
    quote:
      "After switching to SA Agro Feed, my broilers gained weight faster and mortality dropped significantly.",
    result: "Improved feed conversion and healthier birds.",
  },
  {
    name: "Fatima Begum",
    role: "Dairy Farmer",
    location: "Sirajganj",
    quote:
      "My cows produce more milk with the same feeding cost. SA Agro Feed really improved my farm productivity.",
    result: "Milk yield increased by nearly 15%.",
  },
  {
    name: "Anwar Hossain",
    role: "Fish Farmer",
    location: "Mymensingh",
    quote:
      "The fish growth rate improved and the feed quality is always consistent. Delivery is also reliable.",
    result: "Faster fish growth and better feed efficiency.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-950 to-red-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 border border-red-500/40 bg-red-600/10 text-red-400 rounded-full text-sm uppercase tracking-wide">
            Farmer Feedback
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            What Farmers Say About{" "}
            <span className="text-red-500">SA Agro Feed</span>
          </h2>

          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg">
            Thousands of farmers trust SA Agro Feed to improve livestock health,
            increase productivity, and ensure consistent growth for poultry,
            dairy, and aquaculture farms.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              className="rounded-xl border border-red-500/20 bg-white/5 p-6 text-center backdrop-blur-md"
            >
              <div className="text-3xl font-bold text-red-500">{s.value}</div>
              <p className="mt-2 text-gray-300 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-neutral-900 to-black p-7 shadow-xl hover:border-red-500/50 transition"
            >
              {/* Farmer info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center font-bold text-white">
                  {t.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm text-red-400">
                    {t.role} • {t.location}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-200 leading-relaxed">“{t.quote}”</p>

              {/* Result */}
              <div className="mt-5 bg-red-600/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-xs text-red-400 uppercase tracking-wide">
                  Result
                </p>
                <p className="text-sm text-gray-300 mt-1">{t.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
