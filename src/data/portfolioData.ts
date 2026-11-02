export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | "Backend / SaaS" | "Distributed Systems" | "DevOps / Cloud";
  description: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  projects: {
    name: string;
    badge?: string;
    details: string[];
    tech: string[];
    links?: { label: string; url: string }[];
  }[];
}

export const personalInfo = {
  name: "Kushal Patel",
  role: "Software Development Engineer",
  titleHeadline: "Distributed Systems & Backend Specialist",
  tagline: "Architecting high-throughput microservices, sub-second async pipelines, and resilient cloud infrastructure that powers critical operations.",
  location: "Indore, MP, India",
  email: "kp88053@gmail.com",
  phone: "+91-7024400235",
  availability: "Open to High-Impact SDE Roles",
  bio: "Software Development Engineer with proven expertise in building high-throughput backend microservices, real-time analytics engines, and resilient cloud architectures. Experienced in cutting API latency by 95%+, handling 100k+ daily asynchronous events via Kafka/RabbitMQ, and scaling containerized workloads on AWS & Kubernetes. Strong problem-solver with 1,000+ competitive programming problems solved.",
  socials: {
    linkedin: "https://www.linkedin.com/in/kushal88053/",
    github: "https://github.com/kushal88053",
    codechef: "https://www.codechef.com/users/kushal88053",
    codeforces: "https://codeforces.com/profile/kushal88053",
    leetcode: "https://leetcode.com/u/kushal88053/",
  },
  stats: [
    { label: "API Latency Reduction", value: "95%+", change: "30-40s → 2-5s with Redis & ActiveMQ" },
    { label: "Async Event Delivery", value: "100k+", change: "Daily high-throughput Kafka / RabbitMQ messages" },
    { label: "System Availability", value: "99.9%", change: "Telecom payment & top-up uptime" },
    { label: "DSA Problems Solved", value: "1,000+", change: "800+ LeetCode, CodeChef Rank 77" },
  ],
};

export const skillsData = {
  languages: [
    { name: "Java", level: "Expert", years: "3+ yrs", icon: "☕" },
    { name: "JavaScript", level: "Proficient", years: "3+ yrs", icon: "⚡" },
    { name: "TypeScript", level: "Proficient", years: "2+ yrs", icon: "🔷" },
    { name: "SQL", level: "Advanced", years: "3+ yrs", icon: "🗄️" },
  ],
  frameworks: [
    { name: "Spring Boot", category: "Backend" },
    { name: "Spring MVC", category: "Backend" },
    { name: "Spring Security", category: "Security" },
    { name: "Hibernate & JPA", category: "ORM" },
    { name: "Node.js & Express", category: "Backend" },
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Full-Stack" },
    { name: "WebSockets", category: "Real-time" },
    { name: "RESTful APIs", category: "Architecture" },
    { name: "Microservices", category: "Architecture" },
    { name: "Temporal", category: "Orchestration" },
  ],
  messagingAndCaching: [
    { name: "Apache Kafka", role: "Event Streaming" },
    { name: "RabbitMQ", role: "Pub/Sub Queues" },
    { name: "ActiveMQ", role: "Async Task Pipeline" },
    { name: "Redis", role: "Distributed Cache & Pub/Sub" },
  ],
  cloudAndDevOps: [
    { name: "AWS EC2", role: "Compute" },
    { name: "AWS ECS & ECR", role: "Containers" },
    { name: "AWS RDS", role: "Managed DB" },
    { name: "AWS S3 & Lambda", role: "Serverless Storage & Code" },
    { name: "AWS SES & Route 53", role: "Email & DNS" },
    { name: "AWS Elastic Beanstalk", role: "PaaS" },
    { name: "AWS CodePipeline / CodeBuild", role: "CI/CD" },
    { name: "Docker", role: "Containerization" },
    { name: "Kubernetes (HPA)", role: "Orchestration" },
    { name: "cPanel", role: "Hosting Management" },
  ],
  databasesAndMonitoring: [
    { name: "PostgreSQL", role: "Relational DB" },
    { name: "MySQL", role: "Relational DB" },
    { name: "MongoDB", role: "Document DB" },
    { name: "Elasticsearch", role: "Search Engine" },
    { name: "Prometheus", role: "Metrics Collection" },
    { name: "Grafana", role: "Observability Dashboards" },
    { name: "Kafka UI & Redis Insight", role: "System Inspection" },
  ],
  toolsAndTesting: [
    { name: "Git & GitHub", role: "Version Control" },
    { name: "Postman", role: "API Testing" },
    { name: "JUnit & Mockito", role: "Unit Testing" },
    { name: "IntelliJ IDEA", role: "IDE" },
    { name: "VS Code", role: "IDE" },
  ],
};

