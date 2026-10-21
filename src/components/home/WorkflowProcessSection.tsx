import React from 'react';
import {
  Compass,
  Layers,
  TestTube2,
  Rocket,
  ArrowRight,
  ShieldAlert,
  Cpu,
} from '@/components/ui/Icons';

export function WorkflowProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Scope Mapping',
      desc: 'We understand your current manual bottlenecks, existing business tools, and primary goals to design a solution that fits your exact workflow.',
      icon: Compass,
      focus: 'Clear Project Scope',
    },
    {
      step: '02',
      title: 'Prototyping & Workflow Design',
      desc: 'We build an initial working prototype and test it with realistic business scenarios so your team can review the experience before rollout.',
      icon: Layers,
      focus: 'Interactive Review',
    },
    {
      step: '03',
      title: 'Reliability & Accuracy Testing',
      desc: 'Before going live, we test response times, unexpected inputs, and data consistency to ensure your operations run smoothly without interruption.',
      icon: TestTube2,
      focus: 'Thorough Verification',
    },
    {
      step: '04',
      title: 'Smooth Launch & Team Support',
      desc: 'We deploy the solution securely, provide complete walkthroughs for your staff, and offer ongoing support so you get lasting value.',
      icon: Rocket,
      focus: 'Full Support & Documentation',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
            <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Our Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            How We Deliver Reliable Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
            We avoid black-box magic. Every solution follows an engineering lifecycle designed to prevent downtime, protect data sovereignty, and yield measurable operational efficiency.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 rounded-2xl p-4 sm:p-6 hover:border-sky-400 dark:hover:border-sky-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-sky-600 dark:text-sky-400">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Focus: <strong className="text-slate-700 dark:text-slate-200">{item.focus}</strong>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
