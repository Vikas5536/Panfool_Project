"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/data/siteContent";
import { ShieldCheck, ExternalLink } from "lucide-react";

export default function ReviewsPage() {
  return (
    <main className="flex-1 bg-slate-50 dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <PageHeader
        breadcrumb="Reviews"
        badge="Reputation & Client Experiences"
        title="Trust Earned One Case At A Time."
        subtitle="Explore genuine client experiences across strategic business development, zero-error passport and OCI paperwork, and handcrafted luxury travel packages."
      />

      {/* Main Filterable Reviews Section */}
      <ReviewsSection />

      {/* High-Trust Guarantee Banner */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#080d19] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-gold-400/30 text-center max-w-3xl mx-auto shadow-md space-y-4">
            <div className="w-12 h-12 rounded-full bg-gold-400/15 text-gold-600 dark:text-gold-400 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Have You Worked With Pankaj Foolwani or His Ventures?
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
              Your feedback helps other entrepreneurs and families make informed decisions. Share your honest experience directly on our official Google Business Profile.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE_CONFIG.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>Write a Google Business Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-[#151f33] hover:bg-slate-200 dark:hover:bg-[#1b2842] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
