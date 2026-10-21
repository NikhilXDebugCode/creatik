import React from 'react';
import {
  ShieldCheck,
  Server,
  Code2,
  MapPin,
  CheckCircle,
  FileCode2,
} from '@/components/ui/Icons';

export function DifferentiatorsSection() {
  const points = [
    {
      title: 'Sovereign Hosting & Data Privacy',
      desc: 'We deploy workflows and vector databases directly on your private cloud (AWS, DigitalOcean, self-hosted VPS). Your proprietary customer records and API keys remain under your strict encryption control.',
      icon: Server,
    },
    {
      title: 'Deterministic RAG Architectures',
      desc: 'We do not build flimsy chat wrappers. Our conversational agents implement hybrid search, explicit negative constraints, and strict confidence thresholds to prevent false claims and hallucinations.',
      icon: ShieldCheck,
    },
    {
      title: 'Clean TypeScript & Modern Standards',
      desc: 'We build with modern Next.js, React 19, and typed schemas. No slow legacy themes or brittle plugins that break on minor dependency updates.',
      icon: Code2,
    },
    {
      title: 'Jaipur On-Site Engineering & Laboratory',
      desc: 'Located in Jaipur, Rajasthan, our engineering laboratory provides physical hardware kits for robotics coaching and in-person technical workshops alongside remote enterprise delivery.',
      icon: MapPin,
    },
    {
      title: 'Ethical Curriculum & Honest Claims',
      desc: 'We do not publish unsubstantiated "100% placement guarantees" or fabricated metrics. We evaluate student growth on real GitHub code commits, system design, and production readiness.',
      icon: CheckCircle,
    },
    {
      title: 'Comprehensive Technical Documentation',
      desc: 'Every client solution and training cohort receives complete architecture flowcharts, API schemas, and deployment instructions so you maintain full operational independence.',
      icon: FileCode2,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-slate-50 dark:bg-[#090E1A] border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Why Creatik AI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Our Standards &amp; Principles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
            Whether automating business workflows or training future engineers in Jaipur, we adhere to high operational and educational standards.
          </p>
        </div>

        {/* 6 Grid points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 hover:border-sky-400 dark:hover:border-sky-500/30 transition-all shadow-sm hover:shadow-md dark:shadow-none"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
