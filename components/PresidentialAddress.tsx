"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Quote } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

export default function PresidentialAddress() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-lion-cream py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionLabel>A Message From Our President</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold text-lion-black sm:text-4xl">
            Presidential Address
          </h2>
          <p className="mt-2 text-sm italic text-lion-black/50">
            A Message of Vision, Purpose, and Progress
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-lion-green-900/10 bg-white p-8 shadow-sm sm:p-12">
          <Quote size={32} className="text-lion-gold-500/60" />

          <div className="mt-4 space-y-5 text-base leading-relaxed text-lion-black/75">
            <p>
              Distinguished members of the D Lions family, our coaches,
              technical staff, players, parents, supporters, partners, and
              friends of the club,
            </p>
            <p>
              It is with great pride and a deep sense of responsibility that I
              address you today as we continue building the future of D Lions
              Football Club.
            </p>
            <p>
              D Lions is more than a football club. We are building an
              institution founded on talent, discipline, character, unity,
              education, and opportunity. Our ambition is not simply to
              produce footballers who can compete on the pitch, but to
              develop young people who can become leaders, professionals,
              role models, and responsible members of society.
            </p>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="rest"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-5 overflow-hidden"
                >
                  <h3 className="font-display text-lg font-semibold text-lion-green-900">
                    Our Mission
                  </h3>
                  <p>
                    Our mission is to identify, develop, educate, and empower
                    talented footballers through professional coaching,
                    disciplined training, meaningful competition, and strong
                    mentorship.
                  </p>
                  <p>
                    We are committed to creating a genuine pathway for
                    players to progress from grassroots football to higher
                    levels of the game, including national and international
                    opportunities.
                  </p>
                  <p>
                    Every player who wears the D Lions badge must understand
                    that talent is only the beginning. Hard work, discipline,
                    humility, consistency, and commitment are what transform
                    talent into excellence.
                  </p>

                  <h3 className="font-display text-lg font-semibold text-lion-green-900">
                    Our Vision
                  </h3>
                  <p>
                    Our vision is to become one of Rwanda&rsquo;s leading
                    football development clubs, recognized nationally and
                    internationally for producing talented, disciplined,
                    educated, and professional players.
                  </p>
                  <p>
                    We want D Lions to become a club where young players can
                    dream boldly, work intelligently, and believe that their
                    circumstances do not have to determine their future.
                  </p>
                  <p>
                    We envision a club that develops players capable of
                    competing at the highest levels while representing Rwanda
                    with pride, professionalism, and integrity.
                  </p>

                  <h3 className="font-display text-lg font-semibold text-lion-green-900">
                    Our Progressive Values
                  </h3>
                  <p>
                    The foundation of D Lions rests on values that cannot be
                    compromised.
                  </p>
                  <ul className="list-none space-y-3">
                    <li>
                      <strong className="text-lion-black">Excellence</strong>{" "}
                      &mdash; We will always strive to improve and never
                      become satisfied with mediocrity.
                    </li>
                    <li>
                      <strong className="text-lion-black">Discipline</strong>{" "}
                      &mdash; We believe discipline creates the foundation
                      upon which sporting and personal success are built.
                    </li>
                    <li>
                      <strong className="text-lion-black">Teamwork</strong>{" "}
                      &mdash; Football is a collective game. We succeed
                      together, support one another, and take responsibility
                      together.
                    </li>
                    <li>
                      <strong className="text-lion-black">Integrity</strong>{" "}
                      &mdash; We will conduct ourselves with honesty,
                      transparency, respect, and professionalism.
                    </li>
                    <li>
                      <strong className="text-lion-black">
                        Player Development
                      </strong>{" "}
                      &mdash; Every player deserves an environment where
                      their abilities can be identified, nurtured,
                      challenged, and developed.
                    </li>
                    <li>
                      <strong className="text-lion-black">Education</strong>{" "}
                      &mdash; We believe football and education must work
                      together. A player&rsquo;s future should extend beyond
                      the football pitch.
                    </li>
                    <li>
                      <strong className="text-lion-black">Respect</strong>{" "}
                      &mdash; We respect our opponents, officials, coaches,
                      teammates, supporters, families, and the game itself.
                    </li>
                    <li>
                      <strong className="text-lion-black">Opportunity</strong>{" "}
                      &mdash; We are committed to creating pathways that
                      allow talented players to be seen, developed, and given
                      meaningful opportunities to progress.
                    </li>
                  </ul>

                  <h3 className="font-display text-lg font-semibold text-lion-green-900">
                    Building for the Future
                  </h3>
                  <p>
                    The future of D Lions will not be measured only by
                    trophies. It will also be measured by the quality of
                    players we develop, the character we build, the
                    opportunities we create, and the positive impact we make
                    in our community.
                  </p>
                  <p>
                    We will continue investing in professional coaching,
                    player development, scouting, competition, mentorship,
                    modern football knowledge, and international
                    opportunities. Our goal is to build a sustainable
                    football structure that can continue producing talented
                    players for many years to come.
                  </p>
                  <p>
                    To our players: believe in yourselves, respect the
                    process, listen to your coaches, work harder than your
                    competition, and never allow talent to replace
                    discipline.
                  </p>
                  <p>
                    To our coaches and technical team: you carry the
                    responsibility of shaping not only footballers, but
                    young lives. Lead with knowledge, patience,
                    professionalism, and integrity.
                  </p>
                  <p>
                    To our parents and supporters: your encouragement
                    matters. Your support gives our players the confidence
                    to dream and the courage to keep working when challenges
                    arise.
                  </p>
                  <p>
                    To our partners and stakeholders: we welcome you to join
                    us in building something meaningful. The development of
                    football is a collective responsibility, and together we
                    can create opportunities that change lives.
                  </p>

                  <h3 className="font-display text-lg font-semibold text-lion-green-900">
                    Our Promise
                  </h3>
                  <p>
                    D Lions Football Club will continue moving forward with
                    purpose, courage, professionalism, and unity. We will not
                    be defined by where we start. We will be defined by how
                    far we are willing to go.
                  </p>
                  <p>
                    Our badge represents more than a football club. It
                    represents ambition, responsibility, identity, and hope.
                  </p>
                  <p>
                    Let us build a club where every player has the
                    opportunity to become better than they were yesterday.
                    Let us build a club that Rwanda can be proud of. Let us
                    build a club that produces not only champions on the
                    pitch, but champions in life.
                  </p>
                  <p className="font-display font-semibold uppercase tracking-wide text-lion-green-900">
                    D Lions Football Club &mdash; Developing Talents&hellip;
                    Creating Champions
                  </p>
                  <p>
                    May our players continue to grow, may our club continue
                    to progress, and may the D Lions family remain united in
                    the pursuit of excellence.
                  </p>
                  <p>Thank you, and let us continue building the future together.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-6 inline-flex items-center gap-1.5 font-semibold text-lion-green-800 hover:text-lion-green-900"
          >
            {expanded ? "Show less" : "Read the full address"}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown size={18} />
            </motion.span>
          </button>

          <p className="mt-8 border-t border-lion-black/10 pt-6 font-display text-sm font-semibold uppercase tracking-widest text-lion-gold-600">
            Developing Talents&hellip; Creating Champions
          </p>
        </div>
      </div>
    </section>
  );
}
