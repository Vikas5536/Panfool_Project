"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteContent";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Globe,
  Building,
  CheckCircle,
} from "lucide-react";

export const LocationsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="locations" className="py-12 md:py-16 bg-white dark:bg-[#070c17] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#151f33] border border-gold-400/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.locations.badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t.locations.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl mx-auto">
            {t.locations.subtitle}
          </p>
        </div>

        {/* Central Headquarters Showcase Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-8 shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-700 dark:text-gold-400 text-[10px] font-bold tracking-wider uppercase">
                <Building className="w-3 h-3" />
                <span>Primary Operational Headquarters</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Pankaj Foolwani Corporate Office & Service Center
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Operating out of our central facility in Dhakoli, Zirakpur, catering to the entire Chandigarh Tricity region, Punjab, Haryana, and facilitating remote consultations across Delhi NCR, Jaipur, and international NRIs.
              </p>

              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-start gap-2 text-slate-900 dark:text-white">
                  <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="font-semibold">{SITE_CONFIG.officeAddress}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span><strong>Hours:</strong> {SITE_CONFIG.workingHours}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span><strong>Direct Line:</strong> {SITE_CONFIG.phoneDisplay}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={SITE_CONFIG.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Google Maps</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#151f33] hover:bg-slate-200 dark:hover:bg-[#1b2842] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-500" />
                  <span>Call Office Desk</span>
                </a>
              </div>
            </div>

            {/* Right side: Hub capabilities */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-[#0c1220] p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-white/5 space-y-3">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gold-700 dark:text-gold-400 mb-1">
                Regional Hub Capabilities
              </h4>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-white dark:bg-[#121929] border border-slate-200 dark:border-white/5 flex items-start gap-2 shadow-sm">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">In-Person Consultation Lounge</h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Private desk for business owners and corporate clients.</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-[#121929] border border-slate-200 dark:border-white/5 flex items-start gap-2 shadow-sm">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">Digital Biometric Suite</h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">High-resolution document scanning & biometric linking.</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-[#121929] border border-slate-200 dark:border-white/5 flex items-start gap-2 shadow-sm">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">Courier & Dispatch Logistics</h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Same-day domestic dispatch for urgent passport/legal forms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Locations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SITE_CONFIG.locations.map((loc, idx) => (
            <div
              key={idx}
              className="glass-panel p-3.5 rounded-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-7 h-7 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-600 dark:text-gold-400">
                  {loc.city === "International Desk" ? (
                    <Globe className="w-3.5 h-3.5" />
                  ) : (
                    <MapPin className="w-3.5 h-3.5" />
                  )}
                </div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-gold-600 dark:text-gold-400 font-bold">
                  {loc.state}
                </span>
              </div>

              <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                {loc.city}
              </h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                {loc.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
