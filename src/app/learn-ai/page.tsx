import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  ArrowRight,
  Cpu,
  Code2,
  TrendingUp,
  Boxes,
  Terminal,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Layers,
  MapPin,
} from '@/components/ui/Icons';
import { learningPrograms } from '@/data/learningPrograms';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Practical Tech & AI Training Programs in Jaipur',
  description:
    'Laboratory-based, project-driven engineering courses in Artificial Intelligence, Full-Stack Development, AI Digital Marketing, and Robotics in Jaipur, Rajasthan by Creatik AI.',
  alternates: {
    canonical: '/learn-ai',
  },
};

export default function LearnAIOverviewPage() {
  const iconMap: Record<string, React.ElementType> = {
    'ai-ml': Cpu,
    'full-stack': Code2,
    'digital-marketing': TrendingUp,
    robotics: Boxes,
  };

  return (
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-20">
      {/* Hero Header */}
      <section className="py-12 sm:py-16 md:py-24 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative tech-grid-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-3 sm:mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Technical Training Academy • Jaipur, Rajasthan</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Master Practical Engineering Through Hands-On Projects
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed">
              We believe in learning by doing. Our training is built around practical projects, real code repositories, industry tools, and dedicated laboratory coaching in Jaipur.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#tracks-list"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20 min-h-[44px]"
              >
                <span>Browse All 4 Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 font-medium text-xs sm:text-sm transition-all shadow-sm min-h-[44px]"
              >
                <span>Request Syllabus &amp; Cohort Dates</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Educational Philosophy */}
      <section className="py-16 bg-white dark:bg-[#090E1A] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 shadow-sm">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Production Toolchains</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Work in professional developer environments: Git, GitHub pull requests, Docker containers, VS Code, and cloud staging endpoints.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Verifiable Portfolios</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Graduate with deployed, live applications and verified GitHub repositories that showcase your architecture decisions directly to hiring teams.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 shadow-sm">
                <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Jaipur Laboratory</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                In-person workshop and physical computing hardware kits for robotics in Jaipur, combined with structured cohort discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tracks Grid */}
      <section id="tracks-list" className="py-20 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Specialized Training Tracks
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Select a specialized track to examine the complete module-by-module breakdown and hands-on capstone project specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPrograms.map((program) => {
              const Icon = iconMap[program.id] || Terminal;
              return (
                <div
                  key={program.id}
                  className="bg-white dark:bg-[#0B1222] border border-slate-200 dark:border-white/10 rounded-2xl p-8 hover:border-emerald-400 dark:hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-sm hover:shadow-md dark:shadow-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-[11px] text-slate-600 dark:text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Schedule on Request</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{program.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {program.shortDescription}
                    </p>

                    <div className="space-y-3 mb-6 pt-4 border-t border-slate-200 dark:border-white/5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Curriculum Modules:
                      </span>
                      {program.curriculumModules.map((m) => (
                        <div key={m.moduleNumber} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold shrink-0">
                            {m.moduleNumber}.
                          </span>
                          <span>{m.title}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {program.toolsCovered.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/5 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <Link
                      href={`/learn-ai/${program.slug}`}
                      className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 inline-flex items-center gap-1.5"
                    >
                      <span>Explore Detailed Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/contact?program=${encodeURIComponent(program.title)}`}
                      className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3.5 py-2 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
                    >
                      Inquire for Batch
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admissions & Counseling Form */}
      <section id="admissions" className="py-20 bg-white dark:bg-[#090E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Request Verified Syllabus & Cohort Schedule
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Our academic counselors provide transparent details regarding class timings, project reviews, and prerequisites.
            </p>
          </div>

          <InquiryForm initialAudience="learning" sourcePage="Learn AI Overview Page" />
        </div>
      </section>
    </div>
  );
}
