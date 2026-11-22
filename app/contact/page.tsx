"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="flex-1 bg-slate-50 dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <PageHeader
        breadcrumb="Contact"
        badge="Executive Desk & Consultation"
        title="Start a Direct Conversation with Pankaj Foolwani"
        subtitle="The fastest channel to connect is via WhatsApp. You can also call directly or submit your detailed project brief below for senior-level review."
      />

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      <Footer />
    </main>
  );
}
