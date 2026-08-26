import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact | D Lions FC Rwanda",
  description:
    "Get in touch with D Lions FC Rwanda via WhatsApp, phone, or email for academy registration and enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get In Touch"
        title="Contact Us"
        description="Have a question about registration or the academy? Reach out — we'd love to hear from you."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-lion-black">Send Us A Message</h2>
            <p className="mt-2 text-sm text-lion-black/60">
              Fill out the form and it will open in your email app, ready to send.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <a
              href={`https://wa.me/${site.contact.whatsappIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-lion-black/5 bg-lion-cream p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle size={22} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-lion-black">
                  WhatsApp / Call
                </p>
                <p className="text-sm text-lion-black/60">{site.contact.whatsapp}</p>
              </div>
            </a>

            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-4 rounded-xl border border-lion-black/5 bg-lion-cream p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lion-green-900 text-lion-gold-400">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-lion-black">Email</p>
                <p className="text-sm text-lion-black/60">{site.contact.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-lion-black/5 bg-lion-cream p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lion-green-900 text-lion-gold-400">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-lion-black">Location</p>
                <p className="text-sm text-lion-black/60">{site.location}</p>
              </div>
            </div>

            <div className="rounded-xl border border-lion-black/5 bg-lion-green-900 p-6 text-white">
              <p className="font-display text-sm font-semibold text-lion-gold-400">Follow Us</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={site.socials.facebook}
                  aria-label="Facebook"
                  className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-lion-gold-500 hover:text-lion-gold-400"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href={site.socials.instagram}
                  aria-label="Instagram"
                  className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-lion-gold-500 hover:text-lion-gold-400"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={site.socials.youtube}
                  aria-label="YouTube"
                  className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-lion-gold-500 hover:text-lion-gold-400"
                >
                  <YoutubeIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
