'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Mail,
  Bot,
  Layers,
  Bell,
  ArrowRight,
} from '@/components/ui/Icons';

export function WorkflowCanvas() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      title: 'Customer Inquiry',
      sub: 'Website, form, or chat trigger',
      icon: Mail,
      summary: 'A new lead or inquiry arrives through your website or messaging channels.',
      outcomeTitle: 'Instant, Reliable Capture',
      outcomeDesc: 'The inquiry is logged immediately with verified contact information, source tracking, and zero lost messages.',
      previewData: [
        { label: 'Customer', value: 'Operations Lead' },
        { label: 'Request', value: 'Workflow Automation for Inquiries' },
        { label: 'Channel', value: 'Direct Website Form' },
      ],
      timeframe: 'Instantaneous (< 1 sec)',
    },
    {
      id: 1,
      title: 'AI Processing',
      sub: 'Intent & priority analysis',
      icon: Bot,
      summary: 'Understands the customer’s specific requirements and extracts key project details.',
      outcomeTitle: 'Intelligent Understanding',
      outcomeDesc: 'Automatically identifies service interest, urgency level, and preferred contact time without manual triage.',
      previewData: [
        { label: 'Detected Need', value: 'Automated CRM & Notification Flow' },
        { label: 'Priority Level', value: 'High Priority (Business Lead)' },
        { label: 'Next Step', value: 'Route to Solutions Specialist' },
      ],
      timeframe: 'Processed in < 3 secs',
    },
    {
      id: 2,
      title: 'Organized Record',
      sub: 'Secure data management',
      icon: Layers,
      summary: 'Saves structured customer records cleanly into your database or CRM system.',
      outcomeTitle: 'Zero Manual Data Entry',
      outcomeDesc: 'Details are automatically organized into your private database, eliminating tedious copy-pasting and typos.',
      previewData: [
        { label: 'Storage', value: 'Private Encrypted Database' },
        { label: 'Record Status', value: 'Verified & Profile Created' },
        { label: 'Data Privacy', value: 'Sovereign / Strictly Confidential' },
      ],
      timeframe: 'Synced automatically',
    },
    {
      id: 3,
      title: 'Automated Follow-Up',
      sub: 'Instant team & client alert',
      icon: Bell,
      summary: 'Alerts your team immediately and sends a polite confirmation to the client.',
      outcomeTitle: 'Rapid Team Collaboration',
      outcomeDesc: 'Your team receives a concise briefing with all client context so they can respond within minutes, not days.',
      previewData: [
        { label: 'Team Alert', value: 'Dispatched to Slack / WhatsApp' },
        { label: 'Client Email', value: 'Custom Confirmation Sent' },
        { label: 'Response Target', value: 'Team Notified in < 60 Seconds' },
      ],
      timeframe: 'Immediate notification',
    },
  ];

  const current = steps[activeStep];

  return (
    <div className="bg-white dark:bg-[#0A101D] border border-slate-200 dark:border-sky-500/30 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl transition-colors duration-200">
      {/* Top Bar: Explanatory Context */}
      <div className="bg-slate-100 dark:bg-[#0F172A] px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-slate-200 dark:border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
            How Business Automation Works in Practice
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Illustrative Sequence
          </span>
        </div>
      </div>

      {/* Main Interactive Flow */}
      <div className="p-3.5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Step Selector Column */}
        <div className="lg:col-span-7 space-y-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
            Tap a step to see how it saves time:
          </span>

          <div className="space-y-2">
            {steps.map((step, index) => {
              const isSelected = activeStep === step.id;
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative">
                  <button
                    onClick={() => setActiveStep(step.id)}
                    type="button"
                    className={`w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between min-h-[50px] ${
                      isSelected
                        ? 'bg-sky-50 dark:bg-sky-500/15 border-sky-400 dark:border-sky-500/60 shadow-sm ring-1 ring-sky-400/50'
                        : 'bg-slate-50 dark:bg-[#0E172B] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-sky-600 dark:bg-sky-500 text-white shadow-sm'
                            : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                          <span className="truncate">{step.title}</span>
                          {isSelected && (
                            <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 shrink-0">
                              Active
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                          {step.sub}
                        </div>
                      </div>
                    </div>

                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ml-2 ${
                        isSelected ? 'text-sky-600 dark:text-sky-400' : 'text-slate-300 dark:text-slate-700'
                      }`}
                    />
                  </button>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="h-2 w-0.5 bg-sky-300/40 dark:bg-sky-500/30 ml-7 my-0.5" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Outcome Card Column */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-[#080D18] border border-slate-200 dark:border-white/10 rounded-xl p-4 sm:p-5 space-y-3.5 shadow-sm">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 dark:border-white/5">
            <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Step 0{activeStep + 1} Benefit Breakdown</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
              {current.timeframe}
            </span>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">{current.outcomeTitle}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              {current.outcomeDesc}
            </p>
          </div>

          {/* Clean Information Preview */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              What gets handled automatically:
            </span>
            <div className="bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-lg p-2.5 space-y-1.5">
              {current.previewData.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-500 dark:text-slate-400">{item.label}:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200 text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span>Result: No lost leads</span>
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> Secure &amp; Reliable
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
