"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { InteractiveServiceCalculator } from "@/components/InteractiveServiceCalculator";
import { Footer } from "@/components/Footer";

export default function MatcherPage() {
  return (
    <main className="flex-1 bg-slate-50 dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <PageHeader
        breadcrumb="Service Matcher"
        badge="Interactive Consultation Selector"
        title="Find the Right Service & Essential Document Checklist"
        subtitle="Select your immediate objective to view procedural timelines, essential checklist items, and dispatch a tailored briefing directly to Pankaj Foolwani on WhatsApp."
      />

      {/* Main Interactive Tool */}
      <InteractiveServiceCalculator />

      {/* 3 Simple Steps Process Info */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#080d19] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
              How It Works
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              From Inquiry to Flawless Execution in 3 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl relative shadow-sm">
              <span className="font-mono text-xs font-bold text-gold-600 dark:text-gold-400 mb-1.5 block">
                STEP 01
              </span>
              <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white mb-1.5">
                Select Your Needs
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Choose between Business Consulting, Perfect Documents, Luxury Travel, or Digital Seva to dynamically generate your checklist.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl relative shadow-sm">
              <span className="font-mono text-xs font-bold text-gold-600 dark:text-gold-400 mb-1.5 block">
                STEP 02
              </span>
              <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white mb-1.5">
                Audit Requirements
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Review estimated turnaround times and gather mandatory government or travel documentation required for seamless processing.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl relative shadow-sm">
              <span className="font-mono text-xs font-bold text-gold-600 dark:text-gold-400 mb-1.5 block">
                STEP 03
              </span>
              <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white mb-1.5">
                Instant WhatsApp Briefing
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Dispatch your formatted brief directly to Pankaj Foolwani for immediate priority review and rapid execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
