import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from '@/components/ui/Icons';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy | Creatik AI',
  description:
    'Our privacy commitment, data processing guidelines, and storage practices for business and training inquiries.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Data Governance &amp; Privacy</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-10">
          Last revised: October 2026 • Governed under the laws of Rajasthan, India
        </p>

        <div className="space-y-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Introduction &amp; Operating Entity</h2>
            <p>
              This Privacy Policy explains how <strong>{siteConfig.legalName}</strong> (doing business as <strong>{siteConfig.name}</strong>, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and safeguards information obtained from visitors, prospective business clients, and students using our website (<code>https://creatikai.com</code>).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily transmit through our inquiry and scoping forms:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
              <li>Contact details: Name, email address, optional contact telephone number.</li>
              <li>Professional context: Company name, organization, university affiliation, or current job title.</li>
              <li>Inquiry parameters: Service track of interest, estimated timeline, and custom project requirements.</li>
            </ul>
            <p>
              We do <strong>not</strong> collect sensitive biometric data, financial payment credentials, or government ID numbers via our public website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. How We Use Your Information</h2>
            <p>Collected information is utilized strictly for legitimate business and educational operations:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
              <li>To evaluate project feasibility and prepare commercial proposals for business clients.</li>
              <li>To provide prospective learners with verified syllabus documentation, batch schedules, and fee details.</li>
              <li>To maintain audit logging of communication requests to prevent abuse and spam.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. No Sale or Commercial Brokering of Personal Data</h2>
            <p>
              We adhere to strict data sovereignty. We <strong>never</strong> sell, rent, monetize, or broker your personal information to third-party ad networks, marketing brokers, or external call centers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Cookies and Web Analytics</h2>
            <p>
              Our website uses lightweight, performance-conscious session cookies and privacy-respecting analytics to gauge page load times, layout responsiveness, and Core Web Vitals health. You can disable cookies at any time through your browser configuration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. Inquiries and Deletion Requests</h2>
            <p>
              If you wish to review, update, or request the deletion of your inquiry records from our system, please send a written request to our designated data contact:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 text-xs shadow-sm">
              <p className="font-semibold text-slate-900 dark:text-white">{siteConfig.legalName} — Privacy Compliance</p>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Email: {siteConfig.contact.officialEmail}</p>
              <p className="text-slate-600 dark:text-slate-400">Location: {siteConfig.location.city}, {siteConfig.location.state}, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