export const experiences: ExperienceItem[] = [
  {
    company: "Gruslabs Software Solution Pvt. Ltd.",
    role: "Software Development Engineer",
    location: "Indore, India",
    period: "Mar 2025 – Present",
    type: "Full-Time",
    summary:
      "Core backend & distributed systems developer leading enterprise IoT factory dashboards, telecom recharge engines, and large-scale cloud migrations.",
    projects: [
      {
        name: "VentoMotors (Industrial IoT & Service Platform)",
        badge: "Production IoT & Analytics",
        details: [
          "Full-Stack Production Dashboard: Engineered a real-time factory dashboard with React.js frontend using IndexedDB for offline-capable local state and Java / Spring Boot RESTful APIs for defect tracking, assembly line metrics, unpacking, PDP, and hourly throughput.",
          "Dashboard API Optimization: Re-engineered analytics APIs by designing an asynchronous processing pipeline with ActiveMQ and Redis, queue-processing factory records and caching calculated metrics so queries load in 2-5 seconds instead of 30-40 seconds (95%+ speedup).",
          "My Vento App – Digital Service Book: Architected and built the Beta Digital Service Book module from scratch for two-wheeler maintenance, periodic servicing schedules, and service history tracking.",
          "Live Defect Video & Real-Time Chat: Developed a low-latency inspection service using Node.js, WebSockets, and Redis Pub/Sub, enabling live video streaming of vehicle component defects and instant real-time chat between technicians and quality assurance teams.",
          "Cloud Migration: Orchestrated zero-downtime migration of core backend infrastructure and databases from on-premise Plex servers to AWS EC2 instances and AWS RDS for high availability and elastic scalability.",
          "Invoicing Service & CI/CD: Automated billing workflows via Zoho Invoice API, cutting manual billing effort by 90%; established automated CI/CD pipelines using AWS CodePipeline, CodeBuild, ECR, and ECS.",
        ],
        tech: [
          "Java",
          "Spring Boot",
          "React.js",
          "ActiveMQ",
          "Redis",
          "WebSockets",
          "Node.js",
          "AWS (EC2, RDS, ECS, ECR)",
          "Docker",
          "Zoho API",
        ],
      },
      {
        name: "Kyosk (B2B E-Commerce & Telecom Top-Up)",
        badge: "High-Throughput Microservices",
        details: [
          "Platform Summary Service: Architected an automated Spring Boot reporting service generating daily administrative summaries across user growth, zonal sales volumes, airtime orders, and loan metrics.",
          "Notification Service: Managed high-throughput Apache Kafka consumer groups for asynchronous, reliable delivery of 10k+ daily Email, WhatsApp (Twilio API), and SMS alerts.",
          "Recharge Service: Developed a fault-tolerant backend recharge microservice supporting high-volume payment and top-up transactions for telecom operators Vodacom, MTN Group, Orange, Globacom, and Airtel with 99.9% reliability.",
          "Catalog Service: Built dynamic area-specific catalog microservices using Elasticsearch to manage location-based product listings and real-time multi-warehouse inventory.",
          "Recharge Production Support: Resolved critical telecom payment and top-up failures across high-volume operators by debugging asynchronous message flows and transaction states, sustaining 99.9% system reliability.",
        ],
        tech: [
          "Spring Boot",
          "Apache Kafka",
          "Elasticsearch",
          "Twilio API",
          "PostgreSQL",
          "Microservices",
          "Distributed Transactions",
        ],
      },
    ],
  },
  {
    company: "Walkover Web Solutions Pvt. Ltd.",
    role: "Software Development Intern",
    location: "Indore, India",
    period: "Jul 2024 – Jan 2025",
    type: "Internship",
    summary:
      "Engineered core API layers and workflow integration plugins for enterprise communication and automation products.",
    projects: [
      {
        name: "MSG91 (Enterprise Cloud Communication)",
        badge: "RESTful Cloud API",
        details: [
          "Developed and optimized RESTful APIs for user management and email analytics dashboards.",
          "Improved API response reliability and structured comprehensive audit logs for high-volume customer communications.",
        ],
        tech: ["Node.js", "Express", "RESTful APIs", "MySQL", "Authentication"],
        links: [{ label: "MSG91 Platform", url: "https://msg91.com" }],
      },
      {
        name: "ViaSocket (Workflow Automation Platform)",
        badge: "Integration & Plugins",
        details: [
          "Built 100+ workflow automation plugins using JavaScript/Node.js, seamlessly integrating third-party REST APIs including Gmail, Slack, and Google Sheets.",
          "Implemented automated payload transformation, schema validation, and error-handling routines for high reliability.",
        ],
        tech: ["JavaScript", "Node.js", "Third-party APIs", "Workflow Automation"],
        links: [{ label: "ViaSocket Platform", url: "https://viasocket.com" }],
      },
    ],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "email-saas",
    title: "Email Sender as a Service (SaaS)",
    subtitle: "High-Volume Transactional & Marketing Email Infrastructure",
    category: "Backend / SaaS",
    description:
      "A production-grade distributed email delivery platform built with Next.js, RabbitMQ pub/sub message brokers, background worker nodes, and AWS SES, managed via Docker & Kubernetes.",
    highlights: [
      "Designed an asynchronous background processing pipeline using Next.js application layer and RabbitMQ pub/sub queues with worker nodes.",
      "Integrated AWS SES for ultra-reliable transactional and marketing email delivery with bounce and delivery webhook tracking.",
      "Authored custom Kubernetes manifests to deploy and coordinate Dockerized microservices (Redis, RabbitMQ, and MongoDB).",
      "Configured Kubernetes Horizontal Pod Autoscaling (HPA) to seamlessly sustain 100,000+ emails/day under peak load spikes.",
    ],
    metrics: [
      { label: "Throughput", value: "100k+ emails/day" },
      { label: "Architecture", value: "K8s HPA Autoscaling" },
      { label: "Queuing", value: "RabbitMQ Pub/Sub" },
      { label: "Provider", value: "AWS SES" },
    ],
    tags: ["Next.js", "RabbitMQ", "Redis", "Kubernetes", "MongoDB", "AWS SES", "Docker"],
    links: {
      github: "https://github.com/kushal88053",
    },
  },
  {
    id: "ventomotors-dashboard",
    title: "VentoMotors Real-Time Factory Analytics",
    subtitle: "Industrial IoT Dashboard & Async Analytics Pipeline",
    category: "Distributed Systems",
    description:
      "Enterprise industrial assembly and defect tracking platform with sub-second analytics, Live Defect Video streaming, and WebSockets.",
    highlights: [
      "Transformed slow analytics queries from 30-40s to 2-5s (95%+ speedup) using ActiveMQ event queues and Redis caching.",
      "Implemented live video stream sharing and instant technician chat using Node.js, WebSockets, and Redis Pub/Sub.",
      "Connected React.js client with IndexedDB local caching for zero-data-loss factory floor operation.",
      "Migrated infrastructure to AWS EC2 & RDS with automated CodePipeline CI/CD to ECS.",
    ],
    metrics: [
      { label: "Latency Improvement", value: "95%+" },
      { label: "Query Time", value: "30s → 2s" },
      { label: "Protocol", value: "WebSockets + Redis" },
      { label: "Cloud", value: "AWS EC2/ECS/RDS" },
    ],
    tags: ["Java", "Spring Boot", "ActiveMQ", "Redis", "React.js", "WebSockets", "AWS ECS", "Docker"],
  },
  {
    id: "kyosk-telecom",
    title: "Kyosk B2B Telecom Recharge Microservice",
    subtitle: "High-Volume Fault-Tolerant Payment Engine",
    category: "Full-Stack",
    description:
      "Mission-critical fintech recharge engine supporting telecom giants across Africa (Vodacom, MTN Group, Orange, Airtel, Globacom) with 99.9% uptime.",
    highlights: [
      "Engineered fault-tolerant message handling and idempotent transaction states to prevent duplicate top-up debits.",
      "Managed Kafka event streams delivering 10,000+ daily notifications across Email, WhatsApp (Twilio), and SMS.",
      "Integrated Elasticsearch for dynamic, area-specific product catalog searching and warehouse inventory indexing.",
    ],
    metrics: [
      { label: "Reliability", value: "99.9%" },
      { label: "Notifications", value: "10k+ / day" },
      { label: "Telecom Partners", value: "5 Major Telcos" },
      { label: "Search Engine", value: "Elasticsearch" },
    ],
    tags: ["Spring Boot", "Apache Kafka", "Elasticsearch", "PostgreSQL", "Twilio API", "Microservices"],
  },
  {
    id: "viasocket-plugins",
    title: "Automation Engine & 100+ Workflow Plugins",
    subtitle: "Extensible Integration Hub (ViaSocket)",
    category: "Backend / SaaS",
    description:
      "Developed an extensive library of 100+ integration plugins connecting third-party platforms into automated workflows.",
    highlights: [
      "Built resilient connector plugins for Gmail, Slack, Google Sheets, CRM, and webhook targets.",
      "Engineered automated payload normalization and dynamic authentication handlers (OAuth 2.0 & API Keys).",
    ],
    metrics: [
      { label: "Plugins Created", value: "100+" },
      { label: "Runtime", value: "Node.js" },
    ],
    tags: ["JavaScript", "Node.js", "REST APIs", "OAuth 2.0", "Webhooks"],
    links: {
      live: "https://viasocket.com",
    },
  },
];

