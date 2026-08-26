import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "News | D Lions FC Rwanda",
  description: "Latest news, match reports, and updates from D Lions FC Rwanda.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        kicker="Latest Updates"
        title="Club News"
        description="Match reports, announcements, and academy updates from D Lions FC Rwanda."
      />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lion-green-900 text-lion-gold-400">
            <Newspaper size={28} />
          </div>
          <h2 className="mt-6 font-display text-2xl font-bold text-lion-black">
            News Coming Soon
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-lion-black/60">
            We&rsquo;re building our news archive as the academy grows. Follow us on
            social media for the latest match reports, training updates, and
            announcements.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href={site.socials.facebook}
              aria-label="Facebook"
              className="rounded-full border border-lion-black/10 p-3 text-lion-green-900 transition-colors hover:border-lion-gold-500 hover:text-lion-gold-600"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href={site.socials.instagram}
              aria-label="Instagram"
              className="rounded-full border border-lion-black/10 p-3 text-lion-green-900 transition-colors hover:border-lion-gold-500 hover:text-lion-gold-600"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={site.socials.youtube}
              aria-label="YouTube"
              className="rounded-full border border-lion-black/10 p-3 text-lion-green-900 transition-colors hover:border-lion-gold-500 hover:text-lion-gold-600"
            >
              <YoutubeIcon size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
