import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-950 to-red-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.2),_transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="inline-block rounded-full border border-red-500/30 bg-red-600/10 px-4 py-1 text-sm font-medium uppercase tracking-wider text-red-400">
            Contact SA Agro Feed
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
            Let’s Talk About Your
            <span className="block text-red-500">Farming Needs</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Get in touch with SA Agro Feed for product inquiries, dealer
            support, bulk orders, and expert guidance on feed solutions for
            poultry, dairy, and fish farming.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-2">
          {/* Left info panel */}
          <div className="rounded-3xl bg-gradient-to-br from-black to-neutral-900 text-white p-8 md:p-10 shadow-2xl">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              We are here to help farmers, dealers, and distributors with the
              right feed products and support. Reach out to us through phone,
              email, or visit our office during business hours.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-red-500/20 bg-white/5 p-4">
                <div className="rounded-xl bg-red-600 p-3">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="mt-1 text-gray-300">+880 1922-829891</p>
                  <p className="text-sm text-gray-400">
                    Call us for product and order support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-red-500/20 bg-white/5 p-4">
                <div className="rounded-xl bg-red-600 p-3">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="mt-1 text-gray-300">info@saagrofeeds.com</p>
                  <p className="text-sm text-gray-400">
                    Send us your questions anytime
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-red-500/20 bg-white/5 p-4">
                <div className="rounded-xl bg-red-600 p-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Office Address</h3>
                  <p className="mt-1 text-gray-300 leading-relaxed">
                    SA Point (Level-03), 22 Kakrail, Dhaka-1000, Bangladesh
                  </p>
                  <p className="text-sm text-gray-400">
                    Visit our office for direct consultation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-red-500/20 bg-white/5 p-4">
                <div className="rounded-xl bg-red-600 p-3">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Business Hours</h3>
                  <p className="mt-1 text-gray-300">
                    Saturday - Thursday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-gray-400">
                    Friday closed or by appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-600/10 p-5">
              <h3 className="font-semibold text-red-400">
                Why Contact SA Agro Feed?
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li>• Product recommendations for poultry, dairy, and fish</li>
                <li>• Dealer and distributor partnership inquiries</li>
                <li>• Bulk order and pricing information</li>
                <li>• Technical support and farm guidance</li>
              </ul>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-10 shadow-xl">
            <div>
              <span className="inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-medium text-red-700">
                Send a Message
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                Request Information
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Inquiry Type
                </label>
                <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100">
                  <option>General Inquiry</option>
                  <option>Product Information</option>
                  <option>Dealer Partnership</option>
                  <option>Bulk Order</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

     
     {/* Map Section */}
     {/* Map Section */}
<section className="pb-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
      <div className="bg-black px-8 py-6 text-white">
        <h2 className="text-2xl font-bold">Visit Our Office</h2>
        <p className="mt-2 text-gray-300">
          Find our office location on the map below.
        </p>
      </div>

      <div className="h-[450px] w-full">
        {/* আপনার দেওয়া গুগল ম্যাপের লিঙ্ক দিয়ে আপডেট করা হয়েছে */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.243006307656!2d90.40751237409997!3d23.738712289227283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9259baee905%3A0x98f080774380ae0a!2sS%20A%20Agro%20Feeds%20Limited!5e0!3m2!1sen!2sbd!4v1774971365444!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SA Agro Feed Office Location"
        ></iframe>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}