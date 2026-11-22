"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { LocationsSection } from "@/components/LocationsSection";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/data/siteContent";
import { MapPin, Navigation, Clock, Phone, Mail } from "lucide-react";

export default function LocationsPage() {
  return (
    <main className="flex-1 bg-slate-50 dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <PageHeader
        breadcrumb="Locations"
        badge="Presence & Strategic Reach"
        title="Headquarters in Zirakpur. Active Across Prime Northern Hubs."
        subtitle="Conveniently situated in the Chandigarh Tricity hub with continuous operating desks serving clients throughout Delhi NCR, Gurgaon, Jaipur, and overseas NRI communities."
      />

      {/* Main Locations Section */}
      <LocationsSection />

      {/* Office Visit Guide */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#080d19] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center shadow-md">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                Visiting Our Facility
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Planning an In-Person Meeting?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Our Dhakoli facility is easily accessible from Chandigarh, Panchkula, and the Himalayan Expressway. To ensure dedicated attention from Pankaj Foolwani, we recommend reserving an appointment time slot prior to your arrival.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={SITE_CONFIG.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#151f33] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  Schedule Appointment
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-[#0c1220] p-5 rounded-xl border border-slate-200 dark:border-white/5 space-y-2.5 text-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Quick Office Summary
              </h4>
              <div className="space-y-2 text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                  <span><strong>Full Address:</strong> {SITE_CONFIG.officeAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span><strong>Hours:</strong> {SITE_CONFIG.workingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span><strong>Telephone / WhatsApp:</strong> {SITE_CONFIG.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span><strong>Email:</strong> {SITE_CONFIG.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
