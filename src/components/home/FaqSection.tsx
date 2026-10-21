'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, AlertCircle } from '@/components/ui/Icons';
import { faqData, FAQItem } from '@/data/faqData';

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'business' | 'learning'>('all');
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqData
      : faqData.filter((item) => item.category === activeCategory || item.category === 'general');

  return (
    <section className="py-24 bg-white dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Clear Answers to Common Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
            Transparent information regarding our business delivery models, curriculum philosophy, and operational policies.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === 'all'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10'
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setActiveCategory('business')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === 'business'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10'
              }`}
            >
              Business Solutions
            </button>
            <button
              onClick={() => setActiveCategory('learning')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === 'learning'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10'
              }`}
            >
              Learning Tracks
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-slate-50 dark:bg-[#0B1120] border-sky-300 dark:border-sky-500/40 shadow-sm'
                    : 'bg-slate-50/60 dark:bg-[#080D18] border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                      isOpen
                        ? 'rotate-180 bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400'
                        : 'bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-200 dark:border-white/5">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <span className="uppercase font-semibold">Category:</span>
                      <span className="capitalize">{faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
