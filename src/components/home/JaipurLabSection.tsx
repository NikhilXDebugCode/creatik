import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Clock,
  Cpu,
  Boxes,
  ShieldCheck,
  ArrowRight,
  Building,
  Terminal,
} from '@/components/ui/Icons';
import { siteConfig } from '@/data/siteConfig';

export function JaipurLabSection() {
  const labStations = [
    {
      title: 'Physical Computing & Robotics Lab',
      desc: 'Workbenches equipped with ESP32 microcontrollers, Arduino kits, breadboards, oscilloscopes, and differential robot chassis for applied edge AI coaching.',
      icon: Boxes,
      badge: 'Physical Laboratory',
    },
    {
      title: 'Full-Stack Software Lab',
      desc: 'Development workstations set up with Git/GitHub workflows, Docker environments, Next.js, PostgreSQL databases, and automated testing rigs.',
      icon: Terminal,
      badge: 'Software Engineering',
    },
    {
      title: 'Applied AI & Vector Compute Rig',
      desc: 'Local model evaluation setups running quantized open-weights (Llama, Mistral) for latency testing, vector embeddings benchmarks, and prompt testing.',
      icon: Cpu,
      badge: 'Applied AI & RAG',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative tech-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>Jaipur Operations & Laboratory Hub</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              A Dedicated Applied Technology Center in Rajasthan
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Creatik AI operates directly from the Gopalpura Bypass / Gurjar Ki Thadi corridor in Jaipur. Our facility combines enterprise client delivery with project-first training stations where learners build software and wire circuits in person.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 shadow-sm">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-900 dark:text-white font-semibold block">Location & Transit:</span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Sultan Nagar / Gurjar Ki Thadi, Gopalpura Bypass, Jaipur, Rajasthan 302019. Easily accessible from Mansarovar and major Jaipur transit lines.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 shadow-sm">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-900 dark:text-white font-semibold block">Laboratory Hours:</span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Monday to Saturday: 10:00 AM – 7:00 PM IST. Dedicated cohort laboratory slots scheduled on registration.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?intent=learn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20"
              >
                <span>Schedule a Laboratory Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Cards: Lab Stations */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden mb-6 border border-slate-200 dark:border-white/10 shadow-sm bg-white dark:bg-[#0B1222]">
              <Image
                src="/images/lab/jaipur-tech-lab.svg"
                alt="Creatik AI Jaipur Engineering Laboratory & Hardware Stations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {labStations.map((station, i) => {
              const Icon = station.icon;
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-[#0B1222] border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:border-emerald-400 dark:hover:border-emerald-500/30 transition-all group shadow-sm hover:shadow-md dark:shadow-none"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {station.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20 px-2.5 py-1 rounded">
                      {station.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-13">
                    {station.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
