"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { InteractiveServiceCalculator } from "@/components/InteractiveServiceCalculator";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG, VENTURES } from "@/data/siteContent";
import {
  Briefcase,
  FileCheck,
  Compass,
  MonitorCheck,
  ArrowRight,
  Quote,
  Star,
  ShieldCheck,
  Building,
  CheckCircle2,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  const practiceDivisions = [
    {
      title: "Strategic Business Consulting",
      badge: "Path 01",
      icon: Briefcase,
      desc: "Entity structuring (Pvt Ltd / LLP), marketing & branding identity, revenue growth, and high-value joint ventures.",
      bullets: ["MCA & GST Entity Setup", "Corporate Brand Positioning", "SOP Systems & Scaling", "Vetted Joint Ventures"],
      link: "/services",
    },
    {
      title: "Perfect Documents",
      badge: "Path 02",
      icon: FileCheck,
      desc: "Zero-error passport processing, OCI registration for NRIs, Police Clearance (PCC), international visas, and legal deeds.",
      bullets: ["Fresh & Tatkal Passports", "OCI Card Registration", "Visa Dossier Preparation", "e-Stamp & Rent Agreements"],
      link: "/services",
    },
    {
      title: "Mr & Miss Perfect Trips",
      badge: "Path 03",
      icon: Compass,
      desc: "Bespoke international holiday packages, domestic retreats, honeymoon journeys, and corporate MICE logistics.",
      bullets: ["Curated Global Tours", "Domestic Hill & Beach Escapes", "Honeymoon VIP Inclusions", "Corporate Flight Concierge"],
      link: "/services",
    },
    {
      title: "Digital Seva Kendra",
      badge: "Path 04",
      icon: MonitorCheck,
      desc: "Accessible public citizen services, government scheme filings, certificates, money transfers, and express courier dispatch.",
      bullets: ["State Scheme Registrations", "Aadhaar & PAN Rectification", "Domestic Money Transfers", "Express Courier Service"],
      link: "/services",
    },
  ];

  const featuredReviews = [
    {
      name: "Dr Priyanka Mehra",
      location: "Chandigarh",
      service: "Documentation",
      text: "This is my go-to online shop for any official documentation or form filling now. They are reliable, secure with personal details, and very affordable. From Aadhaar updates to complex applications, they handle everything smoothly. Excellent communication throughout.",
    },
    {
      name: "Rajat Kaushik",
      location: "Zirakpur",
      service: "Consulting",
      text: "Excellent service with quick and correct response and professional behaviour. Pankaj ji provides very practical business insights and handled our requirements with utter dedication. Highly recommended for every service.",
    },
    {
      name: "Preety Sharma",
      location: "Panchkula",
      service: "Documentation",
      text: "These people are very helpful. I had to get my baby's Aadhaar card made but it was not getting made elsewhere. It was done in one single day through them. Very polite, helpful and good service.",
    },
  ];

  return (
    <main className="flex-1 bg-slate-50 dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* High-Impact Statistics */}
      <StatsSection />

      {/* Executive Spotlight: Founder Story & Vision Snapshot */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#080d19] border-b border-slate-200 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#151f33] border border-gold-400/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-[0.2em]">
                <span>Founder Leadership</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Turning Vision Into Reality. Building Lasting Impact.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I am Pankaj Foolwani, an entrepreneur and business consultant driven by one foundational conviction: the right guidance and relentless integrity turn ambitious vision into enduring achievement.
              </p>

              {/* Quote Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#11192b] border-l-4 border-gold-400 border-y border-r border-slate-200 dark:border-white/5 shadow-sm">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <p className="font-serif italic text-gold-800 dark:text-gold-200 text-xs sm:text-sm">
                    &ldquo;{t.about.motto}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Read Full Story & Vision</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#151f33] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Book Private Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-6 rounded-2xl shadow-md space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 p-0.5 flex items-center justify-center shadow-sm">
                    <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-gold-400 font-serif font-bold text-lg">
                      PF
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                      Pankaj Foolwani
                    </h3>
                    <p className="text-xs text-gold-600 dark:text-gold-400 font-semibold uppercase">
                      Strategic Business Consultant
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span>Founder of 3 diversified corporate enterprises</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span>Operational desks in Zirakpur, Tricity, Delhi & Jaipur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span>5.0 Star verified Google Business rating</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Base: Dhakoli, Zirakpur</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">100% Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Practice Divisions Overview */}
      <section className="py-12 md:py-16 bg-slate-50 dark:bg-[#0a0f1d] border-b border-slate-200 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
              Practice Areas
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
              Two Paths. One Standard of Absolute Excellence.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              For business owners scaling operations, and for individuals requiring error-free documentation or bespoke travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {practiceDivisions.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold text-gold-600 dark:text-gold-400 uppercase">
                        {p.badge}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-gold-400/15 text-gold-600 dark:text-gold-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mb-3">
                      {p.desc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                      {p.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                          <span className="w-1 h-1 rounded-full bg-gold-500" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 dark:border-white/5">
                    <Link
                      href={p.link}
                      className="text-xs font-semibold text-gold-600 dark:text-gold-400 hover:underline flex items-center gap-1"
                    >
                      <span>Explore Division</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-gold-400 text-white dark:text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>Explore All Capabilities & Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ventures Showcase: 3 Brands */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#080d19] border-b border-slate-200 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
              Foolwani Group Entities
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
              Three Dedicated Corporate Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {VENTURES.map((v) => (
              <div
                key={v.id}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-gold-600 dark:text-gold-400 uppercase">
                      {v.index}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gold-400/10 text-gold-700 dark:text-gold-300 border border-gold-400/30">
                      {v.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white mb-0.5">
                    {v.name}
                  </h3>
                  <p className="text-xs text-gold-700 dark:text-gold-400 italic mb-2">
                    {v.tagline}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {v.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                    {v.primaryServices.slice(0, 4).map((s, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-gold-500 shrink-0" />
                        <span className="text-[11px] truncate">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 dark:border-white/5">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(v.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>{v.ctaText}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/ventures"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-[#151f33] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs uppercase tracking-wider hover:border-gold-400 transition-colors shadow-sm"
            >
              <span>View In-Depth Ventures Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Service Matcher Tool */}
      <InteractiveServiceCalculator />

      {/* Featured Client Reviews */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#080d19] border-t border-slate-200 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
              Client Feedback
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
              5.0 Star Google Business Reputation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {featuredReviews.map((r, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#162035] text-gold-700 dark:text-gold-300">
                      {r.service}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed mb-3">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">{r.name}</span>
                  <span className="text-[10px] text-slate-500">{r.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-[#151f33] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs uppercase tracking-wider hover:border-gold-400 transition-colors shadow-sm"
            >
              <span>Read All 38+ Verified Google Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Booking & Contact */}
      <ContactSection />

      {/* Corporate Footer */}
      <Footer />
    </main>
  );
}
