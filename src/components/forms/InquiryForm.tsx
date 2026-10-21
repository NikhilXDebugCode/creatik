'use client';

import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  GraduationCap,
  Loader2,
  Lock,
} from '@/components/ui/Icons';
import { businessServices } from '@/data/businessServices';
import { learningPrograms } from '@/data/learningPrograms';

interface InquiryFormProps {
  initialAudience?: 'business' | 'learning';
  initialServiceId?: string;
  sourcePage?: string;
  onSuccess?: () => void;
}

export function InquiryForm({
  initialAudience = 'business',
  initialServiceId = '',
  sourcePage = 'Direct Contact',
  onSuccess,
}: InquiryFormProps) {
  const [audience, setAudience] = useState<'business' | 'learning'>(initialAudience);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceOrProgram: initialServiceId || '',
    timeline: 'Within 30 Days',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email format (e.g., name@domain.com).';
    }
    if (!formData.serviceOrProgram) {
      errors.serviceOrProgram =
        audience === 'business'
          ? 'Please select the business solution you require.'
          : 'Please select the training program of interest.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errors.message = 'Please provide at least 15 characters detailing your inquiry.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          audience,
          sourcePage,
          submittedAt: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setStatus('success');
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      setStatus('error');
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('An unexpected network error occurred. Please contact us directly at sharan@creatikai.com');
      }
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 dark:bg-[#0B1222] border border-emerald-300 dark:border-emerald-500/30 rounded-2xl p-8 text-center shadow-lg">
        <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Inquiry Successfully Received</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
          Thank you for reaching out to Creatik AI. Our technical engineering team (for business solutions) or admissions coordinator (for learning tracks) will review your requirements and respond via email within 1 business day.
        </p>
        <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto text-left mb-6 shadow-sm">
          <p className="mb-1"><strong className="text-slate-900 dark:text-white">Audience:</strong> {audience === 'business' ? 'Enterprise / Business Solutions' : 'Learning & Training Track'}</p>
          <p className="mb-1"><strong className="text-slate-900 dark:text-white">Primary Interest:</strong> {formData.serviceOrProgram}</p>
          <p><strong className="text-slate-900 dark:text-white">Target Email:</strong> {formData.email}</p>
        </div>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({
              name: '',
              email: '',
              phone: '',
              organization: '',
              serviceOrProgram: '',
              timeline: 'Within 30 Days',
              message: '',
            });
          }}
          className="px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-[#0A101D] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6"
      noValidate
    >
      {/* Audience Track Switcher */}
      <div>
        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
          Select Your Inquiry Type
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => {
              setAudience('business');
              setFormData((prev) => ({ ...prev, serviceOrProgram: '' }));
            }}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
              audience === 'business'
                ? 'bg-sky-50 border-sky-400 text-sky-800 dark:bg-sky-500/15 dark:border-sky-500/50 dark:text-sky-300 shadow-sm'
                : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>For Business</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setAudience('learning');
              setFormData((prev) => ({ ...prev, serviceOrProgram: '' }));
            }}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
              audience === 'learning'
                ? 'bg-emerald-50 border-emerald-400 text-emerald-800 dark:bg-emerald-500/15 dark:border-emerald-500/50 dark:text-emerald-300 shadow-sm'
                : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Learn AI</span>
          </button>
        </div>
      </div>

      {/* Basic Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Vikram Sharma"
            className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0E172B] border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
              validationErrors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-white/10'
            }`}
          />
          {validationErrors.name && (
            <p className="text-xs text-rose-500 mt-1">{validationErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="vikram@example.com"
            className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0E172B] border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
              validationErrors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-white/10'
            }`}
          />
          {validationErrors.email && (
            <p className="text-xs text-rose-500 mt-1">{validationErrors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="organization" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            {audience === 'business' ? 'Company / Organization' : 'College / Current Background'}
          </label>
          <input
            id="organization"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder={audience === 'business' ? 'e.g. Acme Logistics Pvt Ltd' : 'e.g. Final Year B.Tech / Working Pro'}
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Phone / Contact Number (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
          />
        </div>
      </div>

      {/* Dynamic Service / Track dropdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="serviceOrProgram" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            {audience === 'business' ? 'Service Required' : 'Program Track'}{' '}
            <span className="text-rose-500">*</span>
          </label>
          <select
            id="serviceOrProgram"
            value={formData.serviceOrProgram}
            onChange={(e) => setFormData({ ...formData, serviceOrProgram: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0E172B] border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
              validationErrors.serviceOrProgram
                ? 'border-rose-500 ring-1 ring-rose-500'
                : 'border-slate-200 dark:border-white/10'
            }`}
          >
            <option value="">-- Please select an option --</option>
            {audience === 'business'
              ? businessServices.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))
              : learningPrograms.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title}
                  </option>
                ))}
          </select>
          {validationErrors.serviceOrProgram && (
            <p className="text-xs text-rose-500 mt-1">{validationErrors.serviceOrProgram}</p>
          )}
        </div>

        <div>
          <label htmlFor="timeline" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            {audience === 'business' ? 'Project Timeline' : 'Preferred Batch Start'}
          </label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0E172B] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
          >
            <option value="Immediate / Urgent">Immediate / Within 2 Weeks</option>
            <option value="Within 30 Days">Within 30 Days</option>
            <option value="Next Quarter">Next Quarter</option>
            <option value="Exploring Options">Exploring Options / General Consultation</option>
          </select>
        </div>
      </div>

      {/* Message textarea */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          {audience === 'business'
            ? 'Describe Your Project Goals & Existing Systems'
            : 'Share Your Background & Goals for This Course'}{' '}
          <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={
            audience === 'business'
              ? 'Tell us about the manual bottlenecks, databases, or API integrations you need built or automated...'
              : 'Tell us about your current programming experience and what you want to achieve through this training...'
          }
          className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0E172B] border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
            validationErrors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-white/10'
          }`}
        />
        {validationErrors.message && (
          <p className="text-xs text-rose-500 mt-1">{validationErrors.message}</p>
        )}
      </div>

      {/* Error state alert */}
      {status === 'error' && (
        <div className="p-3.5 rounded-lg bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-300">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Privacy guarantee & submit button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
          <Lock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
          <span>Strict privacy: No spam, marketing blasts, or unauthorized data sharing.</span>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 disabled:opacity-50 text-white font-medium text-sm shadow-md shadow-sky-600/20 transition-all"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Send Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
