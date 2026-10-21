'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Workflow,
  Bot,
  Globe,
  Boxes,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
  Sparkles,
  Search,
} from '@/components/ui/Icons';
import { WorkflowCanvas } from './WorkflowCanvas';

export function HeroInteractivePreview() {
  const [tab, setTab] = useState<'workflow' | 'rag' | 'web' | 'robotics'>('workflow');

  const tabItems = [
    {
      id: 'workflow' as const,
      label: 'Automated Workflows',
      icon: Workflow,
      badge: 'Business',
      color: 'sky',
    },
    {
      id: 'rag' as const,
      label: 'AI Assistants',
      icon: Bot,
      badge: 'Business',
      color: 'sky',
    },
    {
      id: 'web' as const,
      label: 'Web Applications',
      icon: Globe,
      badge: 'Solutions',
      color: 'sky',
    },
    {
      id: 'robotics' as const,
      label: 'Robotics Lab',
      icon: Boxes,
      badge: 'Training',
      color: 'emerald',
    },
  ];

  return (
    <div className="w-full mt-6 sm:mt-10">
      {/* Tab controls - 2x2 grid on mobile for perfect fit without horizontal overflow; flex row on tablet/desktop */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-5">
        {tabItems.map((item) => {
          const Icon = item.icon;
          const isActive = tab === item.id;
          const isEmerald = item.color === 'emerald';

          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              type="button"
              className={`flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border min-h-[44px] ${
                isActive
                  ? isEmerald
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/25 ring-1 ring-emerald-400/30'
                    : 'bg-sky-600 text-white border-sky-500 shadow-md shadow-sky-600/25 ring-1 ring-sky-400/30'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 dark:bg-[#0B1222] dark:text-slate-300 dark:border-white/10 dark:hover:border-white/20'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Tab Content */}
      <div className="transition-all">
        {tab === 'workflow' && <WorkflowCanvas />}

        {tab === 'rag' && (
          <div className="bg-white dark:bg-[#0A101D] border border-slate-200 dark:border-sky-500/30 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl">
            {/* Top Bar */}
            <div className="bg-slate-100 dark:bg-[#0F172A] px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-slate-200 dark:border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                  AI Assistant for Customer Support &amp; Inquiries
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-sky-700 bg-sky-50 border border-sky-200 dark:text-sky-400 dark:bg-sky-500/10 dark:border-sky-500/20 px-2.5 py-0.5 rounded shrink-0">
                Grounded in Verified Documents
              </span>
            </div>

            <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Interactive Chat Stream */}
              <div className="lg:col-span-7 space-y-3.5">
                {/* User Message */}
                <div className="flex items-start gap-2.5 sm:gap-3 justify-end">
                  <div className="bg-sky-50 border border-sky-200 dark:bg-sky-600/30 dark:border-sky-500/40 rounded-2xl rounded-tr-sm p-3.5 text-xs text-slate-900 dark:text-white max-w-sm">
                    &quot;Can your team set up automated workflows that connect our website inquiries directly to our internal CRM?&quot;
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-xs text-slate-800 dark:text-white font-bold shrink-0">
                    U
                  </div>
                </div>

                {/* AI Grounded Response */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 rounded-full bg-sky-600 flex items-center justify-center text-xs text-white font-bold shrink-0">
                    AI
                  </div>
                  <div className="bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10 rounded-2xl rounded-tl-sm p-4 text-xs text-slate-800 dark:text-slate-200 max-w-lg space-y-2.5">
                    <p className="leading-relaxed">
                      Yes. We build automated workflow pipelines that capture leads, validate contact information, create records in your CRM, and notify your team instantly on Slack or email within seconds.
                    </p>
                    <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Answers are drawn strictly from your approved company materials to avoid false claims.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Benefits Card */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-[#080D18] border border-slate-200 dark:border-white/10 rounded-xl p-4 sm:p-5 space-y-3.5 text-xs shadow-sm">
                <span className="text-xs font-bold text-slate-900 dark:text-white block border-b border-slate-200 dark:border-white/5 pb-2">
                  Why Businesses Use AI Assistants
                </span>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white block">24/7 Availability:</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-0.5">Instant responses to customer inquiries at any hour of the day.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white block">Accurate &amp; Consistent:</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-0.5">Trained strictly on your verified price lists, FAQs, and service guidelines.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white block">Smooth Human Handoff:</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-0.5">Complex inquiries are routed directly to the right specialist on your team.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>Channel: Website &amp; WhatsApp</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Safe &amp; Controlled</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'web' && (
          <div className="bg-white dark:bg-[#0A101D] border border-slate-200 dark:border-sky-500/30 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 dark:border-white/10 gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Fast, Modern Websites Built for Real Results</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Designed to look professional, load instantly across mobile devices, and convert visitors into inquiries.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400 font-medium text-xs self-start sm:self-auto shrink-0">
                Mobile-Optimized Speed
              </span>
            </div>

            <div className="relative w-full h-44 sm:h-56 rounded-xl overflow-hidden my-5 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
              <Image
                src="/images/services/service-web-development.png"
                alt="Responsive Web Application Layout"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-sky-600 dark:text-sky-400 font-bold block mb-1">01. Mobile Performance</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Fast loading times on phones and tablets to reduce bounce rates and improve Google rankings.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-sky-600 dark:text-sky-400 font-bold block mb-1">02. Clear Visitor Experience</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Clean typography, thoughtful navigation, and high visual contrast across light and dark modes.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-sky-600 dark:text-sky-400 font-bold block mb-1">03. High Conversion Focus</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Frictionless inquiry forms, transparent service descriptions, and prominent call-to-action buttons.</p>
              </div>
            </div>
          </div>
        )}

        {tab === 'robotics' && (
          <div className="bg-white dark:bg-[#0A101D] border border-slate-200 dark:border-emerald-500/30 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 dark:border-white/10 gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Boxes className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Hands-On Robotics &amp; Engineering Lab (Jaipur Hub)</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  In-person practical training with real microcontrollers and hardware workstations in Jaipur.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400 font-medium text-xs self-start sm:self-auto shrink-0">
                Physical Lab Coaching
              </span>
            </div>

            <div className="relative w-full h-44 sm:h-56 rounded-xl overflow-hidden my-5 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
              <Image
                src="/images/courses/course-robotics.png"
                alt="Jaipur Robotics Workbench & Microcontrollers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Real Hardware Workbenches</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Dedicated electronics stations equipped with ESP32, Arduino, sensors, and testing equipment.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Project-Based Learning</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Build complete autonomous rover prototypes and sensor controllers rather than just watching theory slides.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Small Cohort Mentorship</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Personal guidance by practicing engineers who build and debug real physical systems.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
