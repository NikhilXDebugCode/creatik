import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Cpu,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  AlertCircle,
} from '@/components/ui/Icons';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-100 dark:bg-[#05080F] border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-200">
      {/* Integrity banner */}
      <div className="border-b border-slate-200 dark:border-white/5 bg-slate-50/80 dark:bg-[#090E1A]/60 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
            <span>
              <strong>Editorial Transparency:</strong> Creatik AI adheres strictly to verifiable technical claims. Unconfirmed claims or placement guarantees are excluded.
            </span>
          </div>
          <Link
            href="/about#standards"
            className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1 font-semibold shrink-0"
          >
            Review Our Standards <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand & Address Column */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center p-1 shadow-sm shrink-0">
                <Image
                  src="/images/brand/creatikai-logo.png"
                  alt="Creatik AI Logo"
                  width={32}
                  height={32}
                  className="w-auto h-6 object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Creatik</span>
                <span className="text-xs px-1.5 py-0.5 rounded font-mono font-semibold bg-sky-500/10 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400 border border-sky-500/20 dark:border-sky-500/30">
                  AI
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Operated under <span className="text-slate-900 dark:text-slate-200 font-semibold">{siteConfig.legalName}</span>. Delivering reliable AI automation pipelines, intelligent web platforms, and practical hands-on engineering programs.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                    {siteConfig.location.city}, {siteConfig.location.state}, India
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                    {siteConfig.location.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.officialEmail}`}
                  className="text-slate-800 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 transition-colors py-1 inline-block"
                >
                  {siteConfig.contact.officialEmail}
                </a>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-amber-800 dark:text-amber-400/90 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1.5 rounded border border-amber-200 dark:border-amber-500/20 max-w-sm">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Phone &amp; WhatsApp channels currently awaiting carrier verification. Please use official email for all verified communications.</span>
              </div>
            </div>
          </div>

          {/* Solutions for Business */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-sm mb-3 sm:mb-4">
              <Briefcase className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>For Business</span>
            </div>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/business" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Overview &amp; Methodology
                </Link>
              </li>
              <li>
                <Link href="/business/ai-automation" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  AI Automation &amp; n8n
                </Link>
              </li>
              <li>
                <Link href="/business/ai-chatbots" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  AI Agents &amp; Chatbots
                </Link>
              </li>
              <li>
                <Link href="/business/web-development" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Web &amp; SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/business/seo" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Technical SEO &amp; Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn AI Track */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-sm mb-3 sm:mb-4">
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Learn AI</span>
            </div>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/learn-ai" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  All Training Tracks
                </Link>
              </li>
              <li>
                <Link href="/learn-ai/ai-ml" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  AI &amp; Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/learn-ai/full-stack" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Full-Stack Engineering
                </Link>
              </li>
              <li>
                <Link href="/learn-ai/digital-marketing" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  AI Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/learn-ai/robotics" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Robotics &amp; Edge AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal Links */}
          <div>
            <div className="text-slate-900 dark:text-white font-semibold text-sm mb-3 sm:mb-4">Company &amp; Legal</div>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/about" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  About Creatik AI
                </Link>
              </li>
              <li>
                <Link href="/insights" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Insights &amp; Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Contact &amp; Inquiries
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="py-1.5 inline-block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {currentYear} {siteConfig.legalName} ({siteConfig.name}). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="py-1 hover:text-slate-800 dark:hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="py-1 hover:text-slate-800 dark:hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="py-1 hover:text-slate-800 dark:hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
