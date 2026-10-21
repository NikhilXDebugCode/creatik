export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  location: {
    city: string;
    state: string;
    country: string;
    landmark: string;
    fullAddressPlaceholder: string;
    status: 'verified_city_area' | 'provisional_exact_address';
  };
  contact: {
    officialEmail: string;
    supportEmail: string;
    phonePlaceholder: string;
    phoneStatus: 'pending_confirmation';
    whatsappPlaceholder: string;
    whatsappStatus: 'pending_confirmation';
  };
  social: {
    instagram: string;
    linkedinPlaceholder: string;
    youtubePlaceholder: string;
  };
  disclaimer: string;
}

export const siteConfig: SiteConfig = {
  name: 'Creatik AI',
  legalName: 'Creatik IT Solutions LLP',
  tagline: 'Practical AI Automation, Custom Web Systems & Applied Intelligence Training',
  description:
    'Creatik AI provides enterprise-grade AI workflow automation, custom intelligent software, and hands-on professional tech training based in Jaipur, Rajasthan.',
  url: 'https://creatikai.com',
  location: {
    city: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    landmark: 'Gurjar Ki Thadi / Sultan Nagar, Gopalpura Bypass area',
    fullAddressPlaceholder: 'Gurjar Ki Thadi / Sultan Nagar, Gopalpura Bypass, Jaipur, Rajasthan 302019 (Exact office address subject to official confirmation)',
    status: 'verified_city_area',
  },
  contact: {
    officialEmail: 'sharan@creatikai.com',
    supportEmail: 'info@creatikai.com',
    phonePlaceholder: '+91 (Phone pending official verification)',
    phoneStatus: 'pending_confirmation',
    whatsappPlaceholder: '+91 (WhatsApp pending official verification)',
    whatsappStatus: 'pending_confirmation',
  },
  social: {
    instagram: 'https://www.instagram.com/creatik_ai',
    linkedinPlaceholder: 'https://linkedin.com/company/creatik-ai',
    youtubePlaceholder: 'https://youtube.com/@creatikai',
  },
  disclaimer:
    'Creatik AI maintains strict content integrity. We do not publish unsubstantiated superlatives or unconfirmed placement guarantees. All curriculum and service deliverables are based on clearly defined, practical project milestones.',
};

export const mainNavLinks = [
  {
    label: 'For Business',
    href: '/business',
    children: [
      {
        title: 'Business Solutions Overview',
        description: 'Comprehensive digital automation and software architecture for scaling organizations.',
        href: '/business',
      },
      {
        title: 'AI Automation & n8n Workflows',
        description: 'End-to-end process orchestration connecting CRM, ERP, and API endpoints.',
        href: '/business/ai-automation',
      },
      {
        title: 'AI Agents & Chatbots',
        description: 'Domain-trained conversational assistants with vector database retrieval.',
        href: '/business/ai-chatbots',
      },
      {
        title: 'Modern Web Development',
        description: 'High-performance React/Next.js web applications, client portals, and SaaS platforms.',
        href: '/business/web-development',
      },
      {
        title: 'Technical SEO & Digital Growth',
        description: 'Algorithmic search optimization, data pipelines, and conversion architecture.',
        href: '/business/seo',
      },
    ],
  },
  {
    label: 'Learn AI',
    href: '/learn-ai',
    children: [
      {
        title: 'Training Programs Overview',
        description: 'Hands-on, laboratory-style technical curriculum for students and engineering professionals.',
        href: '/learn-ai',
      },
      {
        title: 'AI & Machine Learning',
        description: 'Applied Python, LLM orchestration, model fine-tuning, and prompt engineering.',
        href: '/learn-ai/ai-ml',
      },
      {
        title: 'Full-Stack Web Development',
        description: 'Production frontend and backend engineering with Next.js, Node.js, and cloud deployments.',
        href: '/learn-ai/full-stack',
      },
      {
        title: 'Digital Marketing & Growth Systems',
        description: 'Performance marketing, programmatic SEO, and data-driven customer acquisition.',
        href: '/learn-ai/digital-marketing',
      },
      {
        title: 'Robotics & AI Coaching',
        description: 'Embedded systems, microcontrollers, sensor integration, and edge AI fundamentals.',
        href: '/learn-ai/robotics',
      },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];
