import type { Metadata } from "next";
import { UserRound } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import HoverCard from "@/components/motion/HoverCard";
import MotionLink from "@/components/motion/MotionLink";
import { ageGroups, placeholderSquad } from "@/lib/site";

export const metadata: Metadata = {
  title: "Squad | D Lions FC Rwanda",
  description:
    "Meet the D Lions FC Rwanda squad across our U10, U13, and U15 age groups.",
};

export default function SquadPage() {
  return (
    <>
      <PageHero
        kicker="Our Players"
        title="The Squad"
        description="Our players are grouped by age category, each developing under professional coaching and a structured pathway."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 rounded-xl border border-lion-gold-500/30 bg-lion-cream p-5 text-center text-sm text-lion-black/60">
              Full player profiles and photos coming soon. Below is a preview of our squad
              structure by age group.
            </div>
          </Reveal>

          {ageGroups.map((group) => {
            const players = placeholderSquad.filter((p) => p.group === group.label);
            if (players.length === 0) return null;
            return (
              <div key={group.id} className="mb-16 last:mb-0">
                <Reveal direction="left">
                  <div>
                    <SectionLabel align="left">{group.label} Squad</SectionLabel>
                    <p className="mt-2 text-sm text-lion-black/60">{group.description}</p>
                  </div>
                </Reveal>

                <StaggerGroup className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                  {players.map((player) => (
                    <StaggerItem key={`${group.id}-${player.number}`}>
                      <HoverCard className="h-full rounded-xl border border-lion-black/5 bg-lion-cream p-5 text-center shadow-sm hover:shadow-lg">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lion-green-900 text-lion-gold-400">
                          <UserRound size={36} />
                        </div>
                        <p className="mt-3 font-display text-2xl font-bold text-lion-gold-600">
                          {player.number}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-lion-black">
                          {player.name}
                        </p>
                        <p className="text-xs text-lion-black/50">{player.position}</p>
                      </HoverCard>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            );
          })}

          <Reveal>
            <div className="rounded-2xl bg-lion-green-900 p-8 text-center text-white sm:p-10">
              <p className="font-display text-lg font-semibold text-lion-gold-400">
                Want your child to be part of the squad?
              </p>
              <MotionLink
                href="/register"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-lion-gold-500 px-6 py-3 text-sm font-semibold text-lion-black transition-colors hover:bg-lion-gold-400"
              >
                Register Today
              </MotionLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
