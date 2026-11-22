"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const milestones = [
    {
      year: "Phase 01",
      title: "Foundations in Strategic Advisory",
      description: "Started hands-on business consulting in the Tricity area (Chandigarh, Zirakpur, Panchkula), helping entrepreneurs navigate entity incorporation and regulatory roadblocks.",
    },
    {
      year: "Phase 02",
      title: "Launch of Perfect Documents",
      description: "Established Perfect Documents at Dhakoli, Zirakpur to solve public difficulties in passport processing, OCI registration, police clearance (PCC), and statutory agreements with zero rejection tolerance.",
    },
    {
      year: "Phase 03",
      title: "Incorporation of Mr & Miss Perfect Trips Pvt. Ltd.",
      description: "Incorporated a dedicated Private Limited travel and tourism company to curate high-end domestic escapes, bespoke international packages, and corporate MICE logistics.",
    },
    {
      year: "Phase 04",
      title: "Digital Seva Kendra & Regional Expansion",
      description: "Opened Digital Seva Kendra to deliver accessible e-governance and public citizen schemes; established operational liaison desks covering Delhi NCR, Gurgaon, and Jaipur.",
    },
  ];

  return (
    <main className="flex-1 bg-slate-50 dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <PageHeader
        breadcrumb="About"
        badge="Founder Leadership & Vision"
        title="Building Resilient Businesses. Creating Enduring Trust."
        subtitle="Discover the philosophy, journey, and principles behind Pankaj Foolwani and the diversified Foolwani Group of enterprises."
      />

      {/* Main Narrative and Operating Pillars */}
      <AboutSection />

      {/* Enterprise Evolution Timeline */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#080d19] border-t border-slate-200 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
              The Journey of Growth
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Evolution of the Foolwani Group
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              From an independent business consultancy to a respected multi-division group serving hundreds of enterprises and families.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-xl relative flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-gold-400/15 text-gold-700 dark:text-gold-400 inline-block mb-2">
                    {m.year}
                  </span>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Established Milestone</span>
                </div>
              </div>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Book Consultation With Pankaj</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
