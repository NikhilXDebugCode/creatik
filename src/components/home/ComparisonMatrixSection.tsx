import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  TrendingUp,
  Zap,
  MessageSquare,
  Sparkles,
} from '@/components/ui/Icons';
import Link from 'next/link';

export function ComparisonMatrixSection() {
  const principles = [
    {
      title: 'Practical Problem-Solving',
      desc: 'We focus on the specific operational bottlenecks in your business, building practical solutions that save hours of manual overhead each week.',
      icon: Cpu,
      highlight: 'Saves real time',
    },
    {
      title: 'Clear Project Scope',
      desc: 'Transparent deliverables, realistic timelines, and well-defined requirements so you have complete visibility without unexpected surprises.',
      icon: Layers,
      highlight: 'Full visibility',
    },
    {
      title: 'Thoughtful Implementation',
      desc: 'Clean, maintainable software and automation pipelines built on proven industry standards that your team can confidently rely on.',
      icon: ShieldCheck,
      highlight: 'Dependable quality',
    },
    {
      title: 'Testing & Reliability',
      desc: 'Every workflow and chatbot is validated through realistic test cases and error checks before it handles live customer communications.',
      icon: Zap,
      highlight: 'Verified before launch',
    },
    {
      title: 'Transparent Communication',
      desc: 'Clear explanations in straightforward language—no confusing technical buzzwords, unverified metrics, or manufactured claims.',
      icon: MessageSquare,
      highlight: 'Plain-language clarity',
    },
    {
      title: 'Measurable Outcomes',
      desc: 'Focused on tangible business improvements: faster lead responses, reduced clerical errors, and smoother daily operations.',
      icon: TrendingUp,
      highlight: 'Results you can see',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-[#080D1A] border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Approach &amp; Values</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Built on Engineering. Focused on Results.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
            We focus on practical solutions, thoughtful implementation, and clear communication—so businesses can understand what they are getting and why it matters.
          </p>
        </div>

        {/* 6-Card Visual Pillar Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 rounded-2xl p-5 sm:p-6 hover:border-sky-400 dark:hover:border-sky-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-white/5 flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Standard on every engagement</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 shadow-sm text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Interested in reviewing a specific project or workflow?
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Our team provides clear scoping and straightforward guidance for business solutions and training programs.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs sm:text-sm shadow-sm min-h-[44px] shrink-0 transition-colors"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
