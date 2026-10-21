'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
} from '@/components/ui/Icons';

export function WorkflowCanvas() {
  const [activeNode, setActiveNode] = useState<number>(1);

  const nodes = [
    {
      id: 0,
      title: 'Webhook Trigger',
      sub: 'POST /api/leads',
      type: 'trigger',
      detail: 'Listens for customer inquiries, webhook callbacks, or scheduled cron events with rate-limiting.',
      payload: '{\n  "source": "InquiryForm",\n  "intent": "Enterprise Automation",\n  "priority": "P1"\n}',
    },
    {
      id: 1,
      title: 'LLM Intent & Entity Parser',
      sub: 'OpenAI / Claude API',
      type: 'ai',
      detail: 'Extracts company size, tech stack, and intent. Enforces strict JSON schema validation to eliminate hallucinations.',
      payload: '{\n  "entities": ["CRM", "n8n", "PostgreSQL"],\n  "urgencyScore": 0.94,\n  "action": "route_to_engineering"\n}',
    },
    {
      id: 2,
      title: 'PostgreSQL Database Sync',
      sub: 'Self-Hosted DB',
      type: 'db',
      detail: 'Upserts customer record into sovereign database without sending data to unauthorized third-party clouds.',
      payload: '{\n  "status": "UPSERT_SUCCESS",\n  "record_id": "cust_8921a",\n  "encrypted": true\n}',
    },
    {
      id: 3,
      title: 'Omnichannel Notification',
      sub: 'Slack & WhatsApp API',
      type: 'action',
      detail: 'Dispatches instant SLA alert to account executive within 60 seconds with full audit context.',
      payload: '{\n  "dispatched_to": "#ops-alerts",\n  "sla_seconds": 42,\n  "delivery_confirmed": true\n}',
    },
  ];

  return (
    <div className="bg-white dark:bg-[#0A101D] border border-slate-200 dark:border-sky-500/30 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl transition-colors duration-200">
      {/* Top bar */}
      <div className="bg-slate-100 dark:bg-[#0F172A] px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-slate-200 dark:border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold truncate max-w-[150px] sm:max-w-none">
            n8n-production-pipeline.json
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Execution: Active
          </span>
        </div>
      </div>

      {/* Main Canvas View */}
      <div className="p-3 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Visual Pipeline Nodes */}
        <div className="lg:col-span-7 space-y-2.5">
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Click any step to inspect payload:
          </span>

          <div className="space-y-2.5">
            {nodes.map((node, index) => {
              const isSelected = activeNode === node.id;
              return (
                <div key={node.id} className="relative">
                  <button
                    onClick={() => setActiveNode(node.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between min-h-[50px] ${
                      isSelected
                        ? 'bg-sky-50 dark:bg-sky-500/15 border-sky-400 dark:border-sky-500/60 shadow-md shadow-sky-500/10 ring-1 ring-sky-400/50'
                        : 'bg-slate-50 dark:bg-[#0E172B] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                          isSelected
                            ? 'bg-sky-600 dark:bg-sky-500 text-white shadow-sm'
                            : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10'
                        }`}
                      >
                        0{index + 1}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                          <span>{node.title}</span>
                          {isSelected && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300">
                              Selected
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">{node.sub}</div>
                      </div>
                    </div>

                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${
                        isSelected ? 'text-sky-600 dark:text-sky-400' : 'text-slate-400 dark:text-slate-600'
                      }`}
                    />
                  </button>

                  {/* Connecting connector line */}
                  {index < nodes.length - 1 && (
                    <div className="h-2 w-0.5 bg-sky-400/40 dark:bg-sky-500/30 ml-6 my-0.5" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Payload & Logic Inspector */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-[#080D18] border border-slate-200 dark:border-white/10 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/5">
            <span className="text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              Node Inspector
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">JSON Validated</span>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-sky-700 dark:text-sky-300">{nodes[activeNode].title}</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              {nodes[activeNode].detail}
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Live Payload Telemetry:
            </span>
            <pre className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[11px] text-emerald-400 overflow-x-auto leading-relaxed shadow-inner">
              <code>{nodes[activeNode].payload}</code>
            </pre>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span>Latency: &lt; 45ms</span>
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3 h-3" /> Encrypted In-Transit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
