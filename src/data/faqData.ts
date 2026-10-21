export interface FAQItem {
  id: string;
  category: 'business' | 'learning' | 'general';
  question: string;
  answer: string;
  provisionalNote?: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'b1',
    category: 'business',
    question: 'How do you determine if our company needs custom workflow automation or an AI agent?',
    answer:
      'We conduct a structured discovery assessment of your current operational bottlenecks. Deterministic, repetitive tasks (like data sync between CRM and spreadsheets or invoice extraction) are best served by n8n workflow pipelines. Contextual, unstructured interactions (like customer support queries or employee handbook search) require RAG-powered AI agents.',
  },
  {
    id: 'b2',
    category: 'business',
    question: 'Where are our business data and API credentials hosted during workflow execution?',
    answer:
      'We prioritize security and sovereign hosting. We can deploy workflow nodes (such as n8n) on your own private cloud or dedicated servers (AWS, DigitalOcean, or private VPS), meaning your sensitive customer data never transits our systems or unauthorized public endpoints.',
  },
  {
    id: 'b3',
    category: 'business',
    question: 'Do you provide ongoing maintenance and monitoring after implementation?',
    answer:
      'Yes. Complex business automations and AI pipelines require ongoing monitoring for third-party API changes, token rate limits, and schema updates. We offer tailored SLA support retainers including error alert monitoring and pipeline optimizations.',
  },
  {
    id: 'b4',
    category: 'business',
    question: 'How do you price business consulting and development projects?',
    answer:
      'Every project is scoped individually based on verified system architecture, integration complexity, and delivery milestones. We do not publish generic flat rates because enterprise requirements vary significantly in security compliance and data volume.',
    provisionalNote: 'Detailed pricing proposals are provided following an initial technical discovery consultation.',
  },
  {
    id: 'l1',
    category: 'learning',
    question: 'Are Creatik AI training programs available online, in-person, or both?',
    answer:
      'We provide practical, hands-on training sessions with physical laboratory workshops in Jaipur, Rajasthan, alongside structured remote cohorts for select technical tracks.',
    provisionalNote: 'Specific delivery mode depends on the track (e.g. Robotics coaching includes physical laboratory kits in Jaipur).',
  },
  {
    id: 'l2',
    category: 'learning',
    question: 'Do you guarantee jobs or 100% placement?',
    answer:
      'No. We adhere strictly to ethical advertising standards and do not make unsubstantiated "100% placement guarantees." What we provide is rigorous, project-based engineering training, real pull-request code reviews, interview preparation, and portfolio systems designed to meet actual industry hiring standards.',
  },
  {
    id: 'l3',
    category: 'learning',
    question: 'What are the prerequisites for joining the AI & Machine Learning program?',
    answer:
      'A foundational understanding of programming concepts (variables, loops, functions in Python or another language) and basic high school mathematics is recommended. Dedicated catch-up modules are provided for students strengthening their fundamentals.',
  },
  {
    id: 'l4',
    category: 'learning',
    question: 'How can I receive the syllabus, fee structure, and upcoming cohort dates?',
    answer:
      'Please submit an inquiry via our contact form specifying your program of interest. Our admissions counselor will provide the verified syllabus PDF, batch schedule, and fee details for the upcoming cohort.',
  },
  {
    id: 'g1',
    category: 'general',
    question: 'Where is Creatik AI located?',
    answer:
      'Creatik AI operates under Creatik IT Solutions LLP and is located in the Gurjar Ki Thadi / Sultan Nagar, Gopalpura Bypass area in Jaipur, Rajasthan, India.',
  },
  {
    id: 'g2',
    category: 'general',
    question: 'Why does Creatik AI separate business solutions and training programs?',
    answer:
      'We serve two distinct audiences with differing goals: enterprise clients require mission-critical software and automated operations, while students and engineering professionals seek structured technical career advancement. Keeping these journeys distinct ensures clear, targeted service delivery for both.',
  },
];
