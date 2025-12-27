"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          SA Agro Feed
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-green-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-green-700">
              Products
            </Link>
          </li>
          <li>
            <Link href="/dealers" className="hover:text-green-700">
              Dealers
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-700">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-green-700 text-white px-4 py-2 rounded-md text-sm hover:bg-green-800 transition"
        >
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
