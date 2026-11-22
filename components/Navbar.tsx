"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { SITE_CONFIG } from "@/data/siteContent";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Star,
  MapPin,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.ventures, href: "/ventures" },
    { label: t.nav.calculator, href: "/matcher" },
    { label: t.nav.reviews, href: "/reviews" },
    { label: t.nav.locations, href: "/locations" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const languages: { code: "en" | "hi" | "pa"; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "hi", label: "हिंदी" },
    { code: "pa", label: "ਪੰਜਾਬੀ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top trust notification bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/reviews"
              className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors font-medium"
            >
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              <span>5.0 Google Rating (38+ Verified Client Reviews)</span>
            </Link>
            <Link
              href="/locations"
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Zirakpur HQ • Chandigarh • Panchkula • Delhi • Jaipur</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="hover:text-gold-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 hidden lg:inline">Mon-Sun: 10:30 AM – 9:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#0a0f1d]/95 backdrop-blur-md border-b border-slate-200 dark:border-gold-400/20 shadow-lg py-2.5"
            : "bg-white/85 dark:bg-[#0a0f1d]/85 backdrop-blur-sm py-3.5 border-b border-slate-200/80 dark:border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-gold-400/20 dark:to-[#0a0f1d] border border-gold-400/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="font-serif font-bold text-lg text-gold-400 tracking-wider">PF</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base tracking-[0.14em] text-slate-900 dark:text-white uppercase group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                Pankaj Foolwani
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gold-600 dark:text-gold-400 uppercase font-semibold">
                Strategic Business Consultant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors relative py-1 ${
                    isActive
                      ? "text-gold-600 dark:text-gold-300 font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-gold-400 hover:scale-105 transition-all"
              title={`Switch to ${theme === "light" ? "Dark" : "Light"} theme`}
              aria-label="Toggle visual theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-slate-800" />
              ) : (
                <Sun className="w-4 h-4 text-gold-400" />
              )}
            </button>

            {/* Language Selector */}
            <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLanguage(item.code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    language === item.code
                      ? "bg-gold-400 text-slate-950 font-bold shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                "Hello Pankaj, I'd like to consult regarding your services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Book Consultation Button */}
            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-slate-950 shadow-md hover:shadow-gold-400/25 hover:scale-[1.02] transition-all flex items-center gap-1.5"
            >
              <span>{t.nav.bookConsultation}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu and controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-gold-400"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#0a0f1d] border-b border-slate-200 dark:border-gold-400/20 px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Language
              </span>
              <div className="flex items-center gap-1">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                      language === item.code
                        ? "bg-gold-400 text-slate-950"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-2 pb-3 border-b border-slate-200 dark:border-slate-800">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-semibold py-1.5 flex items-center justify-between ${
                      isActive
                        ? "text-gold-600 dark:text-gold-400 font-bold"
                        : "text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-gold-400" />}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="w-full py-2.5 rounded-xl border border-slate-300 dark:border-gold-400/40 text-slate-800 dark:text-gold-300 flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                <span>Call Hotline: {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Pankaj, I'd like to consult regarding your services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Directly</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-slate-950 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider"
              >
                <span>{t.nav.bookConsultation}</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
