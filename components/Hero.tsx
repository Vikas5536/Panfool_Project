"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteContent";
import {
  Star,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Briefcase,
  FileCheck,
  Compass,
  MapPin,
} from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden subtle-grid bg-slate-50/50 dark:bg-[#0a0f1d] transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-b from-amber-400/10 via-amber-600/5 to-transparent blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-[#151d2f] border border-gold-500/30 text-gold-700 dark:text-gold-300 text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
            <span>{t.hero.titlePre} </span>
            <span className="gold-gradient-text block sm:inline">{t.hero.titleHighlight} </span>
            <span className="text-slate-800 dark:text-slate-100">{t.hero.titlePost}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-6">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-slate-950 hover:shadow-lg hover:shadow-gold-400/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                "Hello Pankaj, I'd like to enquire about your consulting and documentation services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs bg-emerald-50 dark:bg-[#101c15] hover:bg-emerald-100 dark:hover:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{t.hero.ctaWhatsApp}</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs bg-white dark:bg-[#141b2d] hover:bg-slate-100 dark:hover:bg-[#1a233a] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-500" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Quick Practice Cards linking to pages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left max-w-4xl mx-auto mb-8">
            <Link
              href="/services"
              className="glass-panel glass-panel-hover p-4 rounded-xl group block"
            >
              <div className="w-9 h-9 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-2 group-hover:scale-105 transition-transform">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                Strategic Consulting
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Business setup, multi-city scaling, entity structuring, branding & joint ventures.
              </p>
            </Link>

            <Link
              href="/ventures"
              className="glass-panel glass-panel-hover p-4 rounded-xl group block"
            >
              <div className="w-9 h-9 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-2 group-hover:scale-105 transition-transform">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                Perfect Documents
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Passports, OCI, PCC, visa applications, e-Stamp deeds, and government compliance.
              </p>
            </Link>

            <Link
              href="/ventures"
              className="glass-panel glass-panel-hover p-4 rounded-xl group block"
            >
              <div className="w-9 h-9 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-2 group-hover:scale-105 transition-transform">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                Mr & Miss Perfect Trips
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Bespoke luxury international holidays, domestic getaways, honeymoons & corporate MICE.
              </p>
            </Link>
          </div>

          {/* Google Trust Signal */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-gold-400/20 text-xs shadow-sm">
            <div className="flex items-center gap-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
              <span className="font-bold text-slate-900 dark:text-white ml-1">5.0 / 5.0</span>
            </div>
            <span className="text-slate-300 dark:text-white/20">•</span>
            <span className="text-slate-600 dark:text-slate-300">
              38+ Verified Google Reviews
            </span>
            <span className="text-slate-300 dark:text-white/20">•</span>
            <Link
              href="/reviews"
              className="text-gold-600 dark:text-gold-400 hover:underline font-semibold"
            >
              Read Reviews ↗
            </Link>
          </div>
        </div>
      </div>

      {/* Strategic Locations Marquee Banner */}
      <div className="mt-8 border-y border-slate-200 dark:border-white/5 bg-slate-100/90 dark:bg-[#080d1a]/90 py-2.5 overflow-hidden">
        <div className="flex items-center gap-4 text-xs">
          <div className="px-5 font-semibold uppercase tracking-[0.2em] text-gold-700 dark:text-gold-400 whitespace-nowrap flex items-center gap-1.5 text-[11px]">
            <MapPin className="w-3 h-3" />
            <span>{t.hero.tickerLabel}</span>
          </div>

          <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
            {SITE_CONFIG.locations.concat(SITE_CONFIG.locations).map((loc, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span className="font-serif font-bold text-slate-800 dark:text-white">{loc.city}</span>
                <span className="text-slate-500 dark:text-slate-400 text-[10px]">({loc.role})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
