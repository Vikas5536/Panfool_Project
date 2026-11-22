"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FAQS } from "@/data/siteContent";
import { HelpCircle, ChevronDown } from "lucide-react";

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-[#070c17] border-t border-slate-200 dark:border-white/5 relative subtle-grid transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#151f33] border border-gold-400/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t.faq.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-panel rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-gold-600 dark:text-gold-400">
                      0{idx + 1}
                    </span>
                    <span className="font-serif font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full bg-slate-100 dark:bg-[#151f33] border border-slate-200 dark:border-white/10 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-gold-400 text-slate-950 font-bold" : ""
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
