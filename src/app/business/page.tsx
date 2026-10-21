import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Briefcase,
  ArrowRight,
  Sparkles,
  Bot,
  Globe,
  Search,
  CheckCircle2,
  ShieldCheck,
  Server,
  Zap,
} from '@/components/ui/Icons';
import { businessServices } from '@/data/businessServices';
import { InquiryForm } from '@/components/forms/InquiryForm';

export const metadata: Metadata = {
  title: 'Business Solutions & Enterprise AI Systems',
  description:
    'Custom AI automation pipelines, self-hosted n8n workflows, domain-trained RAG chatbots, modern Next.js web systems, and technical SEO architecture by Creatik AI.',
  alternates: {
    canonical: '/business',
  },
};

export default function BusinessOverviewPage() {
  const iconMap: Record<string, React.ElementType> = {
    'ai-automation': Sparkles,
    'ai-chatbots': Bot,
    'web-development': Globe,
    seo: Search,
  };

  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative overflow-hidden tech-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>For Enterprise & High-Growth Organizations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Engineering AI Systems That Eliminate Operational Bottlenecks
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              We design, build, and support sovereign workflow orchestrations, context-aware AI agents, and high-performance digital platforms tailored to your company&apos;s data security and performance requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services-list"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md shadow-sky-600/20"
              >
                <span>Browse Business Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 font-medium text-sm transition-all shadow-sm"
              >
                <span>Request Technical Scoping</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section id="services-list" className="py-20 bg-white dark:bg-[#090E1A] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Verified Business Service Offerings
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Every service is delivered with complete source code handoff, sovereign hosting capabilities, and full architectural documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessServices.map((service) => {
              const Icon = iconMap[service.id] || Zap;
              return (
                <div
                  key={service.id}
                  className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-8 hover:border-sky-400 dark:hover:border-sky-500/30 transition-all flex flex-col justify-between shadow-sm hover:shadow-md dark:shadow-none"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-6 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-3 mb-6 pt-4 border-t border-slate-200 dark:border-white/5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Typical Client Challenges:
                      </span>
                      {service.keyChallenges.slice(0, 3).map((ch, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.integrations.map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <Link
                      href={`/business/${service.slug}`}
                      className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 inline-flex items-center gap-1.5"
                    >
                      <span>Full Technical Specification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3.5 py-2 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
                    >
                      Scope Project
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation & Scoping Form */}
      <section id="consultation" className="py-20 bg-slate-50 dark:bg-[#070B14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Initiate a Technical Discovery Consultation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Share your existing software stack and target automations. We will review your architecture and return a concrete feasibility breakdown within 24 hours.
            </p>
          </div>

          <InquiryForm initialAudience="business" sourcePage="Business Overview Page" />
        </div>
      </section>
    </div>
  );
}
