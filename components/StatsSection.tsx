"use client";

import React from "react";
import { Users, Building2, MapPin, Award } from "lucide-react";

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "500+",
      label: "Clients & Enterprises Advised",
      description: "Across consulting, documentation and travel itineraries",
      icon: Users,
    },
    {
      value: "3",
      label: "Flagship Corporate Ventures",
      description: "Perfect Documents, Mr & Miss Perfect Trips, Digital Seva Kendra",
      icon: Building2,
    },
    {
      value: "6+",
      label: "Strategic City Hubs",
      description: "Zirakpur HQ, Chandigarh, Panchkula, Delhi NCR, Jaipur",
      icon: MapPin,
    },
    {
      value: "5.0 ★",
      label: "Flawless Client Rating",
      description: "100% verified 5-star customer feedback on Google Business",
      icon: Award,
    },
  ];

  return (
    <section className="py-8 bg-white dark:bg-[#080d19] border-b border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-4 sm:p-5 rounded-xl transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-2xl sm:text-3xl font-extrabold gold-gradient-text tracking-tight">
                    {stat.value}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#172138] border border-slate-200 dark:border-white/10 flex items-center justify-center text-gold-600 dark:text-gold-400 group-hover:border-gold-400/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                  {stat.label}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
