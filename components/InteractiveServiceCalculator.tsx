"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteContent";
import {
  Wand2,
  CheckCircle,
  FileText,
  Clock,
  MessageCircle,
} from "lucide-react";

interface CategoryData {
  id: string;
  title: string;
  division: string;
  timeline: string;
  checklist: string[];
  options: { id: string; label: string }[];
}

const CATEGORIES: CategoryData[] = [
  {
    id: "consulting",
    title: "Business Setup & Strategic Growth",
    division: "Pankaj Foolwani Advisory",
    timeline: "Initial strategic audit within 24–48 hours",
    checklist: [
      "PAN Card & Aadhaar of all Directors / Partners",
      "Proposed company name options (MCA search check)",
      "Registered office electricity bill & NOC / Rent Agreement",
      "Overview of business model & target market",
    ],
    options: [
      { id: "entity-structuring", label: "Private Limited / LLP Registration" },
      { id: "brand-positioning", label: "Corporate Branding & Market Positioning" },
      { id: "expansion-plan", label: "Multi-City Growth & Revenue Scaling" },
      { id: "sops-operations", label: "SOP Systems & Operational Coordination" },
      { id: "jv-opportunities", label: "Strategic Joint Ventures & Partnerships" },
    ],
  },
  {
    id: "passport-docs",
    title: "Passport, OCI & Legal Documentation",
    division: "Perfect Documents",
    timeline: "Document review within 24 hours; PSK slot next available",
    checklist: [
      "Existing Passport / Old Passport copy (if renewal)",
      "Proof of Date of Birth (Birth Certificate or 10th marksheet)",
      "Current proof of address (Aadhaar / Voter ID / Utility bill)",
      "For OCI: Foreign passport + Indian Origin proof / Surrender certificate",
    ],
    options: [
      { id: "fresh-passport", label: "Fresh Passport Application" },
      { id: "tatkal-passport", label: "Urgent Tatkal Passport" },
      { id: "oci-application", label: "OCI Card for NRIs / Spouses" },
      { id: "pcc-police", label: "Police Clearance Certificate (PCC)" },
      { id: "visa-dossier", label: "International Tourist / Business Visa Dossier" },
      { id: "estamp-rent", label: "e-Stamp Paper & Registered Rent Deed" },
    ],
  },
  {
    id: "travel-planning",
    title: "Luxury Holiday & Corporate Travel",
    division: "Mr And Miss Perfect Trips Pvt. Ltd.",
    timeline: "Custom proposal & flight options within 12–24 hours",
    checklist: [
      "Estimated dates of travel & duration",
      "Number of adults & children with age details",
      "Destination preference (Domestic or International)",
      "Hotel category requirement (4-star / 5-star / Luxury Resort)",
    ],
    options: [
      { id: "international-tour", label: "International Curated Package (Dubai, Bali, Europe, etc.)" },
      { id: "domestic-tour", label: "Domestic Tour (Kashmir, Kerala, Himachal, Goa, Rajasthan)" },
      { id: "honeymoon-pkg", label: "Bespoke Honeymoon with Romantic Perks" },
      { id: "corporate-mice", label: "Corporate Off-site & Conference Logistics" },
      { id: "flight-hotel", label: "Discounted Flight Bookings & Hotel Concierge" },
    ],
  },
  {
    id: "digital-seva",
    title: "Digital Seva & Citizen Schemes",
    division: "Digital Seva Kendra",
    timeline: "Instant over-the-counter or same-day processing",
    checklist: [
      "Aadhaar card with linked mobile number",
      "Passport size photographs",
      "Supporting revenue / municipality records for certificates",
    ],
    options: [
      { id: "aadhaar-update", label: "Aadhaar Card Biometric / Demographic Update" },
      { id: "pan-card", label: "Instant New PAN Card / Correction" },
      { id: "domicile-income", label: "State Domicile / Income / Caste Certificate" },
      { id: "money-transfer", label: "Fast Domestic Money Transfer (DMT)" },
      { id: "courier-dispatch", label: "Express Courier Booking & Speed Post" },
    ],
  },
];

