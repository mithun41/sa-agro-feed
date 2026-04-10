import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* Company Section */}
        <div className="space-y-4">
          <Link
            href="/"
            className="transition-opacity hover:opacity-90 inline-block"
          >
            <img
              src="/logo.png"
              alt="Saagro Logo"
              className="h-16 w-auto rounded-xl"
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Providing quality poultry, cattle, and fish feed to farmers across
            Bangladesh. Trusted for nutrition, consistency, and growth.
          </p>

          {/* Social Links Icons */}
          <div className="pt-2 flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1GxzuGmPFg/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              title="Follow us on Facebook"
            >
              <FaFacebook className="w-10 h-10 text-blue-600 hover:text-blue-500" />
            </a>
            <a
              href="https://www.youtube.com/@SAAgroFeedsLimited"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              title="Subscribe on YouTube"
            >
              <FaYoutube className="w-10 h-10 text-red-600 hover:text-red-500" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Contact Info
          </h4>
          <ul className="text-sm space-y-4">
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-lg" />
              <span>
                SA Point (Level-03), 22 Kakrail, <br />
                Dhaka-1000, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MdPhone className="text-lg" />
              <a
                href="tel:+8801713558900"
                className="hover:text-white transition-colors"
              >
                +8801713558900
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-lg" />
              <a
                href="mailto:info@saagrofeeds.com"
                className="hover:text-white transition-colors"
              >
                info@saagrofeeds.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-xs text-gray-500">
        © {new Date().getFullYear()} SA Agro Feed. All rights reserved. <br />
        Developed By{" "}
        <a
          href="https://phoenify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-400 transition-colors duration-300 font-semibold"
        >
          Phoenify
        </a>
      </div>
    </footer>
  );
}
