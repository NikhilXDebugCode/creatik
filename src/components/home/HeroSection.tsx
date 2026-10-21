'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from '@/components/ui/Icons';
import { HeroInteractivePreview } from '@/components/visuals/HeroInteractivePreview';
import { Modal } from '@/components/ui/Modal';
import { InquiryForm } from '@/components/forms/InquiryForm';

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTrack, setModalTrack] = useState<'business' | 'learning'>('business');

  const openConsultation = (track: 'business' | 'learning') => {
    setModalTrack(track);
    setIsModalOpen(true);
  };

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden tech-grid-pattern border-b border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#070B14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-blue-500/5 to-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top verified badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 shadow-sm text-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white">Creatik AI</span>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <span className="text-slate-600 dark:text-slate-400">Jaipur</span>
            <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">•</span>
            <span className="text-sky-700 dark:text-sky-400 font-medium hidden sm:inline">Applied Technology &amp; Training</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.14]">
            Applied Intelligence for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400">
              Modern Businesses
            </span>{' '}
            &amp; Aspiring Engineers.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We architect resilient automation workflows, domain-trained AI agents, and high-performance web systems—while equipping engineers with hands-on technical mastery in Jaipur.
          </p>

          {/* Quick Dual Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/business"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-sky-600/20 min-h-[44px]"
            >
              <Briefcase className="w-4 h-4" />
              <span>Explore Business Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/learn-ai"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-[#0F172A] dark:hover:bg-[#1E293B] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-all shadow-sm min-h-[44px]"
            >
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Explore Training Tracks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openConsultation('business')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm transition-all min-h-[44px]"
            >
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>Book Discovery</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Sovereign Cloud Deployment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
              <span>Zero-Hallucination Guardrails</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Physical Hardware Stations in Jaipur</span>
            </div>
          </div>
        </div>

        {/* Hero Architectural Visual Showcase Banner */}
        <div className="relative w-full max-w-5xl mx-auto h-48 sm:h-72 md:h-88 rounded-2xl overflow-hidden mt-8 sm:mt-10 mb-4 border border-slate-200 dark:border-white/10 shadow-lg bg-white dark:bg-[#0B1120]">
          <Image
            src="/images/hero/hero-ai-automation.png"
            alt="Creatik AI Enterprise Automation & Connected Architecture Overview"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/15 font-mono text-[10px] sm:text-[11px] truncate">
                Autonomous Enterprise Orchestration • Jaipur
              </span>
            </div>
            <span className="hidden sm:inline-block bg-sky-600/90 backdrop-blur-sm px-3 py-1 rounded-lg font-semibold text-[11px] border border-sky-400/30 shrink-0">
              n8n &amp; RAG Systems
            </span>
          </div>
        </div>

        {/* Live Interactive System & Workflow Preview Widget */}
        <div className="mt-8 max-w-5xl mx-auto">
          <HeroInteractivePreview />
        </div>
      </div>

      {/* Accessible Consultation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTrack === 'business' ? 'Schedule a Technical Discovery Session' : 'Request Program Syllabus & Lab Schedule'}
      >
        <InquiryForm
          initialAudience={modalTrack}
          sourcePage="Hero Modal"
          onSuccess={() => {
            setTimeout(() => setIsModalOpen(false), 2000);
          }}
        />
      </Modal>
    </section>
  );
}
