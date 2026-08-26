"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronLeft,
  FileText,
  Image as ImageIcon,
  Mail,
  MessageCircle,
  RotateCcw,
  UploadCloud,
} from "lucide-react";
import { ageGroups, site } from "@/lib/site";

const stepVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 24 : -24 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -24 : 24 }),
};

const stepOrder: Step[] = ["select", "form", "confirm"];

type Step = "select" | "form" | "confirm";

type FormState = {
  childName: string;
  childAge: string;
  parentName: string;
  phone: string;
  email: string;
  address: string;
  message: string;
  birthCertificate: File | null;
  passportPhoto: File | null;
};

const initialForm: FormState = {
  childName: "",
  childAge: "",
  parentName: "",
  phone: "",
  email: "",
  address: "",
  message: "",
  birthCertificate: null,
  passportPhoto: null,
};

export default function RegistrationFlow() {
  const [step, setStep] = useState<Step>("select");
  const [direction, setDirection] = useState(1);
  const [group, setGroup] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(initialForm);
  const birthCertInputRef = useRef<HTMLInputElement>(null);
  const passportPhotoInputRef = useRef<HTMLInputElement>(null);

  const passportPreviewUrl = useMemo(
    () => (form.passportPhoto ? URL.createObjectURL(form.passportPhoto) : null),
    [form.passportPhoto]
  );

  useEffect(() => {
    return () => {
      if (passportPreviewUrl) URL.revokeObjectURL(passportPreviewUrl);
    };
  }, [passportPreviewUrl]);

  function goTo(next: Step) {
    setDirection(stepOrder.indexOf(next) > stepOrder.indexOf(step) ? 1 : -1);
    setStep(next);
  }

  const groupLabel = useMemo(
    () => ageGroups.find((g) => g.id === group)?.label ?? "",
    [group]
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSelectGroup(id: string) {
    setGroup(id);
    goTo("form");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    goTo("confirm");
  }

  const summaryLines = [
    `New D Lions FC Registration`,
    `Program: ${groupLabel}`,
    `Child's Name: ${form.childName}`,
    `Child's Age: ${form.childAge}`,
    `Parent/Guardian: ${form.parentName}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email}`,
    form.address ? `Address: ${form.address}` : null,
    form.message ? `Message: ${form.message}` : null,
    `Birth Certificate: ${form.birthCertificate ? form.birthCertificate.name + " (attached separately)" : "Not provided"}`,
    `Passport Photo: ${form.passportPhoto ? form.passportPhoto.name + " (attached separately)" : "Not provided"}`,
  ].filter(Boolean) as string[];

  const whatsappText = encodeURIComponent(summaryLines.join("\n"));
  const whatsappHref = `https://wa.me/${site.contact.whatsappIntl}?text=${whatsappText}`;

  const emailSubject = encodeURIComponent(`D Lions FC Registration — ${groupLabel} — ${form.childName}`);
  const emailBody = encodeURIComponent(summaryLines.join("\n"));
  const emailHref = `mailto:${site.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  function reset() {
    setDirection(-1);
    setStep("select");
    setGroup(null);
    setForm(initialForm);
    if (birthCertInputRef.current) birthCertInputRef.current.value = "";
    if (passportPhotoInputRef.current) passportPhotoInputRef.current.value = "";
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-10 flex items-center justify-center gap-2">
        {(["select", "form", "confirm"] as Step[]).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                step === s
                  ? "bg-lion-gold-500 text-lion-black"
                  : (s === "select" && (step === "form" || step === "confirm")) ||
                      (s === "form" && step === "confirm")
                    ? "bg-lion-green-800 text-white"
                    : "bg-lion-black/10 text-lion-black/40"
              }`}
            >
              {(s === "select" && (step === "form" || step === "confirm")) ||
              (s === "form" && step === "confirm") ? (
                <Check size={14} />
              ) : (
                i + 1
              )}
            </div>
            {i < 2 && <div className="h-px w-8 bg-lion-black/15 sm:w-16" />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
      {step === "select" && (
        <motion.div
          key="select"
          custom={direction}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <h2 className="text-center font-display text-2xl font-bold text-lion-black">
            Choose A Program
          </h2>
          <p className="mt-2 text-center text-sm text-lion-black/60">
            Select the age group your child belongs to.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {ageGroups.map((g) => (
              <motion.button
                key={g.id}
                type="button"
                onClick={() => handleSelectGroup(g.id)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.96 }}
                className="rounded-xl border border-lion-black/10 bg-white p-6 text-center shadow-sm transition-colors hover:border-lion-gold-500 hover:shadow-md"
              >
                <div className="font-display text-3xl font-bold text-lion-green-900">
                  {g.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-lion-black/60">
                  {g.description}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {step === "form" && (
        <motion.div
          key="form"
          custom={direction}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <button
            type="button"
            onClick={() => goTo("select")}
            className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-lion-green-800 hover:text-lion-green-900"
          >
            <ChevronLeft size={16} />
            Change program
          </button>

          <div className="mb-6 flex items-center justify-center">
            <span className="rounded-full bg-lion-green-900 px-4 py-1.5 text-sm font-semibold text-lion-gold-400">
              Registering for {groupLabel}
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="childName" className="block text-sm font-medium text-lion-black/70">
                  Child&rsquo;s Full Name
                </label>
                <input
                  id="childName"
                  required
                  value={form.childName}
                  onChange={(e) => update("childName", e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-lion-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-lion-green-800 focus:ring-2 focus:ring-lion-green-800/20"
                  placeholder="e.g. Jean Baptiste"
                />
              </div>
              <div>
                <label htmlFor="childAge" className="block text-sm font-medium text-lion-black/70">
                  Child&rsquo;s Age
                </label>
                <input
                  id="childAge"
                  required
                  value={form.childAge}
                  onChange={(e) => update("childAge", e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-lion-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-lion-green-800 focus:ring-2 focus:ring-lion-green-800/20"
                  placeholder="e.g. 12"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-lion-black/70">
                  Parent / Guardian Name
                </label>
                <input
                  id="parentName"
                  required
                  value={form.parentName}
                  onChange={(e) => update("parentName", e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-lion-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-lion-green-800 focus:ring-2 focus:ring-lion-green-800/20"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-lion-black/70">
                  Phone Number
                </label>
                <input
                  id="phone"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-lion-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-lion-green-800 focus:ring-2 focus:ring-lion-green-800/20"
                  placeholder="e.g. 07XX XXX XXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-lion-black/70">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="mt-1.5 w-full rounded-md border border-lion-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-lion-green-800 focus:ring-2 focus:ring-lion-green-800/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-lion-black/70">
                Address <span className="text-lion-black/40">(optional)</span>
              </label>
              <input
                id="address"
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                className="mt-1.5 w-full rounded-md border border-lion-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-lion-green-800 focus:ring-2 focus:ring-lion-green-800/20"
                placeholder="Neighbourhood, city"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-lion-black/70">
                Additional Message <span className="text-lion-black/40">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="mt-1.5 w-full rounded-md border border-lion-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-lion-green-800 focus:ring-2 focus:ring-lion-green-800/20"
                placeholder="Anything else we should know?"
              />
            </div>

            <div className="rounded-lg border border-lion-gold-500/30 bg-lion-cream/60 p-4">
              <p className="text-sm font-medium text-lion-black/70">Required Documents</p>
              <p className="mt-1 text-xs leading-relaxed text-lion-black/50">
                Please upload a copy of the child&rsquo;s birth certificate and a
                recent passport photo. You&rsquo;ll attach these files yourself
                when sending via WhatsApp or Email in the next step, since they
                can&rsquo;t be sent automatically.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="birthCertificate" className="block text-sm font-medium text-lion-black/70">
                    Birth Certificate
                  </label>
                  <label
                    htmlFor="birthCertificate"
                    className="mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md border-2 border-dashed border-lion-black/15 bg-white px-4 py-5 text-center transition-colors hover:border-lion-gold-500"
                  >
                    {form.birthCertificate ? (
                      <>
                        <FileText size={22} className="text-lion-green-800" />
                        <span className="max-w-full truncate text-xs font-medium text-lion-black">
                          {form.birthCertificate.name}
                        </span>
                        <span className="text-[11px] text-lion-black/40">Tap to change</span>
                      </>
                    ) : (
                      <>
                        <UploadCloud size={22} className="text-lion-black/30" />
                        <span className="text-xs text-lion-black/50">
                          Tap to upload (PDF or image)
                        </span>
                      </>
                    )}
                  </label>
                  <input
                    id="birthCertificate"
                    ref={birthCertInputRef}
                    type="file"
                    required
                    accept="image/*,.pdf"
                    onChange={(e) => update("birthCertificate", e.target.files?.[0] ?? null)}
                    className="sr-only"
                  />
                </div>

                <div>
                  <label htmlFor="passportPhoto" className="block text-sm font-medium text-lion-black/70">
                    Passport Photo
                  </label>
                  <label
                    htmlFor="passportPhoto"
                    className="mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md border-2 border-dashed border-lion-black/15 bg-white px-4 py-5 text-center transition-colors hover:border-lion-gold-500"
                  >
                    {form.passportPhoto && passportPreviewUrl ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element -- local blob preview, not a static asset */}
                        <img
                          src={passportPreviewUrl}
                          alt="Passport preview"
                          className="h-12 w-12 rounded-full object-cover ring-2 ring-lion-green-800/30"
                        />
                        <span className="max-w-full truncate text-xs font-medium text-lion-black">
                          {form.passportPhoto.name}
                        </span>
                        <span className="text-[11px] text-lion-black/40">Tap to change</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon size={22} className="text-lion-black/30" />
                        <span className="text-xs text-lion-black/50">Tap to upload (image)</span>
                      </>
                    )}
                  </label>
                  <input
                    id="passportPhoto"
                    ref={passportPhotoInputRef}
                    type="file"
                    required
                    accept="image/*"
                    onChange={(e) => update("passportPhoto", e.target.files?.[0] ?? null)}
                    className="sr-only"
                  />
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-md bg-lion-gold-500 px-6 py-3.5 text-sm font-semibold text-lion-black transition-colors hover:bg-lion-gold-400"
            >
              Review Registration
            </motion.button>
          </form>
        </motion.div>
      )}

      {step === "confirm" && (
        <motion.div
          key="confirm"
          custom={direction}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="rounded-2xl border border-lion-green-900/10 bg-lion-cream p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-lion-black">
              Almost there, {form.parentName.split(" ")[0] || "there"}!
            </h2>
            <p className="mt-2 text-sm text-lion-black/60">
              Review the details below, then send your registration to us via
              WhatsApp or email &mdash; whichever is easiest for you.
            </p>

            <dl className="mt-6 space-y-2 border-t border-lion-black/10 pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-lion-black/50">Program</dt>
                <dd className="font-medium text-lion-black">{groupLabel}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-lion-black/50">Child&rsquo;s Name</dt>
                <dd className="font-medium text-lion-black">{form.childName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-lion-black/50">Child&rsquo;s Age</dt>
                <dd className="font-medium text-lion-black">{form.childAge}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-lion-black/50">Parent/Guardian</dt>
                <dd className="font-medium text-lion-black">{form.parentName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-lion-black/50">Phone</dt>
                <dd className="font-medium text-lion-black">{form.phone}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-lion-black/50">Email</dt>
                <dd className="font-medium text-lion-black">{form.email}</dd>
              </div>
              {form.address && (
                <div className="flex justify-between gap-4">
                  <dt className="text-lion-black/50">Address</dt>
                  <dd className="font-medium text-lion-black">{form.address}</dd>
                </div>
              )}
              {form.message && (
                <div className="flex justify-between gap-4">
                  <dt className="text-lion-black/50">Message</dt>
                  <dd className="text-right font-medium text-lion-black">{form.message}</dd>
                </div>
              )}
              <div className="flex justify-between gap-4">
                <dt className="text-lion-black/50">Birth Certificate</dt>
                <dd className="max-w-[60%] truncate font-medium text-lion-black">
                  {form.birthCertificate?.name ?? "Not provided"}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-lion-black/50">Passport Photo</dt>
                <dd className="max-w-[60%] truncate font-medium text-lion-black">
                  {form.passportPhoto?.name ?? "Not provided"}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex items-start gap-2 rounded-lg border border-lion-gold-500/30 bg-white p-4 text-xs leading-relaxed text-lion-black/60">
              <UploadCloud size={16} className="mt-0.5 shrink-0 text-lion-gold-600" />
              <p>
                WhatsApp and Email links can&rsquo;t attach files automatically.
                After tapping a button below, please manually attach{" "}
                <strong>{form.birthCertificate?.name ?? "the birth certificate"}</strong> and{" "}
                <strong>{form.passportPhoto?.name ?? "the passport photo"}</strong> from
                your device before sending.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                <MessageCircle size={18} />
                Send via WhatsApp
              </a>
              <a
                href={emailHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-lion-green-800 px-6 py-3.5 text-sm font-semibold text-lion-green-900 transition-colors hover:bg-lion-green-900 hover:text-white"
              >
                <Mail size={18} />
                Send via Email
              </a>
            </div>

            <button
              type="button"
              onClick={reset}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-lion-black/50 hover:text-lion-black"
            >
              <RotateCcw size={14} />
              Start a new registration
            </button>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
