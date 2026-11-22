"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { VenturesShowcase } from "@/components/VenturesShowcase";
import { Footer } from "@/components/Footer";
import { Building, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

export default function VenturesPage() {
  return (
    <main className="flex-1 bg-slate-50 dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <PageHeader
        breadcrumb="Ventures"
        badge="Foolwani Group Portfolio"
        title="Three Specialized Brands. One High Standard."
        subtitle="Discover our dedicated enterprise entities operating across documentation precision, bespoke luxury travel, and public digital citizen services."
      />

      {/* Main Ventures Showcase Cards */}
      <VenturesShowcase />

      {/* Institutional Accountability & Governance */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#080d19] border-t border-slate-200 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl space-y-2.5 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-gold-400/15 text-gold-600 dark:text-gold-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                Statutory Compliance
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                All ventures operate under strict compliance with MCA, MSME, GST, and state government frameworks, ensuring zero legal vulnerability.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl space-y-2.5 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-gold-400/15 text-gold-600 dark:text-gold-400 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                Unified Central Facility
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Headquartered at Shop No. 51, Panchkula Complex, Dhakoli, Zirakpur — featuring private consultation chambers and high-speed digital suites.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl space-y-2.5 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-gold-400/15 text-gold-600 dark:text-gold-400 flex items-center justify-center">
                <Building className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                Founder-Led Oversight
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Every venture operates under the personal quality oversight of Pankaj Foolwani, guaranteeing accountability, speed, and discretion.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Connect with a Venture Specialist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
