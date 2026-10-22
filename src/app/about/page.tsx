import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Cpu,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  FileText,
  AlertCircle,
  Building,
  Target,
  Users,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Sparkles,
  Bot,
  ExternalLink,
  Phone,
  Mail,
} from '@/components/ui/Icons';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'About Creatik AI | Technology Operations & Verified Leadership in Jaipur',
  description:
    'Learn about Creatik AI (operated under Creatik IT Solutions LLP, LLPIN: AAL-3046), our verified corporate leadership, engineering methodology, and applied tech training in Jaipur, Rajasthan.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const disclosures = [
    {
      label: 'Operating Entity',
      status: `${siteConfig.legalName} (LLPIN: ${siteConfig.llpin})`,
      statusType: 'verified' as const,
      notes: `Registered limited liability partnership incorporated on ${siteConfig.incorporationDate} under RoC Jaipur, Ministry of Corporate Affairs (MCA).`,
    },
    {
      label: 'Registered Office Address',
      status: siteConfig.location.fullAddressPlaceholder,
      statusType: 'verified' as const,
      notes: 'Official registered and physical operational office located in the Gurjar Ki Thadi / Sultan Nagar, Gopalpura Bypass corridor in Jaipur.',
    },
    {
      label: 'Direct Phone & WhatsApp',
      status: `${siteConfig.contact.phone} / ${siteConfig.contact.alternatePhone}`,
      statusType: 'verified' as const,
      notes: 'Active institutional support and discovery telephone channels monitored during business hours (IST).',
    },
    {
      label: 'Official Inquiries Email',
      status: `${siteConfig.contact.officialEmail} | ${siteConfig.contact.supportEmail}`,
      statusType: 'verified' as const,
      notes: 'Monitored by operations and technical leadership for enterprise contracts and student admissions.',
    },
    {
      label: 'Commercial Trade Name',
      status: 'Creatik AI (creatikai.com)',
      statusType: 'verified' as const,
      notes: 'Applied technology, intelligent workflow automation, and specialized technical training brand operated under Creatik IT Solutions LLP.',
    },
    {
      label: 'Placement Standards Policy',
      status: 'Honest Skills Policy (No False Guarantees)',
      statusType: 'neutral' as const,
      notes: 'We explicitly do not advertise superficial "100% placement guarantees". Training focuses on verifiable code portfolios and production tools.',
    },
  ];

  const whatWeDoServices = [
    {
      title: 'Enterprise AI & Automation',
      desc: 'Orchestrating multi-system pipelines with n8n, custom webhooks, CRM sync, and API integrations that eliminate redundant manual processes.',
      icon: Sparkles,
      href: '/business/ai-automation',
      tag: 'Automation',
    },
    {
      title: 'Domain-Trained RAG Chatbots',
      desc: 'Building conversational AI agents with zero-hallucination guardrails, vector embeddings, and strict corporate document grounding.',
      icon: Bot,
      href: '/business/ai-chatbots',
      tag: 'AI Agents',
    },
    {
      title: 'High-Performance Web Systems',
      desc: 'Modern React 19 and Next.js full-stack applications, scalable database architectures, and high-converting client portals.',
      icon: Cpu,
      href: '/business/web-development',
      tag: 'Engineering',
    },
  ];

  const whatWeDoTraining = [
    {
      title: 'Applied AI & Machine Learning',
      desc: 'Real PyTorch models, data preprocessing pipelines, LLM orchestration, and practical deployment rather than abstract theory.',
      icon: Cpu,
      href: '/learn-ai/ai-ml',
      tag: 'AI Training',
    },
    {
      title: 'Full-Stack Software Engineering',
      desc: 'Hands-on frontend and backend web development using TypeScript, Next.js, Node.js, relational databases, and cloud hosting.',
      icon: Briefcase,
      href: '/learn-ai/full-stack',
      tag: 'Engineering',
    },
    {
      title: 'Robotics & Hardware Labs',
      desc: 'In-person physical lab workstations in Jaipur for microcontrollers, edge sensor integration, and real-time TinyML telemetry.',
      icon: GraduationCap,
      href: '/learn-ai/robotics',
      tag: 'Hardware Lab',
    },
  ];

  return (
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative tech-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-4">
              <Building className="w-3.5 h-3.5" />
              <span>Creatik IT Solutions LLP • Est. Dec 2017</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Engineering Disciplined Digital Systems &amp; Applied Technical Education
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">Creatik AI</span> operates under{' '}
              <span className="text-slate-900 dark:text-white font-semibold">{siteConfig.legalName}</span> (LLPIN: {siteConfig.llpin}), registered in Jaipur, Rajasthan. We bridge production software automation for modern enterprises with rigorous, project-first training for engineers.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#090E1A] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Core Dual Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              What We Do at Creatik AI
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Our dual practice structure ensures that our educational curriculum is directly shaped by active commercial software deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Business Solutions Column */}
            <div className="space-y-4 bg-slate-50/70 dark:bg-[#0D1424] p-5 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-bold text-base">
                  <Briefcase className="w-5 h-5" />
                  <span>Enterprise Software &amp; Automation</span>
                </div>
                <Link
                  href="/business"
                  className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-3 pt-1">
                {whatWeDoServices.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.title}
                      href={svc.href}
                      className="block p-3.5 rounded-xl bg-white dark:bg-[#0A101D] border border-slate-200/80 dark:border-white/5 hover:border-sky-500/40 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                          <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            {svc.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-500/20">
                          {svc.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                        {svc.desc}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Practical Academy Column */}
            <div className="space-y-4 bg-slate-50/70 dark:bg-[#0D1424] p-5 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-base">
                  <GraduationCap className="w-5 h-5" />
                  <span>Applied Technical Training (Jaipur Lab)</span>
                </div>
                <Link
                  href="/learn-ai"
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>Explore Tracks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-3 pt-1">
                {whatWeDoTraining.map((trk) => {
                  const Icon = trk.icon;
                  return (
                    <Link
                      key={trk.title}
                      href={trk.href}
                      className="block p-3.5 rounded-xl bg-white dark:bg-[#0A101D] border border-slate-200/80 dark:border-white/5 hover:border-emerald-500/40 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {trk.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20">
                          {trk.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                        {trk.desc}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Leadership & Organization Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Public Verification &amp; Corporate Governance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Verified Leadership &amp; Key Organization
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              In accordance with our strict data integrity policy, we only publish verified corporate officers and active operations leadership confirmed through official public records. We explicitly do not generate fictional staff portraits or use artificial avatars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.leadership.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    {/* Dignified Initials Emblem */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 text-white font-bold text-base flex items-center justify-center shadow-sm shrink-0">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Record</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-sky-700 dark:text-sky-400 mt-1 mb-3">
                    {member.role}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-white/5 space-y-2">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Source: </span>
                    <span>{member.verifiedSource}</span>
                  </div>

                  {member.sourceUrl && (
                    <a
                      href={member.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium pt-1"
                    >
                      <span>Public Registry Citation</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Privacy & Directory Notice */}
          <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-[#0B1222] border border-slate-200 dark:border-white/5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-700 dark:text-slate-300">Staff &amp; Faculty Privacy Notice:</strong> Additional technical instructors, software engineers, and laboratory assistants work within Creatik AI’s Jaipur operations. Individual staff biographies and photographs are kept confidential on public web domains unless explicit individual release authorization is on file.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#090E1A] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-5 sm:p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-5 sm:mb-6 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Engineering Approach</h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3 sm:mb-4">
                We design automation architectures that prioritize operational reliability over novelty. All AI pipelines feature deterministic guardrails, structured validation schemas, and verifiable fallback routines.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                By maintaining dual commercial implementation and educational training tracks, our instructional labs use the exact same production toolchains (n8n, Next.js, PyTorch, Docker) that solve client engineering challenges.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-5 sm:p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5 sm:mb-6 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">Commitment to Content Integrity</h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3 sm:mb-4">
                The technical training and agency sector frequently publishes unverified claims, fabricated student counts, and ungrounded guarantees.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                At Creatik AI, we uphold factual representation: all advertised capabilities are backed by real source repositories, physical labs are fully accessible to registered trainees, and we publish no unverified superlatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Facts & Verification Status */}
      <section id="standards" className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Verified Facts &amp; Operational Disclosures</h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
              In accordance with our content governance standards, the table below documents verified corporate facts on record with official authorities.
            </p>
          </div>

          {/* Mobile Card View (< md) */}
          <div className="md:hidden space-y-4">
            {disclosures.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0B1222] border border-slate-200 dark:border-white/10 rounded-xl p-4 shadow-sm space-y-2"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {item.label}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium">
                  {item.statusType === 'verified' && (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{item.status}</span>
                    </>
                  )}
                  {item.statusType === 'neutral' && (
                    <span className="text-slate-900 dark:text-white">{item.status}</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-white/5 leading-relaxed">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Table View (>= md) */}
          <div className="hidden md:block bg-white dark:bg-[#0B1222] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-white/10 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-6 py-4">Data Point</th>
                  <th className="px-6 py-4">Status &amp; Verified Information</th>
                  <th className="px-6 py-4">Governance &amp; Source Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                {disclosures.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{item.label}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 font-medium">
                        {item.statusType === 'verified' && (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{item.status}</span>
                          </>
                        )}
                        {item.statusType === 'neutral' && (
                          <span className="text-slate-900 dark:text-white">{item.status}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                      {item.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#090E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Connect With Our Team in Jaipur
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our team welcomes technical consultations, partner inquiries, and in-person visits to our Jaipur laboratory at Plot No. 30-A, Sultan Nagar, Gurjar Ki Thadi.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-md shadow-sky-600/25"
            >
              <span>Submit General or Business Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`mailto:${siteConfig.contact.officialEmail}`}
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all border border-slate-200 dark:border-white/10"
            >
              <span>Email: {siteConfig.contact.officialEmail}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

