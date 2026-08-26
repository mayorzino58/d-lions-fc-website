"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import MotionLink from "@/components/motion/MotionLink";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lion-gold-500/20 bg-lion-black/95 backdrop-blur supports-[backdrop-filter]:bg-lion-black/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.jpeg"
            alt="D Lions FC Rwanda crest"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-lion-gold-500/60"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-wide text-white">
            D LIONS <span className="text-lion-gold-400">FC</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-lion-gold-400"
            >
              {link.label}
            </Link>
          ))}
          <MotionLink
            href="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="ml-2 rounded-md bg-lion-gold-500 px-4 py-2 text-sm font-semibold text-lion-black transition-colors hover:bg-lion-gold-400"
          >
            Register Now
          </MotionLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="block"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="overflow-hidden border-t border-lion-gold-500/20 bg-lion-black lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-lion-gold-400"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-lion-gold-500 px-4 py-2.5 text-center text-sm font-semibold text-lion-black"
              >
                Register Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
