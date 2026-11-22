"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { ServicesSection } from "@/components/ServicesSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Wand2, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-slate-50 dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <PageHeader
        breadcrumb="Services"
        badge="Practice Areas & Offerings"
        title="Comprehensive Capabilities. Tailored For Success."
        subtitle="Explore our specialized divisions across Strategic Business Consulting, Government Documentation (Perfect Documents), Luxury Travel, and Public Digital Seva."
      />

      {/* Main Interactive Services Tabs & Cards */}
      <ServicesSection />

      {/* Quick Service Matcher CTA Banner */}
      <section className="py-10 bg-white dark:bg-[#080d19] border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border border-gold-400/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="space-y-1 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-400/20 text-gold-300 text-[10px] font-semibold uppercase tracking-wider">
                <Wand2 className="w-3 h-3" />
                <span>Interactive Assessment Tool</span>
              </div>
              <h3 className="font-serif text-lg sm:text-2xl font-bold">
                Unsure Which Service Or Checklist You Need?
              </h3>
              <p className="text-xs text-slate-300">
                Use our Smart Service Matcher to generate an instant document checklist and procedural timeline.
              </p>
            </div>

            <Link
              href="/matcher"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:shadow-md transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>Launch Service Matcher</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQSection />

      <Footer />
    </main>
  );
}
