"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Quote,
  CheckCircle,
  Sparkles,
  Shield,
  Clock,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 md:py-16 bg-slate-50 dark:bg-[#0a0f1d] relative subtle-grid transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#151f33] border border-gold-400/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t.about.heading}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-400 to-amber-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Narrative & Vision Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="text-base sm:text-lg text-slate-900 dark:text-white font-medium">
              {t.about.p1}
            </p>
            <p className="text-xs sm:text-sm">
              {t.about.p2}
            </p>
            <p className="text-xs sm:text-sm">
              {t.about.p3}
            </p>

            {/* Strategic Callout Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#11192b] border-l-4 border-gold-400 border-y border-r border-slate-200 dark:border-white/5 shadow-sm">
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-gold-500 shrink-0 opacity-80 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-slate-900 dark:text-white text-sm mb-0.5">
                    The Founding Philosophy
                  </h4>
                  <p className="font-serif italic text-gold-700 dark:text-gold-200 text-xs sm:text-sm leading-normal">
                    &ldquo;{t.about.motto}&rdquo;
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    — Pankaj Foolwani, Founder & Principal Advisor
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Book Direct Session</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/ventures"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white dark:bg-[#151f33] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs uppercase tracking-wider hover:border-gold-400 transition-colors shadow-sm"
              >
                <span>Explore The 3 Ventures</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Profile & Corporate Vision Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-gold-400/25 relative overflow-hidden shadow-lg">
              {/* Profile Monogram & Titles */}
              <div className="flex items-center gap-4 mb-5 pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-gold-400 to-amber-700 p-0.5 shadow-md">
                  <div className="w-12 h-12 rounded-[10px] bg-slate-950 flex items-center justify-center">
                    <span className="font-serif font-bold text-xl text-gold-400 tracking-wider">
                      PF
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                    Pankaj Foolwani
                  </h3>
                  <p className="text-xs text-gold-600 dark:text-gold-400 font-semibold tracking-wider uppercase">
                    Strategic Business Consultant
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Managing Director • Foolwani Enterprises
                  </p>
                </div>
              </div>

              {/* Key Credentials List */}
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0 mt-0.5">
                    <Shield className="w-3 h-3" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">Full Regulatory Integrity</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Registered entities & 100% compliant statutory processes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0 mt-0.5">
                    <Clock className="w-3 h-3" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">Accelerated Execution</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Passports, OCI & registrations processed without delay.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0 mt-0.5">
                    <Briefcase className="w-3 h-3" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">Senior Hands-On Advisory</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Direct founder access without junior intermediaries.</p>
                  </div>
                </div>
              </div>

              {/* Verified seal */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Base: <strong>Zirakpur, Punjab</strong></span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 text-[11px]">
                  <CheckCircle className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Five Core Operating Pillars Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {t.about.pillarsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {t.about.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-[11px] font-bold text-gold-600 dark:text-gold-400 mb-1.5 tracking-widest">
                    0{idx + 1}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white mb-1 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {pillar.desc}
                  </p>
                </div>
                <div className="w-4 h-0.5 bg-gold-400/40 mt-3 group-hover:w-full group-hover:bg-gold-500 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
