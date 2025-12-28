"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "products", label: "Products" },
  { id: "nutrition", label: "Nutrition" },
  { id: "feeding", label: "Feeding Guide" },
  { id: "faqs", label: "FAQs" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------- DATA ---------------- */

const fishProducts = [
  {
    name: "Floating Fish Feed (Grower)",
    type: "Carp / Tilapia",
    protein: "28–32%",
    fat: "5–6%",
    fiber: "4–6%",
    price: "৳2,450 / 25kg",
    description:
      "High-protein floating pellets for optimal growth of freshwater fish.",
  },
  {
    name: "Sinking Catfish Special",
    type: "Pangasius / Magur",
    protein: "32–35%",
    fat: "6–8%",
    fiber: "3–5%",
    price: "৳2,100 / 25kg",
    description:
      "Specially formulated sinking feed for bottom-feeding species.",
  },
];

const benefits = [
  {
    icon: "🐟",
    title: "Rapid Growth",
    text: "Optimized FCR ensures faster weight gain and earlier harvest.",
  },
  {
    icon: "💧",
    title: "Clean Water",
    text: "Stable pellets reduce leaching and water turbidity.",
  },
  {
    icon: "🛡️",
    title: "Disease Resistance",
    text: "Vitamin C and immunostimulants improve survival rates.",
  },
];

const feedingGuide = [
  {
    stage: "Fry / Fingerlings",
    rate: "5–8% body weight",
    time: "4 times daily",
  },
  {
    stage: "Juvenile",
    rate: "3–5% body weight",
    time: "3 times daily",
  },
  {
    stage: "Adult / Grower",
    rate: "2–3% body weight",
    time: "2 times daily",
  },
];

const faqs = [
  {
    q: "How long does floating feed stay afloat?",
    a: "Typically 1–2 hours, minimizing waste and improving feed intake.",
  },
  {
    q: "Best time to feed fish?",
    a: "Morning (8–10 AM) and afternoon (4–5 PM).",
  },
];

/* ---------------- PAGE ---------------- */

export default function FishDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-blue-50/30 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-5xl font-bold mb-4">
              High-Performance Fish Feed
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl">
              Advanced nutrition for faster growth, better survival, and cleaner
              ponds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="-mt-12 max-w-7xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
          <Image
            src="/images/products/fish.png"
            alt="Fish Feed"
            width={1400}
            height={500}
            className="object-cover w-full h-[380px]"
          />
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-xl shadow p-2 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeTab === tab.id
                  ? "bg-blue-700 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        {activeTab === "overview" && (
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-3xl font-bold mb-6">
                Sustainable Aquaculture Nutrition
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((b, i) => (
                  <div key={i} className="bg-blue-50 rounded-xl p-6 border">
                    <div className="text-3xl mb-2">{b.icon}</div>
                    <h3 className="font-bold mb-1">{b.title}</h3>
                    <p className="text-sm text-gray-600">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "products" && (
          <div className="grid md:grid-cols-2 gap-6">
            {fishProducts.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-600"
              >
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{p.type}</p>
                <p className="text-gray-600 mb-4">{p.description}</p>

                <div className="grid grid-cols-3 text-center bg-gray-50 rounded-lg p-3 mb-4">
                  <div>
                    <p className="text-xs text-gray-400">Protein</p>
                    <p className="font-bold">{p.protein}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Fat</p>
                    <p className="font-bold">{p.fat}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Fiber</p>
                    <p className="font-bold">{p.fiber}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-bold">{p.price}</span>
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "feeding" && (
          <div className="space-y-4">
            {feedingGuide.map((g, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-600"
              >
                <h3 className="font-bold">{g.stage}</h3>
                <p className="text-sm text-gray-600">
                  {g.rate} · {g.time}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "faqs" && (
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left font-semibold flex justify-between"
                >
                  {f.q}
                  <span>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
