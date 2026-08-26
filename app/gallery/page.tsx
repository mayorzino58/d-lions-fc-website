import type { Metadata } from "next";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery | D Lions FC Rwanda",
  description: "Photos and media from D Lions FC Rwanda.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Media"
        title="Gallery"
        description="A look at the D Lions FC Rwanda crest, campaigns, and academy life."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-lion-black">
              <Image
                src="/images/registration-flyer.jpeg"
                alt="D Lions FC Rwanda registration flyer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-lion-black">
              <Image
                src="/images/logo.jpeg"
                alt="D Lions FC Rwanda crest"
                fill
                className="object-contain p-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-[3/4] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-lion-black/15 bg-lion-cream text-lion-black/30"
              >
                <ImageIcon size={32} />
                <p className="text-xs">More photos coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
