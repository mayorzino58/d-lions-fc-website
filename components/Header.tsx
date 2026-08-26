"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";

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
          <Link
            href="/register"
            className="ml-2 rounded-md bg-lion-gold-500 px-4 py-2 text-sm font-semibold text-lion-black transition-colors hover:bg-lion-gold-400"
          >
            Register Now
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-lion-gold-500/20 bg-lion-black px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-lion-gold-400"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-lion-gold-500 px-4 py-2.5 text-center text-sm font-semibold text-lion-black"
            >
              Register Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
