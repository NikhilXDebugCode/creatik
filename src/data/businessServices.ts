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
    title: 'AI Automation & Workflows',
    shortDescription:
      'Capture inquiries, organize customer information, and connect your business tools into reliable, time-saving automations.',
    heroHeadline: 'Eliminate Repetitive Tasks with Reliable Business Automation',
    heroSubheadline:
      'We design custom workflows that connect your website forms, CRM, messaging, and spreadsheets—saving your team hours of manual work every week.',
    targetAudience: [
      'Operations teams spending 15+ hours weekly on manual data transfer',
      'E-commerce brands handling high-volume order routing and multi-channel fulfillment',
      'Professional service firms requiring automated lead triage, onboarding, and invoicing',
    ],
    keyChallenges: [
      'Data scattered across disconnected tools (Slack, HubSpot, spreadsheets, email)',
      'Valuable staff hours spent on manual copy-pasting and repetitive follow-ups',
      'Slow lead response times causing missed sales opportunities',
      'Fragile tools breaking without notifications or error alerts',
    ],
    deliverables: [
      {
        title: 'Automated Workflow Engineering',
        description:
          'Automated multi-step pipelines with secure credentials, error recovery, and instant alerts when tasks succeed.',
        techStack: ['n8n', 'Node.js', 'Webhooks', 'REST APIs'],
      },
      {
        title: 'Customer Data Synchronization',
        description:
          'Keep your CRM, billing tools (Stripe, Razorpay), and database automatically in sync in real time.',
        techStack: ['PostgreSQL', 'Redis', 'Python', 'Supabase'],
      },
      {
        title: 'Document & Invoice Processing',
        description:
          'Extract details from invoices, PDFs, and customer inquiries cleanly into your internal systems.',
        techStack: ['Smart OCR', 'Document Parsing', 'Structured JSON'],
      },
      {
        title: 'Instant Team & Customer Alerts',
        description:
          'Notify the right team members on Slack or WhatsApp the second an important customer reaches out.',
        techStack: ['Slack API', 'WhatsApp Business', 'Email Notifications'],
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Discovery & Workflow Audit',
        description: 'We map your existing manual tasks, tools, and requirements to identify what to automate first.',
      },
      {
        step: '02',
        title: 'Prototype & Flow Design',
        description: 'Building an initial working workflow to test real-world scenarios and confirm exact behavior.',
      },
      {
        step: '03',
        title: 'Testing & Error Handling',
        description: 'Adding safety checks, retries, and failure alerts so the workflow runs reliably without supervision.',
      },
      {
        step: '04',
        title: 'Handoff & Ongoing Support',
        description: 'Providing clean documentation, team walkthroughs, and responsive ongoing support.',
      },
    ],
    integrations: ['n8n', 'PostgreSQL', 'Slack', 'HubSpot', 'Razorpay', 'Google Workspace', 'Make', 'Airtable'],
    provisionalNotice:
      'Workflow scopes and integrations are tailored to your business tools and security requirements.',
  },
  {
    id: 'ai-chatbots',
    slug: 'ai-chatbots',
    title: 'AI Assistants & Chatbots',
    shortDescription:
      'AI assistants that help answer questions, handle routine requests, and support your customers 24/7 using approved company information.',
    heroHeadline: 'Accurate AI Assistants Grounded in Your Business Knowledge',
    heroSubheadline:
      'Provide instant, accurate responses to customer questions on your website and WhatsApp—trained strictly on your verified documents to prevent false claims.',
    targetAudience: [
      'Customer support departments looking to answer routine inquiries instantly',
      'Sales teams needing smart qualification assistants that book calls directly into calendars',
      'Businesses wanting 24/7 inquiry handling across web chat and WhatsApp',
    ],
    keyChallenges: [
      'Off-the-shelf chatbots inventing false information or giving generic answers',
      'Customer frustration with rigid, robotic chatbots that fail to understand simple questions',
      'High support costs during nights, weekends, and peak periods',
      'Need to protect proprietary company guidelines and customer privacy',
    ],
    deliverables: [
      {
        title: 'Knowledge-Grounded Question Answering',
        description:
          'Assistant searches your approved price lists, catalogs, and FAQs to provide accurate answers with clear source citations.',
        techStack: ['Document Indexing', 'Context Retrieval', 'Verified Sourcing'],
      },
      {
        title: 'Action-Taking & Lead Booking',
        description:
          'Assistants capable of booking appointments, checking order status, and capturing qualified customer inquiries.',
        techStack: ['API Actions', 'Calendar Booking', 'Lead Capture'],
      },
      {
        title: 'Multi-Channel Deployment',
        description:
          'Available on your website widget, WhatsApp Business, or internal employee portals.',
        techStack: ['Website Widget', 'WhatsApp Business', 'Secure Portal'],
      },
      {
        title: 'Safety Guardrails & Human Handoff',
        description:
          'Strict boundaries prevent out-of-scope answers, with smooth instant routing to human staff when needed.',
        techStack: ['Content Guardrails', 'Team Routing', 'Audit Logging'],
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Knowledge Curation',
        description: 'Organizing your authoritative company documents, FAQs, and guidelines into a clean reference store.',
      },
      {
        step: '02',
        title: 'Assistant Persona & Boundary Design',
        description: 'Crafting brand-aligned tone, clear instructions, and strict boundaries on what questions to answer.',
      },
      {
        step: '03',
        title: 'Rigorous Accuracy Testing',
        description: 'Testing the assistant with hundreds of realistic customer questions to ensure answers are reliable.',
      },
      {
        step: '04',
        title: 'Live Launch & Monitoring',
        description: 'Deploying to your channels and reviewing conversation trends to keep answers accurate over time.',
      },
    ],
    integrations: ['WhatsApp Business', 'Slack', 'Intercom', 'Website Widget', 'FastAPI', 'Zendesk'],
    provisionalNotice:
      'All AI assistants undergo strict boundary testing to ensure they communicate only verified company information.',
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development & Applications',
    shortDescription:
      'Fast, responsive websites built around your business needs with clean design, mobile speed, and dependable functionality.',
    heroHeadline: 'Fast, Responsive Websites Built for Your Business Needs',
    heroSubheadline:
      'We create modern, reliable websites and custom web applications designed to load fast on any phone or laptop, look professional, and turn visitors into customers.',
    targetAudience: [
      'Growing businesses looking to replace slow, outdated templates with modern systems',
      'Founders requiring custom client portals, dashboards, or web applications',
      'Companies demanding instant mobile loading speeds and polished visual presentation',
    ],
    keyChallenges: [
      'Slow websites that lose potential customers on mobile devices',
      'Outdated templates that are difficult to update and vulnerable to security bugs',
      'Inconsistent design that fails to communicate authority and trust',
      'Poor search optimization that keeps prospective customers from discovering your business',
    ],
    deliverables: [
      {
        title: 'Responsive Websites & Web Apps',
        description:
          'Clean Next.js and React code engineered for fast mobile loading, high security, and easy navigation.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      },
      {
        title: 'Client Portals & Management Dashboards',
        description:
          'Secure login areas, customer data views, and internal dashboards tailored to your daily operations.',
        techStack: ['Secure Auth', 'PostgreSQL', 'Interactive Tables'],
      },
      {
        title: 'Content Management Integration',
        description:
          'Easy-to-use content editors that allow your team to update text, blogs, and images without touching code.',
        techStack: ['Headless CMS', 'Modern Admin Panels'],
      },
      {
        title: 'Search Optimization & Speed Tuning',
        description:
          'Fast Core Web Vitals, structured metadata, and responsive layouts that help your site rank higher on Google.',
        techStack: ['Mobile Speed', 'Schema Metadata', 'Performance Caching'],
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Structure & User Journey Planning',
        description: 'Mapping clear sitemaps, key service pages, and conversion flows so visitors find answers fast.',
      },
      {
        step: '02',
        title: 'Design & Responsive Prototyping',
        description: 'Creating polished, accessible layouts tuned for smartphones, tablets, and desktop displays.',
      },
      {
        step: '03',
        title: 'Development & Integration',
        description: 'Building clean code, integrating inquiry forms, and connecting databases and messaging alerts.',
      },
      {
        step: '04',
        title: 'Launch & Performance Verification',
        description: 'Testing across mobile devices, setting up secure hosting, and verifying top-tier loading speeds.',
      },
    ],
    integrations: ['Vercel', 'AWS', 'PostgreSQL', 'GitHub Actions', 'Stripe', 'Google Analytics'],
  },
  {
    id: 'seo',
    slug: 'seo',
    title: 'Search Visibility & Digital Growth',
    shortDescription:
      'Clear technical optimization, fast page speeds, and structured content designed to help customers discover your services on Google.',
    heroHeadline: 'Help Customers Discover Your Business on Search Engines',
    heroSubheadline:
      'We combine clean site architecture, mobile speed optimization, and structured search metadata to increase your organic Google visibility without empty ranking gimmicks.',
    targetAudience: [
      'Local and national businesses wanting steady organic inquiries from Google',
      'Companies suffering from slow page load speeds or technical crawl issues',
      'Businesses launching new websites that need clean search fundamentals from day one',
    ],
    keyChallenges: [
      'Low search visibility causing over-reliance on expensive paid ads',
      'Technical errors (slow mobile load, broken redirects, missing schemas) hurting Google indexing',
      'Vague advice from agencies that report impressions rather than customer inquiries',
      'Algorithm updates that penalize low-quality, keyword-stuffed content',
    ],
    deliverables: [
      {
        title: 'Technical Search Architecture Audit',
        description:
          'Fixing mobile page speed bottlenecks, indexing errors, crawl waste, and broken redirects.',
        techStack: ['Core Web Vitals', 'Crawl Telemetry', 'Sitemap Architecture'],
      },
      {
        title: 'Structured Schema & Rich Snippets',
        description:
          'Adding Organization, Service, Course, and FAQ schemas so Google accurately displays your business details.',
        techStack: ['JSON-LD', 'Schema.org', 'Rich Snippets Test'],
      },
      {
        title: 'High-Intent Landing Page Optimization',
        description:
          'Structuring service and course pages to answer what customers are actively searching for.',
        techStack: ['Search Intent Mapping', 'Clear Headings', 'On-Page SEO'],
      },
      {
        title: 'Transparent Performance Telemetry',
        description:
          'Direct Google Search Console and GA4 tracking showing real user clicks and inquiry conversions.',
        techStack: ['Search Console', 'GA4 Analytics', 'Conversion Telemetry'],
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Technical Crawl & Speed Audit',
        description: 'Evaluating mobile load speeds, URL indexability, and structural bottlenecks.',
      },
      {
        step: '02',
        title: 'Schema & Architecture Fixes',
        description: 'Implementing structured data schemas, canonical links, and fast server responses.',
      },
      {
        step: '03',
        title: 'Service Page Content Structuring',
        description: 'Refining headings, FAQs, and key service answers to match customer search terms.',
      },
      {
        step: '04',
        title: 'Tracking & Continuous Optimization',
        description: 'Monitoring impressions, keyword movements, and real inquiry conversions on Search Console.',
      },
    ],
    integrations: ['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'SEMrush', 'Screaming Frog'],
  },
];
