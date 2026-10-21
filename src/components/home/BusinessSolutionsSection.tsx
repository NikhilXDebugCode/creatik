import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  Sparkles,
  Bot,
  Globe,
  Search,
  Check,
  Zap,
} from '@/components/ui/Icons';
import { businessServices } from '@/data/businessServices';

export function BusinessSolutionsSection() {
  const iconMap: Record<string, React.ElementType> = {
    'ai-automation': Sparkles,
    'ai-chatbots': Bot,
    'web-development': Globe,
    seo: Search,
  };

  const serviceImageMap: Record<string, string> = {
    'ai-automation': '/images/services/service-ai-automation.png',
    'ai-chatbots': '/images/services/service-ai-chatbots.png',
    'web-development': '/images/services/service-web-development.png',
    seo: '/images/services/service-seo.png',
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>For Business & Operations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Practical Technology Solutions for Growing Businesses
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
              We help businesses automate repetitive tasks, assist customers around the clock, and build fast, modern websites.
            </p>
          </div>

          <Link
            href="/business"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group shrink-0 min-h-[44px]"
          >
            <span>Explore All Business Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2x2 Clean Corporate Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {businessServices.map((service) => {
            const Icon = iconMap[service.id] || Zap;
            return (
              <div
                key={service.id}
                className="bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-sky-400 dark:hover:border-sky-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider px-2.5 py-1 rounded bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      Production Stack
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>

                  {serviceImageMap[service.id] && (
                    <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden my-4 border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-slate-900/50">
                      <Image
                        src={serviceImageMap[service.id]}
                        alt={`${service.title} Architecture Overview`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Solved challenges preview */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-200 dark:border-white/5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Core Problems Solved:
                    </span>
                    {service.keyChallenges.slice(0, 2).map((challenge, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Deliverables */}
                  <div className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-xl p-3.5 sm:p-4 mb-6">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                      Key Deliverables &amp; Benefits:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                      {service.deliverables.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    <span>Setup: </span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Your Private Cloud or Managed</span>
                  </div>

                  <Link
                    href={`/business/${service.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-1.5 py-2.5 px-3.5 rounded-xl bg-sky-50 dark:bg-sky-500/10 sm:bg-transparent text-xs font-semibold text-sky-700 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 min-h-[44px] transition-colors"
                  >
                    <span>Explore Solution Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
