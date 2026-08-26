import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users2, Handshake, Trophy } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import HoverCard from "@/components/motion/HoverCard";
import MotionLink from "@/components/motion/MotionLink";
import { ageGroups, coreValues, fees, site } from "@/lib/site";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Professional Coaching",
    description: "Structured, disciplined training led by qualified coaches.",
  },
  {
    icon: Users2,
    title: "Skill Development",
    description: "Technical, tactical, physical, and mental growth at every age.",
  },
  {
    icon: Handshake,
    title: "Teamwork & Discipline",
    description: "Building character, respect, and leadership on and off the pitch.",
  },
  {
    icon: Trophy,
    title: "Building Future Champions",
    description: "A genuine pathway from grassroots to professional football.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-lion-black text-white">
        <Image
          src="/images/team-photo.png"
          alt="D Lions FC Rwanda squad"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="bg-grid-pattern absolute inset-0 opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,9,7,0.65) 0%, rgba(6,9,7,0.55) 45%, rgba(6,9,7,0.85) 100%), radial-gradient(circle at 20% 20%, rgba(20,102,56,0.55), transparent 55%), radial-gradient(circle at 80% 60%, rgba(224,176,74,0.18), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
            <Reveal delay={0}>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-lion-gold-400">
                D Lions Football Academy &middot; Rwanda &middot; Est. {site.founded}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Developing Talent.
                <br />
                <span className="text-gradient-gold">Creating Champions.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0">
                D Lions FC Rwanda is a youth football academy building disciplined,
                talented players through professional coaching and meaningful
                competition &mdash; for U10, U13, U15, U16, and U18.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <MotionLink
                  href="/register"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 rounded-md bg-lion-gold-500 px-7 py-3.5 text-sm font-semibold text-lion-black transition-colors hover:bg-lion-gold-400"
                >
                  Register Your Child
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </MotionLink>
                <MotionLink
                  href="/about"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-lion-gold-500 hover:text-lion-gold-400"
                >
                  Learn About Us
                </MotionLink>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-8 font-display text-sm uppercase tracking-[0.2em] text-white/40">
                &ldquo;{site.motto}&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-b border-lion-black/5 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <HoverCard className="h-full rounded-xl border border-lion-black/5 bg-lion-cream/60 p-6 shadow-sm transition-shadow hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-lion-green-900 text-lion-gold-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-lion-green-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-lion-black/60">{description}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Mission snapshot */}
      <section className="bg-lion-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal direction="left">
            <div>
              <SectionLabel align="left">Our Mission</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold text-lion-black sm:text-4xl">
                A pathway from grassroots to professional football
              </h2>
              <p className="mt-5 text-base leading-relaxed text-lion-black/70">
                To identify, develop, educate, and empower young footballers through
                professional coaching, disciplined training, and meaningful
                competition &mdash; creating a pathway for talented players to reach
                higher levels of football while becoming responsible and successful
                individuals both on and off the pitch.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-lion-green-800 hover:text-lion-green-900"
              >
                Read our full mission, vision &amp; values
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 gap-4">
            {coreValues.slice(0, 4).map((value) => (
              <StaggerItem key={value.title}>
                <HoverCard className="h-full rounded-xl border border-lion-green-900/10 bg-white p-5 shadow-sm">
                  <h3 className="font-display text-sm font-semibold text-lion-green-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-lion-black/60">
                    {value.description}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Age groups / registration CTA */}
      <section className="bg-lion-green-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionLabel>Academy Programs</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Registration Open For U10 &ndash; U18
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">
                Can your kids play football? Does your son love the game? Register
                today and give them a professional football foundation.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {ageGroups.map((group) => (
              <StaggerItem key={group.id}>
                <HoverCard
                  lift={4}
                  className="h-full rounded-2xl border border-lion-gold-500/20 bg-white/5 p-6 text-center backdrop-blur transition-colors hover:border-lion-gold-500/50 hover:bg-white/10 sm:p-8"
                >
                  <div className="font-display text-4xl font-bold text-lion-gold-400">
                    {group.label}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {group.description}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-6 rounded-2xl border border-lion-gold-500/20 bg-white/5 p-8 sm:flex-row sm:justify-between">
              <div className="text-center sm:text-left">
                <p className="text-xs uppercase tracking-wider text-white/50">Registration Fee</p>
                <p className="mt-1 font-display text-2xl font-bold text-lion-gold-400">
                  {fees.monthly}
                  <span className="ml-1 text-sm font-normal text-white/60">/ month</span>
                </p>
                <p className="text-sm text-white/50">
                  or {fees.quarterly} quarterly &middot; kit {fees.kit}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <MotionLink
                  href="/register"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-lion-gold-500 px-7 py-3.5 text-sm font-semibold text-lion-black transition-colors hover:bg-lion-gold-400"
                >
                  Register Now
                  <ArrowRight size={16} />
                </MotionLink>
                <MotionLink
                  href="/academy"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-lion-gold-500 hover:text-lion-gold-400"
                >
                  View Full Details
                </MotionLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Motto banner */}
      <section className="bg-lion-black py-14 text-center text-white">
        <Reveal>
          <p className="font-display text-2xl font-semibold uppercase tracking-[0.15em] sm:text-3xl">
            One Club. <span className="text-lion-gold-400">One Vision.</span> Many Champions.
          </p>
        </Reveal>
      </section>
    </>
  );
}
