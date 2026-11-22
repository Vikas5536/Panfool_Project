"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  breadcrumb,
}) => {
  return (
    <div className="pt-24 pb-8 md:pt-28 md:pb-10 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-[#0d1424] dark:to-[#0a0f1d] border-b border-slate-200 dark:border-white/5 relative subtle-grid transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <Link href="/" className="hover:text-gold-600 dark:hover:text-gold-400 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-gold-600 dark:text-gold-400 font-semibold">{breadcrumb}</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white dark:bg-[#151f33] border border-gold-400/30 text-gold-700 dark:text-gold-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 shadow-sm">
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
