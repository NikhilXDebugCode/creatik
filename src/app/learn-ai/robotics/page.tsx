import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Boxes,
  ArrowRight,
  CheckCircle2,
  Terminal,
  BookOpen,
  Calendar,
  Layers,
  FolderGit2,
  Cpu,
  MapPin,
} from '@/components/ui/Icons';
import { learningPrograms } from '@/data/learningPrograms';
import { InquiryForm } from '@/components/forms/InquiryForm';

const program = learningPrograms.find((p) => p.slug === 'robotics')!;

export const metadata: Metadata = {
  title: 'Robotics & Edge AI Coaching in Jaipur',
  description:
    'Hardware-in-the-loop physical computing, ESP32 and Arduino firmware, sensor telemetry, and TinyML computer vision coaching in Jaipur by Creatik AI.',
  alternates: {
    canonical: '/learn-ai/robotics',
  },
};

export default function RoboticsPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative tech-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-4">
                <Boxes className="w-3.5 h-3.5" />
                <span>Physical Computing & Robotics Lab • Jaipur Hub</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {program.heroHeadline}
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
                {program.heroSubheadline}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#curriculum"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-md shadow-emerald-600/25"
                >
                  Inspect Hardware Curriculum
                </a>
                <a
                  href="#enroll"
                  className="px-6 py-3 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 font-medium text-sm transition-all shadow-sm"
                >
                  Request Laboratory Dates
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg bg-slate-100 dark:bg-[#0D1424] group">
                <Image
                  src="/images/courses/course-robotics.png"
                  alt="Physical Computing, ESP32 Microcontrollers & Robotics Workbench"
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-4">
                  <div className="text-xs text-white/95 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    ESP32 Firmware, Ultrasonic Telemetry & Autonomous Rover Chassis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Prerequisites */}
      <section className="py-16 bg-white dark:bg-[#090E1A] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Hands-On Engineering Capabilities</span>
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {program.learningOutcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <span>Prerequisites & Lab Safety Guidelines</span>
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {program.prerequisites.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 mt-2 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-1.5">
                {program.toolsCovered.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section id="curriculum" className="py-20 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Physical Computing Syllabus</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              From circuit schematics and breadboards to autonomous rovers and TinyML embedded neural inference.
            </p>
          </div>

          <div className="space-y-6">
            {program.curriculumModules.map((mod) => (
              <div
                key={mod.moduleNumber}
                className="bg-white dark:bg-[#0B1222] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:border-emerald-400 dark:hover:border-emerald-500/30 transition-all shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20 px-2.5 py-1 rounded">
                      Module {mod.moduleNumber}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{mod.title}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                      Core Hardware Topics:
                    </span>
                    <ul className="space-y-1.5">
                      {mod.topics.map((t, idx) => (
                        <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1.5">
                      <FolderGit2 className="w-4 h-4" />
                      <span>Bench Project Deliverable:</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{mod.handsOnProject}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Request Form */}
      <section id="enroll" className="py-20 bg-white dark:bg-[#090E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Request Jaipur Hardware Lab Slot
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Laboratory slots are capped at 12 students per cohort to ensure every learner has dedicated bench equipment and oscilloscopes.
            </p>
          </div>

          <InquiryForm
            initialAudience="learning"
            initialServiceId={program.title}
            sourcePage="Robotics Track Page"
          />
        </div>
      </section>
    </div>
  );
}