export const competitiveProgramming = {
  summary:
    "Passionate algorithmic problem solver with 1,000+ solved challenges across competitive programming platforms. Highly skilled in Data Structures, Dynamic Programming, Graph Algorithms, and System Design.",
  stats: [
    { label: "LeetCode Solved", value: "800+", detail: "Complex DSA & Algorithmic Patterns" },
    { label: "Total Problems Solved", value: "1,000+", detail: "Across CodeChef, LeetCode & Codeforces" },
    { label: "CodeChef Peak Rating", value: "1700", detail: "3-Star Competitive Programmer" },
    { label: "CodeChef Cook-Off", value: "Rank 77", detail: "Global Rank in Official Contest" },
  ],
  profiles: [
    {
      name: "CodeChef",
      handle: "kushal88053",
      url: "https://www.codechef.com/users/kushal88053",
      badge: "Highest Rating: 1700",
      description: "Secured Global Rank 77 in Cook-Off. Regularly competed in Div 2/3 rounds.",
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
      tagColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    },
    {
      name: "Codeforces",
      handle: "kushal88053",
      url: "https://codeforces.com/profile/kushal88053",
      badge: "Competitive Division",
      description: "Solved algorithmic challenges focusing on number theory, graphs, and greedy optimizations.",
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      tagColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    },
    {
      name: "LeetCode",
      handle: "kushal88053",
      url: "https://leetcode.com/u/kushal88053/",
      badge: "800+ Problems",
      description: "Extensive problem solving in Trees, Graphs, Dynamic Programming, and Concurrency.",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
      tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    },
    {
      name: "GitHub",
      handle: "kushal88053",
      url: "https://github.com/kushal88053",
      badge: "Active Repositories",
      description: "Distributed architectures, microservices, Next.js applications, and backend boilerplates.",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      tagColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    },
  ],
};