export const InteractiveServiceCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCatId, setSelectedCatId] = useState<string>("consulting");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "entity-structuring",
    "brand-positioning",
  ]);
  const [consultationMode, setConsultationMode] = useState<string>("WhatsApp");

  const currentCat = CATEGORIES.find((c) => c.id === selectedCatId)!;

  const handleToggleOption = (id: string) => {
    if (selectedOptions.includes(id)) {
      if (selectedOptions.length > 1) {
        setSelectedOptions(selectedOptions.filter((item) => item !== id));
      }
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const handleCategoryChange = (catId: string) => {
    setSelectedCatId(catId);
    const newCat = CATEGORIES.find((c) => c.id === catId)!;
    setSelectedOptions([newCat.options[0].id]);
  };

  const selectedOptionLabels = currentCat.options
    .filter((o) => selectedOptions.includes(o.id))
    .map((o) => o.label)
    .join(", ");

  const waBriefMessage = `Hello Pankaj, I used your website Service Matcher for: *${currentCat.title}* (${currentCat.division}).\n\nSpecific Requirements:\n- ${selectedOptionLabels}\n\nPreferred Consultation Mode: ${consultationMode}.\n\nPlease review and let me know the next steps.`;

  return (
    <section id="matcher" className="py-12 md:py-16 bg-white dark:bg-[#080d19] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#151f33] border border-gold-400/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <Wand2 className="w-3.5 h-3.5" />
            <span>{t.calculator.badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t.calculator.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl mx-auto">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Interactive Matcher Container */}
        <div className="glass-panel rounded-2xl p-5 sm:p-8 shadow-lg">
          {/* Step 1: Category Selector */}
          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400 mb-3">
              Step 1: Select Your Primary Requirement
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCatId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all duration-300 ${
                      isSelected
                        ? "bg-gold-50 dark:bg-gold-400/10 border-gold-400 text-slate-900 dark:text-white shadow-sm"
                        : "bg-slate-50 dark:bg-[#121929] border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-gold-600 dark:text-gold-400 font-bold">
                        {cat.division}
                      </span>
                      {isSelected && <CheckCircle className="w-3.5 h-3.5 text-gold-500" />}
                    </div>
                    <div className="font-serif font-bold text-xs sm:text-sm leading-snug">
                      {cat.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Specific Services Selection */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400 mb-2.5">
                  Step 2: Choose Specific Deliverables
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentCat.options.map((option) => {
                    const isChecked = selectedOptions.includes(option.id);
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleToggleOption(option.id)}
                        className={`p-3 rounded-xl text-left text-xs font-semibold border flex items-center justify-between transition-all ${
                          isChecked
                            ? "bg-slate-100 dark:bg-[#19243c] border-gold-500 text-gold-800 dark:text-gold-200 shadow-sm"
                            : "bg-slate-50 dark:bg-[#101726] border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        <span className="leading-snug text-xs">{option.label}</span>
                        <div
                          className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ml-2 ${
                            isChecked
                              ? "bg-gold-400 border-gold-400 text-slate-950"
                              : "border-slate-300 dark:border-white/20"
                          }`}
                        >
                          {isChecked && <CheckCircle className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preferred mode of consultation */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400 mb-2">
                  Step 3: Preferred Consultation Channel
                </label>
                <div className="flex flex-wrap gap-2">
                  {["WhatsApp (Fastest)", "Direct Phone Call", "In-Person (Office Visit)"].map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setConsultationMode(mode)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        consultationMode === mode
                          ? "bg-gold-400 text-slate-950 border-gold-400 font-bold"
                          : "bg-slate-50 dark:bg-[#121929] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:text-slate-950 dark:hover:text-white"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Tailored Summary & WhatsApp Dispatch */}
            <div className="lg:col-span-5">
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0c1220] border border-slate-200 dark:border-gold-400/30 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-gold-600 dark:text-gold-400 font-bold">
                        Designated Entity
                      </span>
                      <h4 className="font-serif font-bold text-slate-900 dark:text-white text-sm">
                        {currentCat.division}
                      </h4>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/20 font-bold">
                      Active
                    </span>
                  </div>

                  {/* Estimated Timeline */}
                  <div className="py-2.5 border-b border-slate-200 dark:border-white/10 flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">Expected Timeline</span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-300">{currentCat.timeline}</span>
                    </div>
                  </div>

                  {/* Document Checklist */}
                  <div className="py-2.5 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      <FileText className="w-3 h-3 text-gold-500" />
                      <span>Essential Documentation Checklist</span>
                    </div>
                    <ul className="space-y-1 pt-1">
                      {currentCat.checklist.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                          <span className="text-gold-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dispatch Button */}
                <div className="pt-3 border-t border-slate-200 dark:border-white/10">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      waBriefMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send Brief on WhatsApp</span>
                  </a>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center mt-1.5">
                    Instant response within 15 minutes during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
