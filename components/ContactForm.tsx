"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-lion-black/70">
          Full Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-lion-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-lion-green-800 focus:ring-2 focus:ring-lion-green-800/20"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-lion-black/70">
          Phone Number
        </label>
        <input
          id="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-lion-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-lion-green-800 focus:ring-2 focus:ring-lion-green-800/20"
          placeholder="e.g. 07XX XXX XXX"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-lion-black/70">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-lion-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-lion-green-800 focus:ring-2 focus:ring-lion-green-800/20"
          placeholder="Tell us about your child and which program you're interested in..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-lion-green-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-lion-green-800 sm:w-auto"
      >
        <Send size={16} />
        Send Message
      </button>
    </form>
  );
}
