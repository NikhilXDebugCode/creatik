import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  Layers,
  Sparkles,
  Bot,
  Globe,
  GraduationCap,
} from '@/components/ui/Icons';
import { insightsArticles } from '@/data/insightsData';

export const metadata: Metadata = {
  title: 'Insights, Architectural Analyses & Engineering Guides',
  description:
    'In-depth technical articles on enterprise workflow automation (n8n), RAG hallucination suppression, Next.js performance, and applied AI careers by Creatik AI.',
  alternates: {
    canonical: '/insights',
  },
};

export default function InsightsPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative tech-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Publications &amp; Research</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Engineering Notes, System Benchmarks &amp; Architecture Breakdowns
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              Written by our practicing software engineers and laboratory mentors in Jaipur. Practical insights on real-world workflow orchestration, retrieval systems, and full-stack performance.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white dark:bg-[#090E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insightsArticles.map((art) => (
              <article
                key={art.slug}
                className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:border-sky-400 dark:hover:border-sky-500/30 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs mb-4">
                    <span className="px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-700 dark:text-sky-300 font-medium">
                      {art.category}
                    </span>
                    <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-[11px]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {art.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {art.readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors leading-snug">
                    <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {art.excerpt}
                  </p>

                  <div className="space-y-1.5 mb-6 pt-4 border-t border-slate-200 dark:border-white/5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      Key Takeaway:
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                      &quot;{art.keyTakeaways[0]}&quot;
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-slate-300 font-medium">{art.author.name}</span> • {art.author.role}
                  </div>

                  <Link
                    href={`/insights/${art.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
