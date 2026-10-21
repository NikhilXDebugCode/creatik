'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from '@/components/ui/Icons';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('creatik-theme');
    if (stored === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('creatik-theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Render a placeholder before mount to avoid hydration mismatch
  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 ${className}`}
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className={`relative p-2 rounded-xl transition-all duration-200 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1222] text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-300 dark:hover:border-sky-500/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 flex items-center justify-center ${className}`}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-slate-700 hover:text-sky-600 transition-transform duration-200 hover:scale-110" />
      ) : (
        <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300 transition-transform duration-200 hover:scale-110" />
      )}
    </button>
  );
}
