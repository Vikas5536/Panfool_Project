"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteContent";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ExternalLink,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#070b14] text-slate-300 border-t border-slate-800 dark:border-gold-400/20 pt-12 pb-8 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 p-0.5 shadow-md">
                <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                  <span className="font-serif font-bold text-base text-gold-400 tracking-wider">
                    PF
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base tracking-[0.14em] text-white uppercase">
                  Pankaj Foolwani
                </span>
                <span className="text-[10px] tracking-[0.2em] text-gold-400 uppercase font-semibold">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Strategic business consultant and founder of Foolwani Group ventures including Perfect Documents, Mr And Miss Perfect Trips Private Limited, and Digital Seva Kendra.
            </p>

            {/* Google Rating Badge */}
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 inline-flex items-center gap-2.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">5.0 Google Rating</span>
              <span className="text-slate-700">•</span>
              <a
                href={SITE_CONFIG.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold-400 hover:underline flex items-center gap-1 font-medium"
              >
                <span>38+ Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Multi-page Navigation Column */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/" className="text-slate-400 hover:text-gold-300 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-gold-300 transition-colors">
                  About Pankaj & Vision
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-gold-300 transition-colors">
                  All Services & Advisory
                </Link>
              </li>
              <li>
                <Link href="/ventures" className="text-slate-400 hover:text-gold-300 transition-colors">
                  The 3 Business Ventures
                </Link>
              </li>
              <li>
                <Link href="/matcher" className="text-slate-400 hover:text-gold-300 transition-colors">
                  Smart Service Matcher
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-slate-400 hover:text-gold-300 transition-colors">
                  Verified Google Reviews
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-slate-400 hover:text-gold-300 transition-colors">
                  Offices & Regional Hubs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-gold-300 transition-colors">
                  Book VIP Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-white">
              Executive Desk
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{SITE_CONFIG.officeAddress}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{SITE_CONFIG.workingHours}</span>
              </div>
            </div>

            {/* Social & Verification Badges */}
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-500 text-emerald-400 flex items-center justify-center transition-colors"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>

              <a
                href={SITE_CONFIG.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-950 border border-slate-800 hover:border-gold-400 text-gold-400 flex items-center justify-center transition-colors"
                title="Google Business Profile"
              >
                <Star className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.justdial.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 h-7 rounded-lg bg-slate-950 border border-slate-800 hover:border-gold-400 text-gold-400 flex items-center justify-center font-bold text-xs transition-colors"
                title="Justdial Profile"
              >
                JD
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left text-[11px]">
            <span>© {new Date().getFullYear()} Pankaj Foolwani. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">{SITE_CONFIG.role}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-gold-400 hover:text-gold-300 transition-colors font-medium text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
