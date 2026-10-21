export interface BusinessService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  targetAudience: string[];
  keyChallenges: string[];
  deliverables: {
    title: string;
    description: string;
    techStack: string[];
  }[];
  workflowSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  integrations: string[];
  provisionalNotice?: string;
}

export const businessServices: BusinessService[] = [
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI Automation & n8n Workflows',
    shortDescription:
      'Autonomous business workflows connecting CRM, ERP, email pipelines, and databases with resilient failure handling.',
    heroHeadline: 'Eliminate Repetitive Tasks with Enterprise Workflow Orchestration',
    heroSubheadline:
      'We architect self-hosted and cloud-managed n8n pipelines, Python automation scripts, and event-driven architectures that sync your critical operations 24/7 without manual intervention.',
    targetAudience: [
      'Operations teams spending 15+ hours weekly on manual data transfer',
      'E-commerce brands handling high-volume order routing and multi-channel fulfillment',
      'Professional service firms requiring automated lead triage, onboarding, and invoicing',
    ],
    keyChallenges: [
      'Data fragmentation across disconnected SaaS tools (Slack, HubSpot, PostgreSQL, Sheets)',
      'High operational payroll costs spent on manual reconciliation and copy-paste tasks',
      'Delayed lead response times resulting in decreased conversion rates',
      'Fragile no-code zaps breaking without alerts or audit logging',
    ],
    deliverables: [
      {
        title: 'n8n Workflow Engineering',
        description:
          'Self-hosted or managed n8n nodes with encrypted credential vaults, webhooks, error-recovery fallbacks, and execution metrics.',
        techStack: ['n8n', 'Node.js', 'Docker', 'Webhooks', 'REST APIs'],
      },
      {
        title: 'Multi-System Synchronization Pipelines',
        description:
          'Bidirectional real-time and scheduled batch synchronization across CRMs, billing systems (Stripe, Razorpay), and database stores.',
        techStack: ['PostgreSQL', 'Redis', 'Python', 'Supabase'],
      },
      {
        title: 'Document & Invoice Processing with OCR/LLMs',
        description:
          'Automated data extraction from PDFs, invoices, and purchase orders directly into accounting software with human-in-the-loop validation.',
        techStack: ['OpenAI Vision', 'Tesseract OCR', 'Python PyPDF', 'Structured JSON'],
      },
      {
        title: 'Automated Communication & Triage Engines',
        description:
          'Intelligent email parsing, sentiment scoring, auto-routing to specific team inboxes, and instant SLA notifications via Slack or WhatsApp.',
        techStack: ['Slack API', 'SendGrid', 'Twilio', 'WhatsApp Business API'],
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Process Discovery & Architecture Audit',
        description: 'We map out your exact manual bottlenecks, inputs, outputs, and system dependencies.',
      },
      {
        step: '02',
        title: 'Prototype & Schema Design',
        description: 'Building isolated sandbox workflows with simulated payload tests and rate-limit safeguards.',
      },
      {
        step: '03',
        title: 'Production Staging & Error Handling',
        description: 'Deploying robust logging, retry queues, and alert webhooks for unhandled exceptions.',
      },
      {
        step: '04',
        title: 'Handoff, Documentation & Retainer Support',
        description: 'Providing comprehensive system documentation, architecture diagrams, and ongoing pipeline maintenance.',
      },
    ],
    integrations: ['n8n', 'PostgreSQL', 'Slack', 'HubSpot', 'Razorpay', 'Google Workspace', 'Make', 'Airtable'],
    provisionalNotice:
      'Service scope and custom node architectures are evaluated individually based on client security requirements and system API capabilities.',
  },
  {
    id: 'ai-chatbots',
    slug: 'ai-chatbots',
    title: 'AI Agents & Chatbots',
    shortDescription:
      'Domain-tuned conversational intelligence powered by retrieval-augmented generation (RAG) and tool-calling capabilities.',
    heroHeadline: 'Context-Aware AI Agents Engineered for High-Fidelity Business Operations',
    heroSubheadline:
      'Move beyond canned script bots. We develop conversational AI systems grounded in your proprietary documents, product catalogs, and live API endpoints.',
    targetAudience: [
      'Customer support departments aiming to resolve tier-1 queries instantaneously',
      'B2B sales teams needing qualification bots that book meetings directly in reps’ calendars',
      'Internal knowledge bases seeking fast search across employee handbooks, SOPs, and technical specs',
    ],
    keyChallenges: [
      'Hallucinations and inaccurate answers from off-the-shelf generative AI models',
      'Customer frustration with rigid rule-based chatbots unable to comprehend synonyms or intent',
      'High support desk staffing expenses across nights and weekend shifts',
      'Strict corporate data confidentiality rules prohibiting raw data sharing with public clouds',
    ],
    deliverables: [
      {
        title: 'Retrieval-Augmented Generation (RAG) Systems',
        description:
          'Vector embeddings search over internal PDFs, documentation, and database tables to deliver verifiable citations with every response.',
        techStack: ['LangChain', 'LlamaIndex', 'Pinecone', 'pgvector', 'OpenAI'],
      },
      {
        title: 'Tool-Calling & Autonomous Action Agents',
        description:
          'Agents capable of looking up live shipping status, verifying user accounts, initiating returns, and reserving appointments via secure API execution.',
        techStack: ['FastAPI', 'Function Calling', 'OAuth 2.0', 'Python'],
      },
      {
        title: 'Multi-Channel Deployment',
        description:
          'Unified conversational engines embedded across web widgets, WhatsApp Business API, Telegram, and customer portals.',
        techStack: ['Next.js React Embed', 'Twilio WhatsApp', 'WebSockets'],
      },
      {
        title: 'Guardrails & Hallucination Suppression',
        description:
          'Strict prompt boundary layers, PII anonymization, confidence scoring, and seamless fallback to human agents.',
        techStack: ['NeMo Guardrails', 'LangSmith', 'Prompt Auditing'],
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Knowledge Base Curation & Sanitization',
        description: 'Extracting, chunking, and indexing your authoritative company knowledge into vector stores.',
      },
      {
        step: '02',
        title: 'Prompt Boundary & Tool Engineering',
        description: 'Writing precision system prompts, defining API tool schemas, and enforcing negative constraints.',
      },
      {
        step: '03',
        title: 'Evaluation & Red-Teaming',
        description: 'Rigorous benchmarking across 100+ edge-case customer inquiries to measure hallucination rates.',
      },
      {
        step: '04',
        title: 'Continuous Monitoring & Reinforcement',
        description: 'Tracking conversation sentiment, deflection rates, and updating vector embeddings as documentation evolves.',
      },
    ],
    integrations: ['WhatsApp Business', 'Slack', 'Intercom', 'Pinecone', 'FastAPI', 'LangChain', 'Zendesk'],
    provisionalNotice:
      'All AI agent deployments include boundary testing to ensure outputs remain strictly within verified business source materials.',
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Modern Web Development',
    shortDescription:
      'High-performance Next.js and React web applications, conversion-engineered corporate portals, and custom SaaS frontends.',
    heroHeadline: 'Engineered for Performance, Conversion, and Operational Scale',
    heroSubheadline:
      'We design and build clean, accessible, lightning-fast web applications with clean TypeScript architectures, headless CMS integrations, and robust database layers.',
    targetAudience: [
      'Growth companies ready to upgrade from slow, bloated templates to scalable architectures',
      'Founders requiring custom web dashboards, client management portals, or SaaS MVPs',
      'Enterprises demanding sub-second load speeds, high Core Web Vitals, and responsive UI across all screens',
    ],
    keyChallenges: [
      'Slow legacy websites suffering high bounce rates and poor mobile user experience',
      'Difficult-to-maintain codebases full of conflicting plugins and security vulnerabilities',
      'Disconnected frontend UI lacking integration with modern backend databases and third-party APIs',
      'Poor technical SEO fundamentals harming organic search rankings',
    ],
    deliverables: [
      {
        title: 'Full-Stack Next.js & React Applications',
        description:
          'Server Components, optimized client interactivity, static generation, and edge caching for optimal speed and reliability.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      },
      {
        title: 'Client Portals & Admin Dashboards',
        description:
          'Role-based access control (RBAC), data visualization, interactive tables, and secure authentication.',
        techStack: ['Auth0', 'NextAuth', 'PostgreSQL', 'Prisma', 'Tailwind'],
      },
      {
        title: 'Headless CMS & Content Pipelines',
        description:
          'Sanity, Strapi, or Supabase integrations empowering non-technical team members to manage content without touching production code.',
        techStack: ['Sanity.io', 'Supabase', 'REST / GraphQL'],
      },
      {
        title: 'API Development & Database Design',
        description:
          'Normalized relational databases, cache layers, automated backups, and documented REST/gRPC endpoints.',
        techStack: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Information Architecture & Wireframing',
        description: 'Mapping user journeys, sitemaps, conversion funnels, and component design tokens.',
      },
      {
        step: '02',
        title: 'Component Development & Design System',
        description: 'Building modular, accessible, reusable UI components adhering to WCAG 2.1 standards.',
      },
      {
        step: '03',
        title: 'Backend Integration & Rigorous Testing',
        description: 'Wiring up forms, databases, authentication, and cross-browser responsiveness.',
      },
      {
        step: '04',
        title: 'Performance Optimization & Deployment',
        description: 'Achieving 95+ Core Web Vitals scores, configuring CDNs, SSL certificates, and CI/CD pipelines.',
      },
    ],
    integrations: ['Vercel', 'AWS', 'PostgreSQL', 'Supabase', 'GitHub Actions', 'Docker', 'Stripe'],
  },
  {
    id: 'seo',
    slug: 'seo',
    title: 'Technical SEO & Digital Solutions',
    shortDescription:
      'Data-driven organic visibility, technical site health audits, programmatic SEO architecture, and search visibility strategy.',
    heroHeadline: 'Algorithmic Organic Growth Built on Technical Integrity',
    heroSubheadline:
      'We audit and engineer every layer of search visibility—from schema markup and Core Web Vitals to content authority structures and keyword intent alignment.',
    targetAudience: [
      'Companies with declining or stagnant organic traffic seeking deep technical diagnosis',
      'E-commerce catalogs and service brands wanting to dominate localized and national intent queries',
      'Businesses requiring clean, white-hat search marketing and verifiable conversion tracking',
    ],
    keyChallenges: [
      'Crawl errors, broken redirect chains, and duplicate content diluting domain authority',
      'Slow mobile page speeds hurting search rankings on Google’s mobile-first index',
      'Poorly structured schema data causing missed rich snippets and search visibility features',
      'High ad spend burnout due to reliance on paid PPC without an underlying organic engine',
    ],
    deliverables: [
      {
        title: 'Comprehensive Technical SEO Audit',
        description:
          'Deep crawl analysis identifying indexing blockers, internal linking gaps, canonicalization mistakes, and sitemap inefficiencies.',
        techStack: ['Screaming Frog', 'Google Search Console', 'Ahrefs', 'Lighthouse'],
      },
      {
        title: 'Structured Data & Rich Snippet Engineering',
        description:
          'JSON-LD implementation for Organization, FAQ, Service, BreadcrumbList, and Article schemas validated against Google guidelines.',
        techStack: ['Schema.org', 'JSON-LD', 'Next.js Metadata API'],
      },
      {
        title: 'Performance & Core Web Vitals Tuning',
        description:
          'Minifying scripts, optimizing LCP/CLS metrics, caching strategies, and asset compression for top-tier speed scores.',
        techStack: ['WebP/AVIF', 'Font Optimization', 'Next/Image', 'Edge Caching'],
      },
      {
        title: 'Search Intent Content Strategy',
        description:
          'Developing semantic topical clusters and customer-journey-focused content outlines to build long-term domain authority.',
        techStack: ['Keyword Research', 'Topical Maps', 'Competitor Gap Analysis'],
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Baseline Crawl & Technical Audit',
        description: 'Benchmarking indexing health, 404s, redirect loops, and server response times.',
      },
      {
        step: '02',
        title: 'On-Page & Architectural Fixes',
        description: 'Correcting heading hierarchy, canonicals, robots.txt, sitemaps, and mobile layout shifts.',
      },
      {
        step: '03',
        title: 'Structured Data & Schema Deployment',
        description: 'Injecting verified JSON-LD metadata for maximum rich result eligibility.',
      },
      {
        step: '04',
        title: 'Tracking, Analytics & Monthly Reporting',
        description: 'Setting up GA4 event tracking, Search Console goal funnels, and transparent progress reports.',
      },
    ],
    integrations: ['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'SEMrush', 'Screaming Frog'],
  },
];
