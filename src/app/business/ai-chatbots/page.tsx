import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Bot,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Server,
  Workflow,
  AlertCircle,
  Database,
  Lock,
} from '@/components/ui/Icons';
import { businessServices } from '@/data/businessServices';
import { InquiryForm } from '@/components/forms/InquiryForm';

const service = businessServices.find((s) => s.slug === 'ai-chatbots')!;

export const metadata: Metadata = {
  title: 'AI Agents & RAG Chatbots for Business',
  description:
    'Context-aware conversational AI systems grounded in internal vector documents, API tool-calling, and strict hallucination prevention by Creatik AI.',
  alternates: {
    canonical: '/business/ai-chatbots',
  },
};

export default function AIChatbotsPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative tech-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-4">
                <Bot className="w-3.5 h-3.5" />
                <span>Applied Conversational Intelligence</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {service.heroHeadline}
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
                {service.heroSubheadline}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#deliverables"
                  className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md shadow-sky-600/25"
                >
                  Explore RAG Architecture
                </a>
                <a
                  href="#inquire"
                  className="px-6 py-3 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 font-medium text-sm transition-all shadow-sm"
                >
                  Inquire About AI Agents
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg bg-slate-100 dark:bg-[#0D1424] group">
                <Image
                  src="/images/services/service-ai-chatbots.png"
                  alt="Enterprise RAG Conversational AI and Vector Document Index"
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-4">
                  <div className="text-xs text-white/95 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    Domain-Grounded Hybrid Vector Retrieval & Citation Stack
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Challenges */}
      <section className="py-16 bg-white dark:bg-[#090E1A] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <span>Target Operational Use Cases</span>
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {service.targetAudience.map((aud, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                <span>Hallucination & Risk Prevention</span>
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {service.keyChallenges.map((ch, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2 shrink-0" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section id="deliverables" className="py-20 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Deliverables & System Capabilities</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Built on vector embeddings, multi-stage retrieval, semantic guardrails, and secure API action executors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0B1222] border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:border-sky-400 dark:hover:border-sky-500/30 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <span className="text-[11px] font-mono text-sky-700 bg-sky-50 border border-sky-200 dark:text-sky-400 dark:bg-sky-500/10 dark:border-transparent px-2 py-0.5 rounded">
                    Module {idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-white/5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-20 bg-white dark:bg-[#090E1A] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Agent Evaluation Lifecycle</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              From source document sanitization to adversarial red-teaming benchmarks before live deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.workflowSteps.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-xl p-5 relative shadow-sm"
              >
                <span className="text-2xl font-mono font-bold text-sky-600 dark:text-sky-400 mb-3 block">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquire" className="py-20 bg-slate-50 dark:bg-[#070B14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Consult on Your Conversational AI Agent
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Tell us about your target support deflection, customer communication channels, and proprietary documentation formats.
            </p>
          </div>

          <InquiryForm
            initialAudience="business"
            initialServiceId={service.title}
            sourcePage="AI Chatbots Service Page"
          />
        </div>
      </section>
    </div>
  );
}
