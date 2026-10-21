import React from 'react';
import {
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  AlertCircle,
  MessageSquare,
} from '@/components/ui/Icons';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { siteConfig } from '@/data/siteConfig';

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-slate-50 dark:bg-[#090E1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Context & Details */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact & Discovery</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Let&apos;s Discuss Your Architecture or Training Goals
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you are an enterprise team seeking to automate complex workflows or an aspiring developer looking to master applied AI in Jaipur, we provide direct technical alignment.
            </p>

            {/* Verified contact boxes */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-[#0B1222] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Verified Official Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.officialEmail}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                  >
                    {siteConfig.contact.officialEmail}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    General inquiries: {siteConfig.contact.supportEmail}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-[#0B1222] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Registered Lab & Office Location
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {siteConfig.location.landmark}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {siteConfig.location.city}, {siteConfig.location.state}, {siteConfig.location.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-[#0B1222] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Operating Hours
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    Monday to Saturday: 10:00 AM – 7:00 PM IST
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Response time: 1 business day for all validated requests.
                  </p>
                </div>
              </div>
            </div>

            {/* Entity legal notice */}
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <p>
                <strong>Legal Entity:</strong> {siteConfig.legalName}
              </p>
              <p>
                <strong>ROC Registration:</strong> Ministry of Corporate Affairs, Registrar of Companies, Jaipur.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <InquiryForm sourcePage="Homepage Contact Section" />
          </div>
        </div>
      </div>
    </section>
  );
}
