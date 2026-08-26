import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingButtons() {
  return (
    <a
      href={`https://wa.me/${site.contact.whatsappIntl}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  );
}
