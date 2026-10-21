import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Cpu,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  FileText,
  AlertCircle,
  Building,
  Target,
  Users,
  ArrowRight,
} from '@/components/ui/Icons';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'About Creatik AI | Technology Operations & Applied Training in Jaipur',
  description:
    'Learn about Creatik AI (operated under Creatik IT Solutions LLP), our engineering methodology, ethical content standards, and Jaipur operations.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative tech-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-4">
              <Building className="w-3.5 h-3.5" />
              <span>Company & Governance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Engineering Disciplined Digital Systems & Hands-On Technical Education
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              Creatik AI operates under <span className="text-slate-900 dark:text-white font-semibold">{siteConfig.legalName}</span> in Jaipur, Rajasthan. We bridge practical enterprise software engineering with transparent, project-first training.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white dark:bg-[#090E1A] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-6 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Core Mission</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                To replace fragile manual processes with resilient automation architectures for businesses, while simultaneously training aspiring software and AI engineers on actual production toolchains rather than superficial theory.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                By maintaining dual practices—software implementation for commercial clients and project laboratories for students—our educational curriculum remains continuously informed by real-world engineering constraints.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Commitment to Content Integrity</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                The modern AI training and agency market is saturated with unverified placement claims, manufactured client rosters, and inflated student counts.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                At Creatik AI, we maintain a strict policy of transparency: all advertised services reflect validated capabilities, curriculum modules are backed by real source repositories, and we publish no unverified superlatives or placement guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Facts & Verification Status */}
      <section id="standards" className="py-20 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Verified Facts & Operational Disclosures</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              In accordance with our content governance policy, the following table details verified organizational facts and items awaiting secondary documentation.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0B1222] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-white/10 font-semibold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="px-6 py-4">Data Point</th>
                    <th className="px-6 py-4">Status &amp; Verified Information</th>
                    <th className="px-6 py-4">Governance Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Operating Entity</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{siteConfig.legalName}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-xs">
                      Registered limited liability partnership operating under the brand &quot;Creatik AI&quot;.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Physical Location</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Jaipur, Rajasthan, India</span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-xs">
                      Gurjar Ki Thadi / Sultan Nagar, Gopalpura Bypass area. Specific room/floor details provided to registered attendees.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Official Contact</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{siteConfig.contact.officialEmail}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-xs">
                      Active and monitored by executive leadership. Support mailbox: {siteConfig.contact.supportEmail}.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Telephone / WhatsApp</td>
                    <td className="px-6 py-4 text-amber-600 dark:text-amber-400 flex items-center gap-1.5 font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Under Carrier KYC Verification</span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-xs">
                      Phone channels intentionally omitted from public landing pages until full verification completes.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Placement Guarantees</td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300 font-medium">
                      Exempt / Honest Skills Policy
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-xs">
                      We explicitly do not advertise &quot;100% placement guarantees&quot;. Training focus is on verifiable portfolio quality.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white dark:bg-[#090E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Have Questions About Our Operations or Programs?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our team is available to answer inquiries directly. We welcome technical audits of our training curriculum and business engineering methodology.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md shadow-sky-600/25"
            >
              <span>Connect With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
