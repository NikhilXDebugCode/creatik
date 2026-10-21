import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Briefcase, GraduationCap, Compass } from '@/components/ui/Icons';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4 tech-grid-pattern bg-slate-50 dark:bg-[#070B14]">
      <div className="max-w-lg w-full text-center bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 rounded-2xl p-8 sm:p-12 shadow-xl dark:shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center mx-auto mb-6 text-sky-600 dark:text-sky-400 shadow-sm">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <span className="text-xs font-mono font-bold text-sky-700 dark:text-sky-400 uppercase tracking-widest block mb-2">
          HTTP 404 • Resource Not Found
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          This Endpoint Does Not Exist
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          The URL you requested could not be located on the Creatik AI server. Please verify the URL or navigate to one of our primary visitor tracks below:
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-sky-600/20"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <Link
              href="/business"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>For Business</span>
            </Link>

            <Link
              href="/learn-ai"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Learn AI</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
