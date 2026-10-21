'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Cpu,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Sparkles,
  Bot,
  Globe,
  Search,
  Code2,
  TrendingUp,
  Boxes,
} from '@/components/ui/Icons';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { siteConfig } from '@/data/siteConfig';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [businessDropdown, setBusinessDropdown] = useState(false);
  const [learnDropdown, setLearnDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setBusinessDropdown(false);
    setLearnDropdown(false);
  }, [pathname]);

  const businessItems = [
    {
      title: 'AI Automation & Workflows',
      desc: 'n8n pipelines, webhook triggers & autonomous multi-tool sync',
      href: '/business/ai-automation',
      icon: Sparkles,
    },
    {
      title: 'AI Agents & Chatbots',
      desc: 'RAG-powered conversational assistants with domain citations',
      href: '/business/ai-chatbots',
      icon: Bot,
    },
    {
      title: 'Modern Web Development',
      desc: 'Full-stack Next.js web applications, portals & SaaS MVPs',
      href: '/business/web-development',
      icon: Globe,
    },
    {
      title: 'Technical SEO & Search Strategy',
      desc: 'Core Web Vitals tuning, JSON-LD schema & organic pipeline',
      href: '/business/seo',
      icon: Search,
    },
  ];

  const learnItems = [
    {
      title: 'AI & Machine Learning',
      desc: 'Python pipelines, PyTorch neural models & LLM orchestration',
      href: '/learn-ai/ai-ml',
      icon: Cpu,
    },
    {
      title: 'Full-Stack Web Engineering',
      desc: 'React 19, Next.js, Node.js, TypeScript & PostgreSQL schemas',
      href: '/learn-ai/full-stack',
      icon: Code2,
    },
    {
      title: 'AI-Powered Digital Marketing',
      desc: 'Performance ads, programmatic SEO & conversion telemetry',
      href: '/learn-ai/digital-marketing',
      icon: TrendingUp,
    },
    {
      title: 'Robotics & Edge AI Coaching',
      desc: 'Microcontrollers, sensor telemetry, TinyML & physical hardware',
      href: '/learn-ai/robotics',
      icon: Boxes,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#070B14]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-lg dark:shadow-black/20'
          : 'bg-white/75 dark:bg-[#070B14]/70 backdrop-blur-sm border-b border-slate-200/50 dark:border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center p-1.5 shadow-sm group-hover:border-sky-500/50 transition-colors shrink-0">
              <Image
                src="/images/brand/creatikai-logo.png"
                alt="Creatik AI Logo"
                width={36}
                height={36}
                className="w-auto h-7 object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                  Creatik
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded font-mono font-semibold bg-sky-500/10 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400 border border-sky-500/20 dark:border-sky-500/30">
                  AI
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider uppercase">
                Jaipur • Applied Tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {/* For Business Mega Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setBusinessDropdown(true)}
              onMouseLeave={() => setBusinessDropdown(false)}
            >
              <Link
                href="/business"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname.startsWith('/business')
                    ? 'text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 font-semibold'
                    : 'text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <Briefcase className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>For Business</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {/* Business Dropdown Panel */}
              {businessDropdown && (
                <div className="absolute top-full left-0 w-[420px] pt-2">
                  <div className="p-3 bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 rounded-xl shadow-xl dark:shadow-2xl dark:shadow-black/80 backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-white/5 px-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Enterprise Solutions
                      </span>
                      <Link
                        href="/business"
                        className="text-xs text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1 font-medium"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="space-y-1">
                      {businessItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-500/10 border border-sky-100 dark:border-sky-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-100 dark:group-hover:bg-sky-500/20 group-hover:border-sky-300 dark:group-hover:border-sky-500/40 transition-colors">
                              <Icon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                                {item.title}
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Learn AI Mega Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setLearnDropdown(true)}
              onMouseLeave={() => setLearnDropdown(false)}
            >
              <Link
                href="/learn-ai"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname.startsWith('/learn-ai')
                    ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 font-semibold'
                    : 'text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Learn AI</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {/* Learn Dropdown Panel */}
              {learnDropdown && (
                <div className="absolute top-full left-0 w-[420px] pt-2">
                  <div className="p-3 bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 rounded-xl shadow-xl dark:shadow-2xl dark:shadow-black/80 backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-white/5 px-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Practical Tech Academy
                      </span>
                      <Link
                        href="/learn-ai"
                        className="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1 font-medium"
                      >
                        All Tracks <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="space-y-1">
                      {learnItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 group-hover:border-emerald-300 dark:group-hover:border-emerald-500/40 transition-colors">
                              <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                                {item.title}
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/about'
                  ? 'text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 font-semibold'
                  : 'text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              About
            </Link>

            <Link
              href="/insights"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname.startsWith('/insights')
                  ? 'text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 font-semibold'
                  : 'text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              Insights
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/contact'
                  ? 'text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 font-semibold'
                  : 'text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTAs + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/contact?intent=business"
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/30 text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-all"
            >
              For Business
            </Link>
            <Link
              href="/contact?intent=learn"
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-all"
            >
              For Students
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 dark:from-sky-500 dark:to-blue-600 text-white font-medium text-sm shadow-md shadow-sky-600/20 hover:shadow-sky-600/30 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Controls: Toggle + Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#070B14] px-4 pt-2 pb-6 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="space-y-4">
            {/* For Business Section */}
            <div className="pt-2">
              <div className="flex items-center justify-between py-1 text-sm font-semibold text-sky-700 dark:text-sky-400 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> For Business
                </span>
                <Link
                  href="/business"
                  className="text-xs text-slate-600 dark:text-slate-300 underline"
                  onClick={() => setIsOpen(false)}
                >
                  Overview
                </Link>
              </div>
              <div className="mt-2 space-y-1 pl-2 border-l border-slate-200 dark:border-white/10">
                {businessItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Learn AI Section */}
            <div className="pt-2">
              <div className="flex items-center justify-between py-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> Learn AI
                </span>
                <Link
                  href="/learn-ai"
                  className="text-xs text-slate-600 dark:text-slate-300 underline"
                  onClick={() => setIsOpen(false)}
                >
                  Overview
                </Link>
              </div>
              <div className="mt-2 space-y-1 pl-2 border-l border-slate-200 dark:border-white/10">
                {learnItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* General links */}
            <div className="pt-2 border-t border-slate-200 dark:border-white/10 space-y-2">
              <Link
                href="/about"
                className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                About Creatik AI
              </Link>
              <Link
                href="/insights"
                className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Insights &amp; Research
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact &amp; Inquiries
              </Link>
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/contact"
                className="w-full text-center py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Initiate Project / Training Inquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
