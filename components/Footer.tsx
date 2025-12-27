import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            SA Agro Feed
          </h3>
          <p className="text-sm leading-relaxed">
            Providing quality poultry, cattle, and fish feed to farmers across
            Bangladesh. Trusted for nutrition, consistency, and growth.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/dealers" className="hover:text-white">
                Dealers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">
            Contact Info
          </h4>
          <ul className="text-sm space-y-2">
            <li>📍 Bangladesh</li>
            <li>📞 +880 1XXXXXXXXX</li>
            <li>✉️ info@saagrofeed.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} SA Agro Feed. All rights reserved.
      </div>
    </footer>
  );
}
