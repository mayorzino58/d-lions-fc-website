"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingButtons() {
  return (
    <motion.a
      href={`https://wa.me/${site.contact.whatsappIntl}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.6, 1.6], opacity: [0.5, 0, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
      />
      <MessageCircle size={28} fill="white" strokeWidth={0} className="relative" />
    </motion.a>
  );
}
