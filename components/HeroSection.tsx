"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black mt-20">
      {/* YouTube Video Background Container */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* মোবাইলের জন্য (Portrait): w-[300vh] h-[100vh]
            ডেস্কটপের জন্য (Landscape): md:w-[100vw] md:h-[56.25vw]
        */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[300vh] h-[100vh] 
                        md:w-[100vw] md:h-[56.25vw] 
                        min-h-full min-w-full"
        >
          <iframe
            className="w-full h-full scale-[1.3] md:scale-[1.05]"
            src="https://www.youtube.com/embed/v1uVhIqgXt4?autoplay=1&mute=1&loop=1&playlist=v1uVhIqgXt4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="SA Agro Feed Video"
            allow="autoplay; encrypted-media"
          />
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
            Quality Feed for <br />
            <span className="text-red-600">Poultry, Cattle & Fish</span>
          </h1>

          <p className="mt-6 text-white/90 text-lg md:text-xl font-light max-w-lg leading-relaxed">
            SA Agro Feed delivers scientifically formulated feed to ensure
            healthy growth and better farm productivity.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="bg-white text-black px-10 py-4 rounded-md text-sm font-bold hover:bg-gray-200 transition-all shadow-xl"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="bg-red-700 text-white px-10 py-4 rounded-md text-sm font-bold hover:bg-red-800 transition-all shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Subtle Shadow Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-[2]" />
    </section>
  );
}
