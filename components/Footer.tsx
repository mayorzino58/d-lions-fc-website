import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-lion-black text-white/70">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="D Lions FC Rwanda crest"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-lion-gold-500/60"
            />
            <span className="font-display text-lg font-semibold text-white">
              D LIONS <span className="text-lion-gold-400">FC</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {site.tagline} A youth football academy in {site.location}, est. {site.founded}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.socials.facebook}
              aria-label="Facebook"
              className="rounded-full border border-white/15 p-2 transition-colors hover:border-lion-gold-500 hover:text-lion-gold-400"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href={site.socials.instagram}
              aria-label="Instagram"
              className="rounded-full border border-white/15 p-2 transition-colors hover:border-lion-gold-500 hover:text-lion-gold-400"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={site.socials.youtube}
              aria-label="YouTube"
              className="rounded-full border border-white/15 p-2 transition-colors hover:border-lion-gold-500 hover:text-lion-gold-400"
            >
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-lion-gold-400">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-lion-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-lion-gold-400">
            Get In Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-lion-gold-500" />
              <a href={`tel:${site.contact.whatsapp}`} className="hover:text-lion-gold-400">
                {site.contact.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-lion-gold-500" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-lion-gold-400">
                {site.contact.email}
              </a>
            </li>
            <li className="text-white/50">{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/40 sm:px-6 lg:px-8">
        &copy; {new Date().getFullYear()} {site.fullName}. All rights reserved. &mdash; &ldquo;{site.motto}&rdquo;
      </div>
    </footer>
  );
}
