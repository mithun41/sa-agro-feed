import Link from "next/link";

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
              <svg
                className="w-10 h-10 fill-blue-600 hover:fill-blue-500"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@SAAgroFeedsLimited"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              title="Subscribe on YouTube"
            >
              <svg
                className="w-10 h-10 fill-red-600 hover:fill-red-500"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
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
                href="/dealers"
                className="hover:text-white transition-colors"
              >
                Dealers
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
              <span className="text-lg">📍</span>
              <span>
                SA Point (Level-03), 22 Kakrail, <br />
                Dhaka-1000, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg">📞</span>
              <a
                href="tel:+8801713558900"
                className="hover:text-white transition-colors"
              >
                +8801713558900 
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg">✉️</span>
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
    className="text-white hover:text-green-400 transition-colors duration-300 font-semibold"
  >
    Phoenify
  </a>
</div>
     
    </footer>
  );
}
