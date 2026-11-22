"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { VENTURES, SITE_CONFIG } from "@/data/siteContent";
import {
  FileText,
  Plane,
  Laptop,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Building,
} from "lucide-react";

export const VenturesShowcase: React.FC = () => {
  const { t } = useLanguage();

  const ventureIcons = {
    "perfect-documents": FileText,
    "perfect-trips": Plane,
    "digital-seva-kendra": Laptop,
  };

  return (
    <section id="ventures" className="py-12 md:py-16 bg-slate-50 dark:bg-[#0a0f1d] relative subtle-grid transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#151f33] border border-gold-400/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>{t.ventures.badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t.ventures.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl mx-auto">
            {t.ventures.subtitle}
          </p>
        </div>

        {/* Ventures Triple Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {VENTURES.map((venture) => {
            const Icon = ventureIcons[venture.id as keyof typeof ventureIcons] || FileText;

            return (
              <div
                key={venture.id}
                className="glass-panel rounded-2xl flex flex-col justify-between overflow-hidden group shadow-md"
              >
                {/* Venture Card Header */}
                <div className="p-6 pb-4 border-b border-slate-200 dark:border-white/5 relative bg-slate-100/50 dark:bg-[#0f172a]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase">
                      {venture.index}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold-400/10 text-gold-700 dark:text-gold-300 border border-gold-400/30">
                      {venture.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-600 dark:text-gold-400 group-hover:scale-105 group-hover:bg-gold-400 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                        {venture.name}
                      </h3>
                      <p className="text-xs text-gold-700 dark:text-gold-400 font-medium italic">
                        {venture.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2 line-clamp-3">
                    {venture.description}
                  </p>
                </div>

                {/* Services Checklist */}
                <div className="p-6 py-4 flex-1 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
                    <span>Specialized Offerings</span>
                  </h4>

                  <div className="space-y-2">
                    {venture.primaryServices.map((service, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                        <span className="leading-tight text-[11px] sm:text-xs">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200 dark:border-white/5 space-y-1">
                    {venture.highlights.map((hl, hIdx) => (
                      <p key={hIdx} className="text-[10px] text-slate-500 dark:text-slate-400 italic">
                        • {hl}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Footer and Actions */}
                <div className="p-5 pt-3 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0c1220] space-y-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                    <MapPin className="w-3 h-3 text-gold-500 shrink-0" />
                    <span className="truncate">{venture.location}</span>
                  </div>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      venture.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{venture.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
