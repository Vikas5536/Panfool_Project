"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { REVIEWS, SITE_CONFIG } from "@/data/siteContent";
import { Star, ShieldCheck, Quote, ExternalLink } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Documentation", "Consulting", "Travel"];

  const filteredReviews = filter === "All"
    ? REVIEWS
    : REVIEWS.filter((r) => r.serviceCategory === filter);

  return (
    <section id="reviews" className="py-12 md:py-16 bg-slate-50 dark:bg-[#0a0f1d] relative subtle-grid transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#151f33] border border-gold-400/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.reviews.badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t.reviews.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl mx-auto">
            {t.reviews.subtitle}
          </p>

          {/* Google 5.0 Trust Seal Banner */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 p-3 px-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-gold-400/30 shadow-sm">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span className="font-serif font-bold text-base text-slate-900 dark:text-white ml-1">5.0 / 5.0</span>
            </div>

            <span className="text-slate-300 dark:text-white/20 hidden sm:inline">|</span>
            <span className="text-xs text-slate-600 dark:text-slate-300">
              Google Business Profile • 38+ Genuine Client Reviews
            </span>

            <a
              href={SITE_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-gold-400 hover:bg-gold-300 text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors shadow-sm"
            >
              <span>{t.reviews.writeReviewBtn}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-1.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === cat
                  ? "bg-gold-400 text-slate-950 shadow-sm font-bold"
                  : "bg-white dark:bg-[#121929] text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between group relative shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#162035] text-gold-700 dark:text-gold-300 border border-slate-200 dark:border-white/5">
                    {review.serviceCategory}
                  </span>
                </div>

                <Quote className="w-5 h-5 text-gold-500/40 mb-2" />

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-xs uppercase shadow-sm">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                      {review.name}
                    </h4>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                      {review.location} • {review.date}
                    </span>
                  </div>
                </div>

                <div className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 text-[10px] font-medium" title="Verified Customer">
                  <ShieldCheck className="w-3 h-3" />
                  <span className="hidden sm:inline">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
