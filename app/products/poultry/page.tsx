"use client";

import { motion } from "framer-motion";
import productData from "../../../public/products.json";

export default function PoultryDetailsPage() {
  const phoneNumber = "+8801713558900";

  const poultryCategories = ["Broiler", "Layer", "Sonali"];

  const poultryProducts = productData.filter((product) =>
    poultryCategories.includes(product.category),
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-24 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-700 to-yellow-600 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Premium Poultry Feed
            </h1>
            <p className="text-xl text-orange-50 max-w-2xl leading-relaxed">
              Balanced nutrition poultry feed for broiler, layer, and sonali
              with high quality ingredients for faster growth, better egg
              production, and stronger immunity.
            </p>
          </motion.div>

          <motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  className="text-center"
>
  <p className="text-sm md:text-base font-semibold text-green-100 mb-3 uppercase tracking-[0.2em]">
    Call Now
  </p>

  <a
    href={`tel:${phoneNumber}`}
    className="bg-white text-green-700 px-10 py-5 rounded-2xl font-black text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all border-b-4 border-green-200 active:border-b-0 active:translate-y-1 inline-block"
  >
    {phoneNumber}
  </a>
</motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poultryProducts.map((product, index) => (
            <motion.div
              key={product.item_code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-64 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3 gap-3">
                  <p className="text-sm font-semibold text-orange-600">
                    {product.item_code}
                  </p>
                  <span className="text-xs font-semibold bg-orange-100 text-orange-700 px-3 py-1 rounded-full whitespace-nowrap">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4 min-h-[64px]">
                  {product.name}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>MRP</span>
                    <span className="font-bold text-black">৳{product.mrp}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Dealer Price</span>
                    <span className="font-bold text-green-600">
                      ৳{product.tp}
                    </span>
                  </div>
                </div>

                <a
                  href={`tel:${phoneNumber}`}
                  className="w-full inline-flex justify-center items-center gap-2 bg-orange-700 text-white px-6 py-3 rounded-2xl font-bold hover:bg-orange-600 transition-all"
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-950 rounded-[2rem] p-12 text-center relative overflow-hidden shadow-2xl border border-orange-600/30">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Poultry feed সম্পর্কে জানতে আমাদের কল করুন
            </h2>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-4 bg-orange-700 text-white px-12 py-5 rounded-2xl text-2xl font-black hover:bg-orange-600 transition-all shadow-xl hover:scale-105"
            >
              কল করুন এখন
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
