import type { Metadata } from "next";
import { CalendarClock, Mail, MessageCircle, ShieldCheck, Trophy, Users2, Handshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import HoverCard from "@/components/motion/HoverCard";
import MotionLink from "@/components/motion/MotionLink";
import { ageGroups, fees, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academy Registration | D Lions FC Rwanda",
  description:
    "Register your child for D Lions FC Rwanda's football academy programs — U10 through U20. Professional coaching, skill development, and disciplined training.",
};

const features = [
  { icon: ShieldCheck, label: "Professional Coaching" },
  { icon: Users2, label: "Skill Development" },
  { icon: Handshake, label: "Teamwork & Discipline" },
  { icon: Trophy, label: "Building Future Champions" },
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        kicker="Registration"
        title="Give Your Child A Professional Football Foundation"
        description="Can your kids play football? Does your son love playing football? Why not register your kids today!"
      />

      {/* Features */}
      <section className="border-b border-lion-black/5 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {features.map(({ icon: Icon, label }) => (
              <StaggerItem key={label} className="flex flex-col items-center gap-3 text-center">
                <HoverCard lift={4} className="flex h-14 w-14 items-center justify-center rounded-full bg-lion-green-900 text-lion-gold-400">
                  <Icon size={24} />
                </HoverCard>
                <p className="font-display text-sm font-semibold text-lion-green-900">{label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Age groups */}
      <section className="bg-lion-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionLabel>Registration Open For</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold text-lion-black sm:text-4xl">
                U10 &middot; U13 &middot; U15 &middot; U17 &middot; U20
              </h2>
            </div>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {ageGroups.map((group) => (
              <StaggerItem key={group.id}>
                <HoverCard className="h-full rounded-2xl border border-lion-green-900/10 bg-white p-6 text-center shadow-sm hover:shadow-lg sm:p-8">
                  <div className="font-display text-4xl font-bold text-lion-green-900">
                    {group.label}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-lion-black/60">
                    {group.description}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionLabel>Fees</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold text-lion-black sm:text-4xl">
                Registration &amp; Kit Costs
              </h2>
            </div>
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <StaggerItem>
              <HoverCard className="h-full rounded-2xl border border-lion-green-900/10 bg-lion-green-900 p-8 text-white">
                <div className="flex items-center gap-2 text-lion-gold-400">
                  <CalendarClock size={18} />
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider">
                    Registration Fee
                  </h3>
                </div>
                <div className="mt-5 flex items-end justify-between border-b border-white/10 pb-4">
                  <span className="text-white/70">Monthly</span>
                  <span className="font-display text-2xl font-bold text-lion-gold-400">
                    {fees.monthly}
                  </span>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-white/70">Quarterly</span>
                  <span className="font-display text-2xl font-bold text-lion-gold-400">
                    {fees.quarterly}
                  </span>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard className="h-full rounded-2xl border border-lion-green-900/10 bg-lion-cream p-8">
                <div className="flex items-center gap-2 text-lion-green-800">
                  <Trophy size={18} />
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider">
                    Item Cost
                  </h3>
                </div>
                <div className="mt-5 flex items-end justify-between border-b border-lion-black/10 pb-4">
                  <span className="text-lion-black/70">D Lions Kit</span>
                  <span className="font-display text-2xl font-bold text-lion-green-900">
                    {fees.kit}
                  </span>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-lion-black/70">Socks</span>
                  <span className="font-display text-2xl font-bold text-lion-green-900">
                    {fees.socks}
                  </span>
                </div>
              </HoverCard>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lion-black py-20 text-white sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <SectionLabel>Ready To Join?</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Register Your Kids Today
            </h2>
            <p className="mt-4 text-white/70">
              Fill out our online registration form and send it straight to us
              via WhatsApp or email &mdash; or reach out directly below.
            </p>
            <div className="mt-8 flex justify-center">
              <MotionLink
                href="/register"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-md bg-lion-gold-500 px-8 py-3.5 text-sm font-semibold text-lion-black transition-colors hover:bg-lion-gold-400"
              >
                Start Registration
              </MotionLink>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${site.contact.whatsappIntl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                <MessageCircle size={18} />
                WhatsApp / Call {site.contact.whatsapp}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-lion-gold-500 px-7 py-3.5 text-sm font-semibold text-lion-gold-400 transition-colors hover:bg-lion-gold-500 hover:text-lion-black"
              >
                <Mail size={18} />
                {site.contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
