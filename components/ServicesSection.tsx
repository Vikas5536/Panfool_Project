"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  CONSULTING_SERVICES,
  DOCUMENTATION_SERVICES,
  TRAVEL_SERVICES,
  DIGITAL_SEVA_SERVICES,
  SITE_CONFIG,
} from "@/data/siteContent";
import {
  Briefcase,
  FileCheck,
  Compass,
  MonitorCheck,
  CheckCircle2,
  Clock,
  UserCheck,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"consulting" | "docs" | "travel" | "digital">("consulting");

  const tabs = [
    {
      id: "consulting",
      label: t.services.tabPath1,
      shortLabel: "Business Consulting",
      icon: Briefcase,
      count: CONSULTING_SERVICES.length,
      data: CONSULTING_SERVICES,
    },
    {
      id: "docs",
      label: t.services.tabPath2,
      shortLabel: "Documentation & OCI",
      icon: FileCheck,
      count: DOCUMENTATION_SERVICES.length,
      data: DOCUMENTATION_SERVICES,
    },
    {
      id: "travel",
      label: t.services.tabPath3,
      shortLabel: "Luxury Travel & Tours",
      icon: Compass,
      count: TRAVEL_SERVICES.length,
      data: TRAVEL_SERVICES,
    },
    {
      id: "digital",
      label: t.services.tabPath4,
      shortLabel: "Digital Seva & e-Gov",
      icon: MonitorCheck,
      count: DIGITAL_SEVA_SERVICES.length,
      data: DIGITAL_SEVA_SERVICES,
    },
  ];

  const currentTabObj = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="services" className="py-12 md:py-16 bg-white dark:bg-[#070c17] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#151f33] border border-gold-400/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t.services.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-gold-400 to-gold-500 text-slate-950 shadow-sm scale-102 font-bold"
                    : "bg-slate-100 dark:bg-[#121929] hover:bg-slate-200 dark:hover:bg-[#18233a] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-slate-950" : "text-gold-500"}`} />
                <span>{tab.shortLabel}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? "bg-black/20 text-black font-bold" : "bg-black/10 dark:bg-white/10 text-slate-700 dark:text-white/70"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentTabObj.data.map((service, idx) => (
            <div
              key={service.id}
              className="glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-gold-600 dark:text-gold-400/80 tracking-wider">
                    0{idx + 1}
                  </span>
                  {service.timeline && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#141d30] px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/5">
                      <Clock className="w-2.5 h-2.5 text-gold-500" />
                      <span>{service.timeline}</span>
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 mb-4 pt-2.5 border-t border-slate-200 dark:border-white/5">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                      <span className="leading-tight text-[11px] sm:text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Target Audience */}
                {service.suitableFor && (
                  <div className="mb-4 p-2 rounded-lg bg-slate-50 dark:bg-[#0c1220] border border-slate-200 dark:border-white/5 text-[10px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                    <UserCheck className="w-3 h-3 text-gold-500 shrink-0" />
                    <span className="truncate"><strong>Ideal For:</strong> {service.suitableFor}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between gap-2">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Pankaj, I would like to consult you regarding: ${service.title}. Please guide me.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-emerald-50 dark:bg-[#112117] hover:bg-emerald-100 dark:hover:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  <span>Consult via WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-[#151f33] hover:bg-gold-400 hover:text-slate-950 text-slate-700 dark:text-white border border-slate-200 dark:border-white/10 transition-colors"
                  title="Enquire online"
                >
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white border border-gold-400/30 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="font-serif text-lg sm:text-xl font-bold mb-1">
              Have a Custom or Multi-Jurisdiction Requirement?
            </h3>
            <p className="text-xs text-slate-300">
              Pankaj Foolwani personally reviews complex cross-border documentation, joint-venture proposals, and corporate travel tenders.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/matcher"
              className="px-5 py-2.5 rounded-xl border border-gold-400/50 text-gold-300 hover:bg-gold-400/10 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Use Service Matcher
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-slate-950 text-xs font-bold uppercase tracking-wider hover:shadow-md transition-all"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
