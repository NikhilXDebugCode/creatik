export interface SiteConfig {
  name: string;
  legalName: string;
  llpin: string;
  incorporationDate: string;
  tagline: string;
  description: string;
  url: string;
  location: {
    city: string;
    state: string;
    country: string;
    landmark: string;
    fullAddressPlaceholder: string;
    status: 'verified' | 'verified_city_area' | 'provisional_exact_address';
  };
  contact: {
    officialEmail: string;
    supportEmail: string;
    phone: string;
    alternatePhone: string;
    phonePlaceholder: string;
    phoneStatus: 'verified' | 'pending_confirmation';
    whatsapp: string;
    whatsappPlaceholder: string;
    whatsappStatus: 'verified' | 'pending_confirmation';
  };
  leadership: {
    name: string;
    role: string;
    roleType: 'designated_partner' | 'operations_lead';
    verifiedSource: string;
    bio: string;
    sourceUrl: string;
  }[];
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
  llpin: 'AAL-3046',
  incorporationDate: 'December 4, 2017',
  tagline: 'Practical AI Automation, Custom Web Systems & Applied Intelligence Training',
  description:
    'Creatik AI (operated under Creatik IT Solutions LLP) provides enterprise-grade AI workflow automation, custom intelligent software, and hands-on professional tech training based in Jaipur, Rajasthan.',
  url: 'https://creatikai.com',
  location: {
    city: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    landmark: 'Plot No. 30-A, Sultan Nagar, Gurjar Ki Thadi, Gopalpura Bypass',
    fullAddressPlaceholder: 'Plot No. 30-A, Sultan Nagar, Gurjar Ki Thadi, Gopalpura Bypass, Jaipur, Rajasthan 302019, India',
    status: 'verified',
  },
  contact: {
    officialEmail: 'sharan@creatikai.com',
    supportEmail: 'info@creatikai.com',
    phone: '+91 96499 02000',
    alternatePhone: '+91 99506 02330',
    phonePlaceholder: '+91 96499 02000',
    phoneStatus: 'verified',
    whatsapp: '+91 96499 02000',
    whatsappPlaceholder: '+91 96499 02000',
    whatsappStatus: 'verified',
  },
  leadership: [
    {
      name: 'Aditi Goyal',
      role: 'Designated Partner',
      roleType: 'designated_partner',
      verifiedSource: 'Ministry of Corporate Affairs (MCA) / RoC Jaipur Corporate Registry',
      bio: 'Designated Partner of Creatik IT Solutions LLP (LLPIN: AAL-3046), legally entrusted with organizational compliance, strategic governance, and corporate management since firm incorporation.',
      sourceUrl: 'https://www.zaubacorp.com/company/CREATIK-IT-SOLUTIONS-LLP/AAL-3046',
    },
    {
      name: 'Saroj Goyal',
      role: 'Designated Partner',
      roleType: 'designated_partner',
      verifiedSource: 'Ministry of Corporate Affairs (MCA) / RoC Jaipur Corporate Registry',
      bio: 'Designated Partner of Creatik IT Solutions LLP (LLPIN: AAL-3046), serving as statutory partner overseeing firm compliance and governance frameworks.',
      sourceUrl: 'https://www.zaubacorp.com/company/CREATIK-IT-SOLUTIONS-LLP/AAL-3046',
    },
    {
      name: 'Sharan',
      role: 'Operations & Technical Leadership',
      roleType: 'operations_lead',
      verifiedSource: 'Official Company Communications (sharan@creatikai.com) & Published Institutional Outreach',
      bio: 'Directs technical outreach, client automation engagements, enterprise consulting communications, and applied technical training modules at Creatik AI.',
      sourceUrl: 'https://creatikai.com',
    },
  ],
  social: {
    instagram: 'https://www.instagram.com/creatik_ai',
    linkedinPlaceholder: 'https://www.linkedin.com/company/creatik-ai',
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
