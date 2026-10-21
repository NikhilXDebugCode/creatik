import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  CheckCircle2,
  BookOpen,
} from '@/components/ui/Icons';
import { insightsArticles, InsightArticle } from '@/data/insightsData';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return insightsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Creatik AI Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedDate,
      authors: [article.author.name],
    },
  };
}

export default async function SingleInsightPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="pt-20 sm:pt-28 pb-16 sm:pb-20">
      {/* Article Header */}
      <header className="py-10 sm:py-16 md:py-20 bg-slate-50 dark:bg-[#070B14] border-b border-slate-200 dark:border-white/5 relative tech-grid-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 mb-4 sm:mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Publications</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs mb-3 sm:mb-4">
            <span className="px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-700 dark:text-sky-300 font-medium text-[11px] sm:text-xs">
              {article.category}
            </span>
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-[11px]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-500/20 border border-sky-200 dark:border-sky-500/30 flex items-center justify-center text-sky-700 dark:text-sky-400 font-bold shrink-0">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <span className="text-slate-900 dark:text-slate-200 font-semibold block">{article.author.name}</span>
                <span>{article.author.role}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Key Takeaways Callout */}
        <div className="bg-slate-50 dark:bg-[#0B1222] border border-sky-200 dark:border-sky-500/30 rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 shadow-sm">
          <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
            <span>Executive Architecture Takeaways</span>
          </h2>
          <ul className="space-y-2.5 sm:space-y-3">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400 mt-2 shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content paragraphs */}
        <div className="space-y-5 sm:space-y-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Article Footer & Related CTA */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Interested in discussing this architecture?
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              Reach out to our engineering team to review how these principles apply to your systems.
            </p>
          </div>

          <Link
            href="/contact"
            className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs sm:text-sm shadow-md transition-all shrink-0 flex items-center justify-center text-center"
          >
            Schedule Discussion
          </Link>
        </div>
      </div>
    </article>
  );
}
