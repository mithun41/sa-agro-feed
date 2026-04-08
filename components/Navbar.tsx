"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // কন্ডিশনাল ক্লাস নির্ধারণ (সবসময় ব্যাকগ্রাউন্ড সাদা রাখার জন্য আপডেট করা হয়েছে)
  const getHeaderClasses = () => {
    const base = "fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ";
    
    // সবসময় সাদা ব্যাকগ্রাউন্ড, শুধু স্ক্রল করলে শ্যাডো আসবে
    return isScrolled 
      ? base + "bg-white border-b border-gray-200 shadow-md py-3" 
      : base + "bg-white border-b border-gray-100 py-4";
  };

  // যেহেতু ব্যাকগ্রাউন্ড সাদা, তাই টেক্সট সবসময় ডার্ক (Gray-800) রাখা ভালো
  const menuText = "text-gray-800";

  return (
    <header className={getHeaderClasses()}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="transition-opacity hover:opacity-90 shrink-0">
          <img
            src="/logo.png"
            alt="Saagro Logo"
            className="h-12 md:h-16 w-auto rounded-xl"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-8 text-sm font-medium ${menuText} transition-colors`}>
          <li>
            <Link href="/" className="hover:text-red-700 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-red-700 transition-colors">Products</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-700 transition-colors">About</Link>
          </li>
        </ul>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-block bg-black text-white border-2 border-red-700 px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition shadow-sm"
          >
            Get in Touch
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md ${menuText} hover:bg-gray-100 transition`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h12M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200 shadow-xl"
          >
            <ul className="flex flex-col items-center gap-4 py-6 text-gray-800">
              <li><Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-red-700 font-medium">Home</Link></li>
              <li><Link href="/products" onClick={() => setIsMenuOpen(false)} className="hover:text-red-700 font-medium">Products</Link></li>
              <li><Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-red-700 font-medium">About</Link></li>
              <li>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="bg-black text-white border-2 border-red-700 px-6 py-2 rounded-md text-sm">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}