export const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Institute of Computer Science, SAGE University, Indore",
    period: "Nov 2022 – May 2024",
    grade: "CGPA: 7.2 / 10",
    highlights: [
      "Specialization in Advanced Computer Applications, Distributed Computing, and Object-Oriented Software Engineering.",
      "Led technical project teams focusing on Cloud Microservices and Enterprise Application Architecture.",
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Govt. Holkar Science College, Indore",
    period: "Jul 2018 – May 2021",
    grade: "CGPA: 7.2 / 10",
    highlights: [
      "Core foundation in Data Structures, Algorithms, Database Management Systems, and Object-Oriented Programming (Java/C++).",
      "Active participant in technical symposiums and collegiate coding competitions.",
    ],
  },
];

// Interactive Formative Video Presentation Chapters
export interface VideoChapter {
  id: number;
  timeStart: number; // in seconds
  duration: number;
  title: string;
  badge: string;
  narration: string;
  visualType: "intro" | "optimization" | "kafka" | "kubernetes" | "dsa";
  metrics: { label: string; value: string }[];
  codeSnippet?: string;
  diagramTitle?: string;
}

export const formativeVideoChapters: VideoChapter[] = [
  {
    id: 1,
    timeStart: 0,
    duration: 10,
    title: "1. Engineering Overview & Core Impact",
    badge: "Kushal Patel | SDE",
    narration:
      "Hello! I'm Kushal Patel, a Software Development Engineer specializing in high-throughput distributed systems, Java Spring Boot, Kafka, and Kubernetes. I build scalable backends that handle massive workloads with sub-second latency.",
    visualType: "intro",
    metrics: [
      { label: "Specialty", value: "Distributed Backends" },
      { label: "Core Stack", value: "Java, Kafka, AWS, K8s" },
      { label: "Location", value: "Indore, MP, India" },
    ],
    diagramTitle: "Distributed Architecture Flow",
  },
  {
    id: 2,
    timeStart: 10,
    duration: 12,
    title: "2. 95% Latency Reduction at VentoMotors",
    badge: "ActiveMQ + Redis Cache",
    narration:
      "At Gruslabs for the VentoMotors platform, heavy factory analytics queries took 30 to 40 seconds to process. I re-architected the pipeline into an asynchronous queue with ActiveMQ and Redis caching, slashing response times to just 2 to 5 seconds—a 95% performance improvement.",
    visualType: "optimization",
    metrics: [
      { label: "Before Optimization", value: "30 - 40s" },
      { label: "After Optimization", value: "2 - 5s" },
      { label: "Speedup", value: "95% Faster" },
    ],
    codeSnippet: `// Asynchronous ActiveMQ & Redis Pipeline
@JmsListener(destination = "factory.analytics.queue")
public void processFactoryMetrics(FactoryRecord record) {
    CalculatedMetrics metrics = engine.compute(record);
    redisTemplate.opsForValue().set("metrics:" + record.getId(), metrics, 15, TimeUnit.MINUTES);
}`,
    diagramTitle: "ActiveMQ -> Worker Pipeline -> Redis In-Memory Cache",
  },
  {
    id: 3,
    timeStart: 22,
    duration: 12,
    title: "3. Kyosk High-Throughput Kafka & Telecom Engine",
    badge: "99.9% Uptime",
    narration:
      "In the Kyosk B2B e-commerce platform, I managed Kafka event streaming clusters delivering over 10,000 daily multi-channel notifications, and engineered telecom recharge microservices for Vodacom, MTN, and Orange with 99.9% reliability.",
    visualType: "kafka",
    metrics: [
      { label: "Daily Kafka Events", value: "10,000+ msgs" },
      { label: "Telecom Partners", value: "Vodacom, MTN, Orange" },
      { label: "System Availability", value: "99.9% SLA" },
    ],
    codeSnippet: `// High-Throughput Kafka Notification Consumer
@KafkaListener(topics = "customer.notifications", groupId = "notification-cluster")
public void handleNotification(NotificationEvent event) {
    notificationRouter.dispatch(event); // WhatsApp Twilio, SES, SMS
}`,
    diagramTitle: "Kafka Topics -> Consumer Groups -> Multi-Channel Gateways",
  },
  {
    id: 4,
    timeStart: 34,
    duration: 12,
    title: "4. Cloud SaaS & Kubernetes Autoscaling",
    badge: "100k+ Emails / Day",
    narration:
      "I engineered a SaaS email platform using Next.js, RabbitMQ pub/sub worker nodes, and AWS SES. By authoring custom Kubernetes manifests and configuring Horizontal Pod Autoscaling (HPA), the system smoothly scales to 100,000+ daily emails under peak load.",
    visualType: "kubernetes",
    metrics: [
      { label: "Peak Capacity", value: "100,000+ / day" },
      { label: "Autoscaling", value: "Kubernetes HPA" },
      { label: "Cloud Provider", value: "AWS SES + ECR" },
    ],
    codeSnippet: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: email-worker-hpa
spec:
  scaleTargetRef:
    kind: Deployment
    name: email-worker-deployment
  minReplicas: 2
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        averageUtilization: 70`,
    diagramTitle: "Kubernetes HPA Pod Cluster with RabbitMQ Queue Workers",
  },
  {
    id: 5,
    timeStart: 46,
    duration: 10,
    title: "5. Algorithmic Rigor & Competitive Coding",
    badge: "1,000+ Problems Solved",
    narration:
      "Beyond production systems, algorithmic problem solving is central to my work. I have solved over 800 LeetCode problems and 1,000+ challenges across platforms, reaching a 1700 peak rating on CodeChef and Global Rank 77 in Cook-Off.",
    visualType: "dsa",
    metrics: [
      { label: "LeetCode Solved", value: "800+ Problems" },
      { label: "CodeChef Rating", value: "1700 (3-Star)" },
      { label: "Cook-Off Global Rank", value: "#77" },
    ],
    diagramTitle: "Algorithms, Dynamic Programming, Graphs & Trees Mastery",
  },
];
