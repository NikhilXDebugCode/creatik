export interface LearningProgram {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  targetAudience: string[];
  learningOutcomes: string[];
  curriculumModules: {
    moduleNumber: string;
    title: string;
    topics: string[];
    handsOnProject: string;
  }[];
  prerequisites: string[];
  toolsCovered: string[];
  provisionalNotice?: string;
  batchScheduleStatus: 'pending_schedule_announcement';
}

export const learningPrograms: LearningProgram[] = [
  {
    id: 'ai-ml',
    slug: 'ai-ml',
    title: 'Applied AI & Machine Learning Engineering',
    shortDescription:
      'Laboratory-grade training covering Python fundamentals, neural networks, LLM fine-tuning, retrieval systems, and edge deployment.',
    heroHeadline: 'Master Applied Machine Learning & Generative AI Systems',
    heroSubheadline:
      'A practical, project-driven training curriculum built for software engineers, data analysts, and computer science students aiming to build and deploy production machine learning pipelines.',
    targetAudience: [
      'Software engineers transitioning into applied AI engineering',
      'Computer science and data science students seeking hands-on portfolio projects',
      'Technical product managers needing deep mechanistic understanding of model capabilities',
    ],
    learningOutcomes: [
      'Write production-grade Python pipelines for data preprocessing and feature engineering',
      'Train, evaluate, and tune supervised and unsupervised machine learning models',
      'Architect Retrieval-Augmented Generation (RAG) applications using vector databases',
      'Fine-tune open-weight models (Llama, Mistral) with PEFT and LoRA techniques',
      'Deploy containerized model endpoints with FastAPI, Docker, and cloud inference runtimes',
    ],
    curriculumModules: [
      {
        moduleNumber: '01',
        title: 'Python for Data Science & Linear Algebra Foundations',
        topics: ['NumPy vectorization', 'Pandas data frames', 'Data cleaning', 'Matrix operations', 'Calculus for gradient descent'],
        handsOnProject: 'Building a custom numerical analysis toolkit and exploratory data dashboard from scratch.',
      },
      {
        moduleNumber: '02',
        title: 'Classical Machine Learning & Statistical Modeling',
        topics: ['Linear/Logistic regression', 'Decision trees & Random Forests', 'Gradient boosting (XGBoost)', 'Model evaluation & cross-validation'],
        handsOnProject: 'End-to-end customer churn prediction pipeline with feature importance scoring and ROC-AUC validation.',
      },
      {
        moduleNumber: '03',
        title: 'Deep Learning & Neural Architectures',
        topics: ['PyTorch fundamentals', 'Multi-layer perceptrons', 'Backpropagation mechanics', 'Convolutional neural networks', 'Transfer learning'],
        handsOnProject: 'Defect detection system for industrial manufacturing images using PyTorch and ResNet backbones.',
      },
      {
        moduleNumber: '04',
        title: 'Generative AI, LLMs & Retrieval-Augmented Generation (RAG)',
        topics: ['Transformer self-attention mechanism', 'Vector embeddings & indexing', 'LangChain & LlamaIndex', 'Prompt engineering & Guardrails'],
        handsOnProject: 'Domain-specific enterprise document assistant with hybrid dense/sparse retrieval and verifiable citations.',
      },
      {
        moduleNumber: '05',
        title: 'Model Deployment, MLOps & API Engineering',
        topics: ['FastAPI microservices', 'Docker containerization', 'Quantization (GGUF, AWQ)', 'Latency benchmarking & telemetry'],
        handsOnProject: 'Production-ready inference API with asynchronous queuing and Prometheus latency tracking.',
      },
    ],
    prerequisites: [
      'Basic familiarity with programming logic (variables, loops, functions in any language)',
      'High school level mathematics (algebra, basic probability)',
      'A dedicated laptop running Windows, macOS, or Linux with at least 8GB RAM',
    ],
    toolsCovered: ['Python', 'PyTorch', 'Scikit-Learn', 'Pandas', 'FastAPI', 'Docker', 'Hugging Face', 'Pinecone', 'Jupyter'],
    provisionalNotice:
      'Exact batch timing, class schedules, and fee structures are announced per cohort. Inquire directly for syllabus alignment with your technical background.',
    batchScheduleStatus: 'pending_schedule_announcement',
  },
  {
    id: 'full-stack',
    slug: 'full-stack',
    title: 'Full-Stack Web Development & Modern Architecture',
    shortDescription:
      'End-to-end web engineering using React, Next.js, Node.js, TypeScript, PostgreSQL, and scalable cloud deployments.',
    heroHeadline: 'Build Scalable, Production-Grade Web Applications from Day One',
    heroSubheadline:
      'Step away from simplistic toy tutorials. Learn modern component engineering, database normalization, asynchronous backend services, and clean system design.',
    targetAudience: [
      'Aspiring web developers seeking a rigorous engineering foundation',
      'Backend programmers wanting to master modern React 19 and Next.js App Router',
      'Founders wanting to prototype, launch, and maintain their own full-stack SaaS platforms',
    ],
    learningOutcomes: [
      'Master modern TypeScript, asynchronous JavaScript, and reactive UI architecture',
      'Build full-stack applications with Next.js App Router, Server Components, and Server Actions',
      'Design relational schemas, write optimized SQL queries, and manage migrations with Prisma / Drizzle',
      'Implement secure authentication flows, session handling, and role-based access control (RBAC)',
      'Deploy resilient web systems to cloud infrastructure with automated CI/CD pipelines',
    ],
    curriculumModules: [
      {
        moduleNumber: '01',
        title: 'Advanced JavaScript, Modern TypeScript & Core CS',
        topics: ['Event loop & concurrency', 'Closures & prototypes', 'TypeScript type systems & generics', 'DOM manipulation & browser APIs'],
        handsOnProject: 'Building a lightweight reactive state store and virtual DOM simulator without external libraries.',
      },
      {
        moduleNumber: '02',
        title: 'Component Architecture with React & Tailwind CSS',
        topics: ['Hooks & custom primitives', 'State machines & context', 'Tailwind design systems', 'Accessibility (a11y) & keyboard navigation'],
        handsOnProject: 'Design system library featuring fully accessible modal dialogues, datatables, and toast notifications.',
      },
      {
        moduleNumber: '03',
        title: 'Server-Side Engineering with Next.js & Node.js',
        topics: ['Next.js App Router', 'React Server Components', 'Streaming SSR', 'REST & GraphQL API design', 'Middleware & Edge execution'],
        handsOnProject: 'High-throughput e-commerce catalog with instant server filtering, optimistic UI updates, and checkout flows.',
      },
      {
        moduleNumber: '04',
        title: 'Databases, ORMs & Secure Backend Systems',
        topics: ['PostgreSQL schema design', 'Prisma ORM & migrations', 'Redis caching', 'OAuth 2.0 & JWT authentication', 'Webhooks & rate limits'],
        handsOnProject: 'Multi-tenant SaaS workspace platform with team invitation links, role hierarchies, and audit logging.',
      },
      {
        moduleNumber: '05',
        title: 'DevOps, Testing & Production Deployment',
        topics: ['Unit & integration testing (Vitest, Playwright)', 'Docker containers', 'GitHub Actions CI/CD', 'Vercel & AWS deployments'],
        handsOnProject: 'Full production staging deployment with automated end-to-end testing and rollback monitors.',
      },
    ],
    prerequisites: [
      'Basic computer literacy and enthusiasm for software problem-solving',
      'No prior professional coding experience required; curriculum begins with structured syntax fundamentals',
      'Laptop with modern web browser and code editor (VS Code recommended)',
    ],
    toolsCovered: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Docker', 'Git & GitHub'],
    provisionalNotice:
      'Batches are organized with capped seats to guarantee mentor review on every practical project pull request.',
    batchScheduleStatus: 'pending_schedule_announcement',
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'AI-Powered Digital Marketing & Growth Engineering',
    shortDescription:
      'Algorithmic SEO, automated conversion funnels, data analytics, paid performance ads, and AI content orchestration.',
    heroHeadline: 'Engineering-Grade Growth Systems for Modern Digital Commerce',
    heroSubheadline:
      'Move beyond vanity metrics and generic social posts. Learn quantitative user acquisition, search engine crawling mechanics, funnel optimization, and automated marketing workflows.',
    targetAudience: [
      'Marketing professionals looking to integrate AI automation into their daily campaign execution',
      'Business owners seeking measurable, positive-ROI acquisition channels',
      'Career switchers aiming for roles in performance marketing, growth operations, and technical SEO',
    ],
    learningOutcomes: [
      'Execute exhaustive technical SEO audits and structure programmatic content strategies',
      'Run profitable Meta (Facebook/Instagram) and Google Ads campaigns using conversion tracking API (CAPI)',
      'Automate customer lead nurturing sequences using n8n and email CRM workflows',
      'Build end-to-end attribution dashboards with Google Analytics 4, Tag Manager, and Looker Studio',
      'Use LLMs for scalable keyword research, semantic clustering, and high-quality content drafting',
    ],
    curriculumModules: [
      {
        moduleNumber: '01',
        title: 'Search Engine Architecture & Advanced Technical SEO',
        topics: ['Crawling & rendering mechanics', 'XML sitemaps & robots.txt', 'Core Web Vitals & mobile indexing', 'Semantic keyword mapping'],
        handsOnProject: 'Complete technical SEO audit of a live commercial website with a prioritized remediation backlog.',
      },
      {
        moduleNumber: '02',
        title: 'Performance Marketing: Google Search & Meta Ads',
        topics: ['Auction mechanics & Quality Score', 'Keyword match types & negative filtering', 'Meta pixel & Conversions API (CAPI)', 'A/B creative testing'],
        handsOnProject: 'Setting up and stress-testing a live multi-adset campaign structure with strict CAC and ROAS targets.',
      },
      {
        moduleNumber: '03',
        title: 'Marketing Automation & Workflow Orchestration',
        topics: ['Lead scoring engines', 'n8n/Make automation recipes', 'Drip email funnels', 'WhatsApp Business notification webhooks'],
        handsOnProject: 'Automated omnichannel lead triage pipeline that notifies sales reps within 60 seconds of form submission.',
      },
      {
        moduleNumber: '04',
        title: 'Web Analytics, Attribution & Data Visualization',
        topics: ['Google Tag Manager (GTM) server-side tagging', 'GA4 event architecture', 'Conversion funnel drop-off analysis', 'Looker Studio reports'],
        handsOnProject: 'Executive marketing reporting dashboard integrating Search Console, Google Ads, and CRM conversion stages.',
      },
    ],
    prerequisites: [
      'Basic comfort with spreadsheets (Excel / Google Sheets) and internet navigation',
      'No programming background required; all technical concepts are introduced systematically',
      'Analytical mindset interested in metrics, testing hypotheses, and customer behavior',
    ],
    toolsCovered: ['Google Analytics 4', 'Google Tag Manager', 'Meta Ads Manager', 'Google Ads', 'Ahrefs', 'n8n', 'Looker Studio'],
    provisionalNotice:
      'Campaign budgets for practical advertising simulations are covered inside workshop sessions with real-world dummy sandboxes.',
    batchScheduleStatus: 'pending_schedule_announcement',
  },
  {
    id: 'robotics',
    slug: 'robotics',
    title: 'Robotics & Edge AI Coaching',
    shortDescription:
      'Hands-on physical computing, sensor integration, microcontroller programming (ESP32/Arduino), and on-device machine intelligence.',
    heroHeadline: 'Bridging Software Intelligence with Physical Computing Systems',
    heroSubheadline:
      'Explore how artificial intelligence leaves the screen and enters the real world through microcontrollers, sensor telemetry, motor control, and computer vision at the edge.',
    targetAudience: [
      'Engineering students (Electronics, Electrical, Mechanical, Computer Science) wanting hands-on hardware skills',
      'IoT tinkerers and hobbyists seeking to integrate machine learning onto low-power microcontrollers',
      'School and college educators developing modern STEM / Robotics laboratory curricula',
    ],
    learningOutcomes: [
      'Understand circuit fundamentals, schematic reading, logic levels, and power distribution',
      'Program microcontrollers (Arduino, ESP32, Raspberry Pi) using C/C++ and MicroPython',
      'Interface analog and digital sensors (ultrasonic, IMU, temperature, cameras, LiDAR)',
      'Deploy TinyML models for keyword spotting and gesture detection on embedded hardware',
      'Build autonomous mobile robot prototypes capable of obstacle avoidance and line following',
    ],
    curriculumModules: [
      {
        moduleNumber: '01',
        title: 'Electronics Fundamentals & Microcontroller Basics',
        topics: ['Ohm’s law & circuit basics', 'Breadboarding & soldering best practices', 'Arduino C++ programming', 'Digital I/O & PWM motor control'],
        handsOnProject: 'Dual-axis servo tracking system reacting to light sensor differentials.',
      },
      {
        moduleNumber: '02',
        title: 'Sensor Telemetry & Wireless IoT Communication',
        topics: ['ESP32 WiFi/Bluetooth architecture', 'I2C & SPI communication protocols', 'MQTT pub/sub messaging', 'Web dashboard telemetry'],
        handsOnProject: 'IoT environmental monitoring station sending real-time sensor packets to a cloud dashboard.',
      },
      {
        moduleNumber: '03',
        title: 'Motor Drivers, Kinematics & Autonomous Movement',
        topics: ['H-bridge motor drivers', 'Differential drive kinematics', 'PID controllers for smooth steering', 'Ultrasonic & infrared obstacle avoidance'],
        handsOnProject: 'Autonomous 2-wheel differential robot navigating maze corridors using PID closed-loop control.',
      },
      {
        moduleNumber: '04',
        title: 'Edge AI & Embedded Computer Vision (TinyML)',
        topics: ['TinyML principles', 'Edge Impulse model training', 'ESP32-CAM video streaming', 'On-device gesture and sound classification'],
        handsOnProject: 'Edge camera system identifying hand gestures to trigger mechanical relays without internet access.',
      },
    ],
    prerequisites: [
      'Interest in hardware assembly and physical experimentation',
      'Basic math and logical thinking skills',
      'Hardware kits and components are provided during in-person laboratory sessions in Jaipur',
    ],
    toolsCovered: ['Arduino IDE', 'ESP32', 'Raspberry Pi', 'C/C++', 'MicroPython', 'Edge Impulse', 'Fusion 360 / 3D Printing basics'],
    provisionalNotice:
      'Laboratory-based coaching is conducted in dedicated cohorts in Jaipur. Practical hardware kits are designated per batch.',
    batchScheduleStatus: 'pending_schedule_announcement',
  },
];
