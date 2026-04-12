"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);
      setStatus("");

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setStatus("Message sent successfully ✅");
      formRef.current.reset();
    } catch (error) {
      console.log(error);
      setStatus("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-10 shadow-xl">
      <div>
        <span className="inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-medium text-red-700">
          Send a Message
        </span>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Request Information
        </h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Fill out the form below and our team will get back to you as soon as
          possible.
        </p>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="mt-8 space-y-5">
        {/* Full Name + Phone */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Your full name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="from_phone"
              placeholder="Your phone number"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
            />
          </div>
        </div>

        {/* Email + Subject */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="Your email address"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="How can we help?"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
            />
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Inquiry Type
          </label>
          <select
            name="inquiry_type"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
          >
            <option>General Inquiry</option>
            <option>Product Information</option>
            <option>Dealer Partnership</option>
            <option>Bulk Order</option>
            <option>Technical Support</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows={6}
            name="message"
            placeholder="Write your message here..."
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Status */}
        {status && (
          <p className="text-sm text-gray-700 mt-2">{status}</p>
        )}
      </form>
    </div>
  );
}