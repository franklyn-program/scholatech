"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "PRICING", href: "#pricing" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#solutions" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between gap-4 pointer-events-none">
      {/* Hard Left Logo - Wider & Crisp Pure White */}
      <Link href="/" className="pointer-events-auto flex items-center group shrink-0 py-1">
        <Image
          src="/images/logo/logo.png"
          alt="Scholatech Logo"
          width={300}
          height={75}
          className="h-8 sm:h-10 md:h-12 lg:h-[3.3rem] w-auto max-w-[160px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] object-contain filter brightness-0 invert drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)] transition-transform group-hover:scale-105"
          priority
        />
      </Link>

      {/* Floating Centered Pill - Nav Links Only */}
      <div className="hidden md:flex pointer-events-auto bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/10 rounded-full px-7 py-2.5 items-center gap-8 backdrop-blur-md">
        <nav className="flex items-center gap-6 sm:gap-8 font-heading">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] sm:text-xs font-bold tracking-wider text-slate-800 dark:text-slate-200 hover:text-primary-blue dark:hover:text-primary-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Hard Right Action Button & Mobile Toggle */}
      <div className="pointer-events-auto flex items-center gap-3 shrink-0">
        <a
          href="#contact"
          className="hidden md:inline-flex bg-primary-blue hover:bg-blue-700 text-white font-heading font-bold text-xs px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
        >
          Contact us
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-md backdrop-blur-md"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xl md:hidden space-y-3 z-50">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-bold tracking-wider text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-block text-center bg-primary-blue text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md"
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

