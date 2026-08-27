import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import HoverCard from "@/components/motion/HoverCard";
import PresidentialAddress from "@/components/PresidentialAddress";
import { coreValues, objectives, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Club | D Lions FC Rwanda",
  description:
    "Learn about D Lions FC Rwanda's mission, vision, core values, and purpose as a youth football academy developing talent, character, and champions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="The Club"
        title="D Lions Football Academy Rwanda"
        description="Developing Talent. Building Character. Creating Champions."
      />

      <PresidentialAddress />

      {/* Mission & Vision */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Reveal direction="left">
            <div className="h-full rounded-2xl border border-lion-green-900/10 bg-lion-cream p-8 sm:p-10">
              <SectionLabel align="left">Mission</SectionLabel>
              <p className="mt-4 text-lg font-medium leading-relaxed text-lion-black/80">
                To identify, develop, educate, and empower young footballers through
                professional coaching, disciplined training, and meaningful
                competition, creating a pathway for talented players to reach
                higher levels of football while becoming responsible and successful
                individuals both on and off the pitch.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div className="h-full rounded-2xl border border-lion-green-900/10 bg-lion-cream p-8 sm:p-10">
              <SectionLabel align="left">Vision</SectionLabel>
              <p className="mt-4 text-lg font-medium leading-relaxed text-lion-black/80">
                To become one of Rwanda&rsquo;s leading football development clubs,
                recognized for producing talented, disciplined, and professional
                players who compete successfully at national and international
                levels while inspiring the next generation of footballers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-lion-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionLabel>What We Stand For</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold text-lion-black sm:text-4xl">
                Our Core Values
              </h2>
            </div>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <StaggerItem key={value.title}>
                <HoverCard className="h-full rounded-xl border border-lion-black/5 bg-white p-6 shadow-sm hover:shadow-lg">
                  <span className="font-display text-3xl font-bold text-lion-gold-500/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-lion-green-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-lion-black/60">
                    {value.description}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-white py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <SectionLabel>Purpose</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold text-lion-black sm:text-4xl">
              Why D Lions FC Rwanda Exists
            </h2>
            <p className="mt-5 text-base leading-relaxed text-lion-black/70">
              D Lions Football Club Rwanda exists to develop talented footballers,
              build a competitive and disciplined football team, and create
              meaningful opportunities for young players to progress from
              grassroots football toward professional and international levels.
              The club is committed to creating a professional football
              environment where players can develop their technical ability,
              tactical intelligence, physical fitness, mental strength,
              discipline, leadership, and character both on and off the pitch.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Objectives */}
      <section className="bg-lion-green-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionLabel>Our Focus</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Key Objectives</h2>
            </div>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {objectives.map((obj, i) => (
              <StaggerItem key={obj.title}>
                <HoverCard
                  lift={3}
                  className="flex h-full gap-4 rounded-xl border border-lion-gold-500/20 bg-white/5 p-6 transition-colors hover:border-lion-gold-500/50 hover:bg-white/10"
                >
                  <span className="font-display text-2xl font-bold text-lion-gold-400">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-lion-gold-400">
                      {obj.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                      {obj.description}
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-lion-black py-20 text-center text-white sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionLabel>Our Commitment</SectionLabel>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              D Lions Football Club Rwanda is committed to developing talent,
              building character, promoting discipline, creating opportunities,
              and pursuing excellence. Our goal is not only to produce better
              footballers, but to develop better people, stronger leaders, and
              future champions on and off the pitch.
            </p>
            <p className="mt-8 font-display text-xl font-semibold uppercase tracking-widest text-lion-gold-400">
              {site.tagline}
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
