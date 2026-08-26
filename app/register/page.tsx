import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RegistrationFlow from "@/components/RegistrationFlow";

export const metadata: Metadata = {
  title: "Register | D Lions FC Rwanda",
  description:
    "Register your child for D Lions FC Rwanda's football academy. Choose a program, fill in your details, and send your registration via WhatsApp or email.",
};

export default function RegisterPage() {
  return (
    <>
      <PageHero
        kicker="Join The Academy"
        title="Register Your Child"
        description="Pick a program and fill in a few details — we'll get your registration sent straight to us."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RegistrationFlow />
        </div>
      </section>
    </>
  );
}
