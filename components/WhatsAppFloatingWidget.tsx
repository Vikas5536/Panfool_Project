"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/siteContent";
import { MessageCircle, X, ShieldCheck, ChevronRight } from "lucide-react";

export const WhatsAppFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const intents = [
    {
      title: "General Enquiry",
      desc: "Connect directly for any question",
      message: "Hello Pankaj, I'd like to enquire about your services. Please guide me.",
    },
    {
      title: "Business Consulting",
      desc: "Entity setup, scaling & corporate strategy",
      message: "Hello Pankaj, I'd like to enquire about Business Consulting & Strategy. Please guide me.",
    },
    {
      title: "Passports, OCI & Visas",
      desc: "Perfect Documents verification desk",
      message: "Hello Pankaj, I'd like to enquire about Documentation Services (Passport/OCI/Visa). Please guide me.",
    },
    {
      title: "Travel & Tours",
      desc: "Mr & Miss Perfect Trips holiday planning",
      message: "Hello Pankaj, I'd like to enquire about Travel & Holiday Services. Please guide me.",
    },
    {
      title: "Corporate & VIP Advisory",
      desc: "Confidential executive desk",
      message: "Hello Pankaj, I'd like to enquire about Corporate & VIP Assistance. Please guide me.",
    },
  ];

  const handleOpenWhatsApp = (message: string) => {
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-gold-400/40 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-5 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white"
              aria-label="Close WhatsApp options"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-serif font-bold text-white text-base">
                    Pankaj Foolwani
                  </h4>
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                </div>
                <p className="text-[11px] text-emerald-100 font-medium">
                  Online • Replies in under 15 mins
                </p>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="p-3.5 bg-slate-50 dark:bg-[#131b2e] border-b border-slate-200 dark:border-white/5 text-[11px] text-slate-600 dark:text-slate-300">
            Select a subject to start an instant WhatsApp conversation:
          </div>

          {/* Intent Options List */}
          <div className="p-3 max-h-80 overflow-y-auto space-y-2">
            {intents.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleOpenWhatsApp(item.message)}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#151f33] hover:bg-slate-100 dark:hover:bg-[#1b2842] border border-slate-200 dark:border-white/5 hover:border-emerald-500/40 text-left transition-all duration-200 group flex items-center justify-between"
              >
                <div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.desc}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </button>
            ))}
          </div>

          <div className="p-3 bg-slate-100 dark:bg-[#0a0f1d] text-center border-t border-slate-200 dark:border-white/5 text-[10px] text-slate-500 dark:text-slate-400">
            Fastest channel for prompt business decisions & document verification.
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-2xl shadow-emerald-600/30 flex items-center justify-center transition-all duration-300 hover:scale-105"
        aria-label="Open WhatsApp conversation options"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />
        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <MessageCircle className="w-6 h-6 relative z-10 fill-white/20" />
        )}
      </button>
    </div>
  );
};
