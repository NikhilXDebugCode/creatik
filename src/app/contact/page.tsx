import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  AlertCircle,
  MessageSquare,
  HelpCircle,
} from '@/components/ui/Icons';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Contact & Consultation Inquiries | Creatik AI Jaipur',
  description:
    'Direct communication channels for enterprise AI workflow scoping and technical training admissions in Jaipur, Rajasthan with Creatik AI.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative tech-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct Communication</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Connect With Our Systems &amp; Admissions Team
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              We respond promptly to business inquiries regarding software architecture, n8n automations, and RAG chatbots, as well as student admissions for our practical training cohorts in Jaipur.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-20 bg-white dark:bg-[#090E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Card Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Verified Communication Channels</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Official Direct Email
                      </span>
                      <a
                        href={`mailto:${siteConfig.contact.officialEmail}`}
                        className="text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                      >
                        {siteConfig.contact.officialEmail}
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Secondary / Support: {siteConfig.contact.supportEmail}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200 dark:border-white/5">
                    <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 shadow-sm">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Office &amp; Laboratory Hub
                      </span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {siteConfig.location.city}, {siteConfig.location.state}, {siteConfig.location.country}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        {siteConfig.location.landmark}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Operating under {siteConfig.legalName}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200 dark:border-white/5">
                    <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 shadow-sm">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Operating Hours &amp; Turnaround
                      </span>
                      <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                        Monday to Saturday: 10:00 AM – 7:00 PM IST
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Inquiries received outside business hours are logged immediately and reviewed next business day.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Telephone disclosure */}
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-xs text-amber-800 dark:text-amber-300/90 leading-relaxed flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                  <span>
                    <strong>Carrier Verification Notice:</strong> Voice &amp; WhatsApp hotlines are temporarily held offline pending carrier registration checks. Please submit your inquiry through the encrypted form or email.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="text-slate-500 dark:text-slate-400 text-sm p-8">Loading inquiry form...</div>}>
                <InquiryForm sourcePage="Dedicated Contact Route" />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
