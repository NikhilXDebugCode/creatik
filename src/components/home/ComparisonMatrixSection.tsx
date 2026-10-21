import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  X,
  AlertCircle,
  Cpu,
  Layers,
  ArrowRight,
} from '@/components/ui/Icons';
import Link from 'next/link';

export function ComparisonMatrixSection() {
  const criteria = [
    {
      feature: 'Delivery & Deployment Model',
      generic: 'Closed third-party SaaS dependency; fragile no-code setups with recurring per-step markups.',
      creatik: 'Sovereign self-hosted deployment (n8n/PostgreSQL on your VPC). Complete source code ownership and documentation.',
    },
    {
      feature: 'AI Chatbot Reliability & Guardrails',
      generic: 'Generic ChatGPT prompts with high hallucination rates and no source verification.',
      creatik: 'Enterprise RAG pipelines with dense/sparse vector retrieval, confidence thresholds, and verified document citations.',
    },
    {
      feature: 'Educational Philosophy & Curriculum',
      generic: 'Passive video courses with automated quizzes and unverified "100% placement" advertising promises.',
      creatik: 'Physical laboratory workshops in Jaipur, evaluated pull request code reviews, production tools, and verified GitHub portfolios.',
    },
    {
      feature: 'Transparency & Claims Integrity',
      generic: 'Fabricated 5-star badges, unsubstantiated "#1" claims, and unverified partner logos.',
      creatik: 'Honest, verifiable scopes. Transparent fee disclosures, carrier KYC notices, and clear operational governance.',
    },
    {
      feature: 'Hardware & Edge AI Capabilities',
      generic: 'Purely software-only web tutorials with zero physical computing or IoT experience.',
      creatik: 'Dedicated physical lab kits in Jaipur: ESP32 microcontrollers, sensor telemetry, and on-device TinyML edge models.',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#080D1A] border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest Architectural Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Engineering Rigor Beats Marketing Hype
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            We reject the industry pattern of inflated placement claims and fragile AI wrappers. Here is how our operational engineering standards compare directly.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0E172B]">
                  <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px] w-1/4">
                    Evaluation Dimension
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider text-[11px] w-3/8 bg-rose-500/5">
                    Typical Agencies &amp; Theory Institutes
                  </th>
                  <th className="px-6 py-4 font-semibold text-sky-800 dark:text-sky-300 uppercase tracking-wider text-[11px] w-3/8 bg-sky-50 dark:bg-sky-500/10 border-l border-slate-200 dark:border-sky-500/20">
                    Creatik AI Standards
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                {criteria.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-100/50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white align-top">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 bg-rose-50/30 dark:bg-rose-500/[0.02] align-top leading-relaxed">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{item.generic}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-900 dark:text-slate-200 bg-sky-50/40 dark:bg-sky-500/[0.04] border-l border-slate-200 dark:border-sky-500/20 align-top leading-relaxed font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item.creatik}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Have questions about how we ensure zero hallucination or host workflows in your cloud?
            </p>
          </div>
          <Link
            href="/contact?intent=business"
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 shrink-0"
          >
            <span>Request Technical Architecture Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
