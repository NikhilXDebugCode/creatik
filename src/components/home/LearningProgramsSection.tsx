import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  GraduationCap,
  Cpu,
  Code2,
  TrendingUp,
  Boxes,
  Terminal,
  Calendar,
  Layers,
  CheckCircle2,
} from '@/components/ui/Icons';
import { learningPrograms } from '@/data/learningPrograms';

export function LearningProgramsSection() {
  const iconMap: Record<string, React.ElementType> = {
    'ai-ml': Cpu,
    'full-stack': Code2,
    'digital-marketing': TrendingUp,
    robotics: Boxes,
  };

  const programImageMap: Record<string, string> = {
    'ai-ml': '/images/courses/course-ai-ml.png',
    'full-stack': '/images/courses/course-full-stack.png',
    robotics: '/images/courses/course-robotics.png',
    'digital-marketing': '/images/courses/course-digital-marketing.svg',
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#090E1A] border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Learn AI & Tech Academy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Practical Engineering Laboratories in Jaipur
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
              We focus strictly on production toolchains, real git commits, system architecture, and verifiable portfolio deliverables—not surface-level theory or generic certificates.
            </p>
          </div>

          <Link
            href="/learn-ai"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group shrink-0"
          >
            <span>Browse All 4 Training Tracks</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningPrograms.map((program) => {
            const Icon = iconMap[program.id] || Terminal;
            return (
              <div
                key={program.id}
                className="bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:border-emerald-400 dark:hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-[11px] text-slate-600 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Cohort Schedule on Inquiry</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {program.title}
                  </h3>

                  {programImageMap[program.id] && (
                    <div className="relative w-full h-44 rounded-xl overflow-hidden my-4 border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-slate-900/50">
                      <Image
                        src={programImageMap[program.id]}
                        alt={`${program.title} Curriculum Overview`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {program.shortDescription}
                  </p>

                  {/* Modules preview */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-200 dark:border-white/5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Curriculum Highlights:
                    </span>
                    {program.curriculumModules.slice(0, 3).map((mod) => (
                      <div key={mod.moduleNumber} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <span className="font-mono text-emerald-600 dark:text-emerald-400 shrink-0 font-bold">
                          {mod.moduleNumber}.
                        </span>
                        <span>{mod.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Capstone Projects */}
                  <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-xl p-4 mb-6">
                    <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-2">
                      Practical Lab Project Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {program.curriculumModules.slice(0, 2).map((mod, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{mod.handsOnProject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    <span>Format: </span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Hands-on Laboratory Cohort</span>
                  </div>

                  <Link
                    href={`/learn-ai/${program.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Full Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical disclaimer badge */}
        <div className="mt-12 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-xs text-slate-600 dark:text-slate-400">
            <strong className="text-slate-800 dark:text-slate-200">Ethical Training Disclosure:</strong> Creatik AI offers project-focused engineering training with evaluated portfolios. We intentionally do not publish unsubstantiated &ldquo;100% placement guarantees&rdquo; or fake employment metrics.
          </p>
        </div>
      </div>
    </section>
  );
}
