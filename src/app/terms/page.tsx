import React from 'react';
import type { Metadata } from 'next';
import { FileText, ShieldCheck, CheckCircle2 } from '@/components/ui/Icons';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Terms of Service | Creatik AI',
  description:
    'Terms of service, intellectual property guidelines, and project agreement policies for Creatik AI.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-4">
          <FileText className="w-3.5 h-3.5" />
          <span>Legal Agreement</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-10">
          Last revised: October 2026 • Governed under the jurisdiction of courts in Jaipur, Rajasthan
        </p>

        <div className="space-y-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of <strong>{siteConfig.legalName}</strong> (&quot;Creatik AI&quot;, &quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you should discontinue use of the website immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Scope of Commercial &amp; Training Engagements</h2>
            <p>
              The content presented on this website is for informational and technical scoping purposes. Official business software implementations, consulting engagements, and student enrollments are governed by separate, formally executed written Master Services Agreements (MSAs), Statements of Work (SOWs), or Student Admission Enrollment agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Intellectual Property Rights</h2>
            <p>
              All branding elements, technical documentation, architectural diagrams, curriculum outlines, and proprietary text published on this website are the intellectual property of Creatik IT Solutions LLP. No portion may be reproduced, scraped, or republished without prior written authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. No Employment or Placement Guarantees</h2>
            <p>
              Creatik AI provides rigorous, practical engineering education and career portfolio mentorship. We do <strong>not</strong> make representations of guaranteed placement, automated job offers, or unconditional hiring warranties. Career outcomes depend entirely on individual student diligence, academic merit, portfolio execution, and employer hiring criteria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Limitation of Liability</h2>
            <p>
              Under no circumstances shall Creatik IT Solutions LLP or its partners be held liable for any indirect, incidental, or consequential damages arising out of the use or inability to use materials on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. Contact for Legal Communications</h2>
            <p>
              For any legal or contractual inquiries, please contact our legal operations desk:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 text-xs shadow-sm">
              <p className="font-semibold text-slate-900 dark:text-white">{siteConfig.legalName}</p>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Email: {siteConfig.contact.officialEmail}</p>
              <p className="text-slate-600 dark:text-slate-400">Jurisdiction: Jaipur, Rajasthan, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
