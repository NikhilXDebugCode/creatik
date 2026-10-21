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
  Terminal,
  Zap,
  ArrowRight,
  Database,
  Lock,
} from '@/components/ui/Icons';
import { WorkflowCanvas } from './WorkflowCanvas';

export function HeroInteractivePreview() {
  const [tab, setTab] = useState<'workflow' | 'rag' | 'web' | 'robotics'>('workflow');

  return (
    <div className="w-full mt-8 sm:mt-10">
      {/* Tab controls - Horizontal swipe on mobile, centered flex on larger screens */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          onClick={() => setTab('workflow')}
          className={`flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border shrink-0 min-h-[44px] ${
            tab === 'workflow'
              ? 'bg-sky-600 text-white border-sky-500 shadow-md shadow-sky-600/20'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:bg-[#0B1222] dark:text-slate-300 dark:border-white/10 dark:hover:border-white/20'
          }`}
        >
          <Workflow className="w-4 h-4" />
          <span>n8n Workflow Canvas</span>
        </button>

        <button
          onClick={() => setTab('rag')}
          className={`flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border shrink-0 min-h-[44px] ${
            tab === 'rag'
              ? 'bg-sky-600 text-white border-sky-500 shadow-md shadow-sky-600/20'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:bg-[#0B1222] dark:text-slate-300 dark:border-white/10 dark:hover:border-white/20'
          }`}
        >
          <Bot className="w-4 h-4" />
          <span>RAG Agent with Citations</span>
        </button>

        <button
          onClick={() => setTab('web')}
          className={`flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border shrink-0 min-h-[44px] ${
            tab === 'web'
              ? 'bg-sky-600 text-white border-sky-500 shadow-md shadow-sky-600/20'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:bg-[#0B1222] dark:text-slate-300 dark:border-white/10 dark:hover:border-white/20'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>Next.js Full-Stack Stack</span>
        </button>

        <button
          onClick={() => setTab('robotics')}
          className={`flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border shrink-0 min-h-[44px] ${
            tab === 'robotics'
              ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/20'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:bg-[#0B1222] dark:text-slate-300 dark:border-white/10 dark:hover:border-white/20'
          }`}
        >
          <Boxes className="w-4 h-4" />
          <span>Jaipur Robotics Laboratory</span>
        </button>
      </div>

      {/* Dynamic Tab Content */}
      <div className="transition-all">
        {tab === 'workflow' && <WorkflowCanvas />}

        {tab === 'rag' && (
          <div className="bg-white dark:bg-[#0A101D] border border-slate-200 dark:border-sky-500/30 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl">
            <div className="bg-slate-50 dark:bg-[#0F172A] px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-slate-200 dark:border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono text-slate-900 dark:text-slate-200 font-semibold truncate">
                  Grounded Enterprise RAG Assistant
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-sky-700 bg-sky-50 border border-sky-200 dark:text-sky-400 dark:bg-sky-500/10 dark:border-sky-500/20 px-2 py-0.5 rounded shrink-0">
                Hallucination Guardrails: Active
              </span>
            </div>

            <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Interactive Chat Stream */}
              <div className="lg:col-span-7 space-y-3.5">
                {/* User Message */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-sky-50 border border-sky-200 dark:bg-sky-600/30 dark:border-sky-500/40 rounded-2xl rounded-tr-sm p-3.5 text-xs text-slate-900 dark:text-white max-w-sm">
                    &quot;Can we deploy your n8n workflows and RAG chatbots on our private AWS account under Indian data sovereignty regulations?&quot;
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-xs text-slate-800 dark:text-white font-bold shrink-0">
                    U
                  </div>
                </div>

                {/* AI Grounded Response */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-sky-600 flex items-center justify-center text-xs text-white font-bold shrink-0">
                    AI
                  </div>
                  <div className="bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10 rounded-2xl rounded-tl-sm p-4 text-xs text-slate-800 dark:text-slate-200 max-w-lg space-y-2.5">
                    <p className="leading-relaxed">
                      Yes. All Creatik AI business implementations support <strong>sovereign deployment</strong>. We can containerize your n8n instances and pgvector databases directly within your private AWS VPC (Mumbai region ap-south-1) with KMS customer-managed encryption.
                    </p>
                    <div className="p-2.5 rounded-lg bg-sky-100/70 border border-sky-300 dark:bg-sky-500/10 dark:border-sky-500/20 text-[11px] text-sky-900 dark:text-sky-300">
                      <span className="font-semibold block mb-0.5">Verified Citation:</span>
                      <span>SOP-SEC-2026: Sovereign Deployment Architecture Guide (Creatik IT Solutions LLP)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RAG Verification Breakdown */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-[#080D18] border border-slate-200 dark:border-white/10 rounded-xl p-4 space-y-3 text-xs">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block border-b border-slate-200 dark:border-white/5 pb-2">
                  Retrieval Verification Pipeline
                </span>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-slate-700 dark:text-slate-300 text-[11px]">
                    <span>Dense Vector Similarity (BGE-M3):</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">0.912</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 dark:text-slate-300 text-[11px]">
                    <span>BM25 Keyword Alignment:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">0.884</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 dark:text-slate-300 text-[11px]">
                    <span>Guardrail Refusal Threshold:</span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono">&gt; 0.750</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Deterministic boundaries: Out-of-scope prompts trigger refusal rather than false claims.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'web' && (
          <div className="bg-white dark:bg-[#0A101D] border border-slate-200 dark:border-sky-500/30 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-white/10 gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <span>Next.js Modern Architecture Topology</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Server Components, TypeScript type-safety, and database normalization with 95+ Core Web Vitals.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400 font-mono text-xs shrink-0">
                Lighthouse Score: 98/100
              </span>
            </div>

            <div className="relative w-full h-48 sm:h-60 rounded-xl overflow-hidden my-5 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
              <Image
                src="/images/services/service-web-development.png"
                alt="Next.js Full-Stack Architecture Topology"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-sky-600 dark:text-sky-400 font-mono font-bold block mb-1">01. Frontend Layer</span>
                <p className="text-slate-600 dark:text-slate-300">Next.js App Router, React 19 Server Components, zero layout shift (CLS: 0.00), responsive styling.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-sky-600 dark:text-sky-400 font-mono font-bold block mb-1">02. Edge & API Layer</span>
                <p className="text-slate-600 dark:text-slate-300">FastAPI & Next.js Server Actions, authenticated route handlers, automated rate-limiting, and webhook queuing.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-sky-600 dark:text-sky-400 font-mono font-bold block mb-1">03. Persistence Layer</span>
                <p className="text-slate-600 dark:text-slate-300">PostgreSQL with pgvector embeddings, Redis session cache, automated encrypted backups, and audit logs.</p>
              </div>
            </div>
          </div>
        )}

        {tab === 'robotics' && (
          <div className="bg-white dark:bg-[#0A101D] border border-slate-200 dark:border-emerald-500/30 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-white/10 gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Boxes className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Physical Computing & Edge AI Laboratory (Jaipur Hub)</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Hands-on laboratory coaching in Gurjar Ki Thadi / Gopalpura Bypass with physical hardware stations.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400 font-mono text-xs shrink-0">
                Jaipur Laboratory Cohort
              </span>
            </div>

            <div className="relative w-full h-48 sm:h-60 rounded-xl overflow-hidden my-5 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
              <Image
                src="/images/courses/course-robotics.png"
                alt="Jaipur Robotics Workbench & Microcontrollers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold block mb-1">Microcontroller Workbenches</span>
                <p className="text-slate-600 dark:text-slate-300">ESP32, Arduino Uno, Raspberry Pi 4, digital breadboards, dual-channel oscilloscopes, and logic analyzers.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold block mb-1">Sensor & Telemetry Kits</span>
                <p className="text-slate-600 dark:text-slate-300">Ultrasonic rangefinders, IMU 6-DOF gyro/accelerometer, ESP32-CAM computer vision, and MQTT brokers.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10">
                <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold block mb-1">TinyML Edge Inference</span>
                <p className="text-slate-600 dark:text-slate-300">On-device neural network quantization for gesture recognition and audio classification without cloud latency.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
