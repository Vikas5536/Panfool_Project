"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteContent";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Business Consulting & Growth",
    meetingMode: "WhatsApp",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    "Business Consulting & Growth",
    "Entity Structuring & Registrations",
    "Perfect Documents (Passports / Tatkal)",
    "OCI (Overseas Citizen of India) & PCC",
    "International Visa Documentation",
    "Mr & Miss Perfect Trips (International Holidays)",
    "Mr & Miss Perfect Trips (Domestic & Honeymoons)",
    "Corporate Travel & MICE",
    "Digital Seva Kendra (Govt Services)",
    "Corporate & VIP Priority Assistance",
    "Other Special Advisory Enquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name && !formData.phone) {
      alert("Please enter your name and phone number first.");
      return;
    }
    const waText = `Hello Pankaj,\n\nI am reaching out via your website enquiry form.\n\n*Name:* ${formData.name || "Not provided"}\n*Phone:* ${formData.phone || "Not provided"}\n*Email:* ${formData.email || "Not provided"}\n*Service Required:* ${formData.service}\n*Preferred Mode:* ${formData.meetingMode}\n*Message:* ${formData.message || "I'd like to schedule an initial consultation."}\n\nPlease let me know when we can connect.`;

    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`, "_blank");
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-slate-50 dark:bg-[#0a0f1d] relative subtle-grid transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#151f33] border border-gold-400/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t.contact.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Channels & Office Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 rounded-2xl space-y-4 shadow-md">
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                Direct Contact Channels
              </h3>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Pankaj, I'd like to enquire about your services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-emerald-50 dark:bg-[#101c15] hover:bg-emerald-100 dark:hover:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 flex items-start gap-3 transition-all duration-300 group block"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      WhatsApp (Fastest Response)
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">
                    {SITE_CONFIG.phoneDisplay}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-[#93a699]">
                    Instant reply within 15 minutes during operating hours.
                  </p>
                </div>
              </a>

              {/* Phone Hotline Card */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#141b2d] hover:bg-slate-100 dark:hover:bg-[#19233a] border border-slate-200 dark:border-white/5 flex items-start gap-3 transition-all duration-300 group block shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-gold-400/15 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 dark:text-gold-400">
                    Direct Call Hotline
                  </span>
                  <p className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">
                    {SITE_CONFIG.phoneDisplay}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Speak directly with Pankaj Foolwani or senior desk.
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#141b2d] hover:bg-slate-100 dark:hover:bg-[#19233a] border border-slate-200 dark:border-white/5 flex items-start gap-3 transition-all duration-300 group block shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-gold-400/15 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 dark:text-gold-400">
                    Official Inquiries & Proposals
                  </span>
                  <p className="font-bold text-slate-900 dark:text-white text-xs mt-0.5 break-all">
                    {SITE_CONFIG.email}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    For corporate proposals, documentation audits & tenders.
                  </p>
                </div>
              </a>

              {/* Address Card */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#141b2d] border border-slate-200 dark:border-white/5 flex items-start gap-3 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-gold-400/15 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 dark:text-gold-400">
                    Central Office Base
                  </span>
                  <p className="text-xs text-slate-800 dark:text-white mt-0.5 leading-snug">
                    {SITE_CONFIG.officeAddress}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-500" />
                    <span>{SITE_CONFIG.workingHours}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl shadow-lg relative">
              {submitted ? (
                <div className="py-8 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                    Thank You! Your Enquiry Has Been Received.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Pankaj Foolwani or our senior advisory desk will review your details and connect with you shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 rounded-xl bg-gold-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-colors shadow-sm"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 dark:border-white/10 pb-3">
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                      Book a Private Consultation
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Complete this confidential brief to schedule your strategic session.
                    </p>
                  </div>

                  {/* Name and Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                        {t.contact.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#141b2d] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                        {t.contact.formPhone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98000 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#141b2d] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email and Service Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                        {t.contact.formEmail}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#141b2d] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                        {t.contact.formService}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#141b2d] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white dark:bg-[#141b2d] text-slate-900 dark:text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Meeting Mode */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Preferred Mode
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["WhatsApp", "Phone Call", "Office Visit"].map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setFormData({ ...formData, meetingMode: mode })}
                          className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                            formData.meetingMode === mode
                              ? "bg-gold-400 text-slate-950 border-gold-400 font-bold"
                              : "bg-slate-50 dark:bg-[#141b2d] border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you require guidance or assistance with..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#141b2d] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Dual Action Submit Buttons */}
                  <div className="pt-1 flex flex-col sm:flex-row items-center gap-2.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-md transition-all disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? "Submitting..." : t.contact.formSubmit}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="w-full sm:w-auto py-3 px-4 rounded-xl bg-emerald-50 dark:bg-[#101c15] hover:bg-emerald-100 dark:hover:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{t.contact.formWhatsAppSubmit}</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-gold-500" />
                    <span>{t.contact.privacyNote}</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
