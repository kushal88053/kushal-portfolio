export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | "Core Backend" | "Workflow Automation";
  description: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  readmeContent?: {
    overview: string;
    features: { title: string; desc: string }[];
    backendArchitecture: {
      redis: string;
      mongodb: string;
      s3: string;
      smtp: string;
      scaling: string;
    };
    runLocallyInstructions?: {
      server: string;
      frontend: string;
    };
    references?: { name: string; url: string }[];
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
        badge: "Full-Stack Project (IoT & Analytics)",
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
        badge: "Core Backend Project (Kafka & Telecom)",
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
    id: "video-conference",
    title: "VideoConfrence (Real-Time WebRTC Engine)",
    subtitle: "Real-Time Video, Audio, Collaborative Whiteboard & Redis Scaled Socket.IO",
    category: "Full-Stack",
    description:
      "An open-source real-time video conference web application engineered to understand and replicate how Google Meet and Zoom deliver low-latency streams. Features WebRTC audio/video sharing, interactive whiteboard with mathematical graph plotting, screen sharing, live chat, and horizontal scaling via Redis Socket.IO adapter.",
    highlights: [
      "Engineered real-time low-latency audio/video streaming and screen sharing utilizing WebRTC and Mediasoup architecture.",
      "Integrated Redis as a Socket.IO adapter to enable horizontal scaling and multi-instance session synchronization (userId, socketId, active status).",
      "Built a collaborative whiteboard with a mathematical graph plotter allowing real-time interactive annotations and diagramming.",
      "Configured MongoDB for structured chat persistence and user profiles, paired with AWS S3 buckets for meeting file uploads.",
      "Integrated Nodemailer SMTP service for automated meeting invitations and transactional email notifications.",
    ],
    metrics: [
      { label: "Type", value: "Full-Stack WebRTC" },
      { label: "Media Engine", value: "WebRTC / Mediasoup" },
      { label: "Scaling", value: "Redis Socket Adapter" },
      { label: "Cloud & DB", value: "AWS S3 + MongoDB" },
    ],
    tags: ["WebRTC", "Socket.IO", "Redis", "Node.js", "MongoDB", "AWS S3", "Docker", "JavaScript"],
    links: {
      github: "https://github.com/kushal88053/videoConfrence",
    },
    readmeContent: {
      overview:
        "Video Confressing is an open-source video conference web application designed for interactive online tutoring and live team meetings, replicating core mechanisms used by Google Meet and Zoom for real-time streaming.",
      features: [
        { title: "Audio & Video", desc: "Real-time, peer-to-peer and SFU low-latency sharing of audio and video." },
        { title: "Shared Whiteboard", desc: "Collaborate with participants in real-time on an interactive shared canvas." },
        { title: "Screen Sharing", desc: "Instantly switch to presenting mode by broadcasting your desktop screen." },
        { title: "Live Chat", desc: "Send rich messages and interact with participants in ongoing sessions." },
        { title: "File Sharing", desc: "Upload and share relevant meeting files securely stored in AWS S3." },
        { title: "Graph Plotter", desc: "Insert and render interactive mathematical graphs directly onto the whiteboard." },
      ],
      backendArchitecture: {
        redis:
          "Redis is used as the Socket.IO adapter for scaling and managing real-time communication. It handles state management for active users (userId, socketId, and active status) and facilitates horizontal scaling by distributing messages across multiple Node.js instances.",
        mongodb:
          "MongoDB is used as the primary database for user profiles, roles (admin/participant), meeting metadata, and persistent meeting chat history.",
        s3:
          "All files uploaded during meetings (documents, images, code files) are stored securely in an Amazon S3 bucket for high availability and fast retrieval.",
        smtp:
          "Meeting invitations, password resets, and participant notifications are delivered reliably via Nodemailer using SMTP.",
        scaling:
          "The backend supports dynamic meeting creation with unique join URLs, role-based access checks, and Redis-synchronized participant state across all server instances.",
      },
      runLocallyInstructions: {
        server: "cd server\ncp integrations/.env.template integrations/.env\nnpm run infra  # Docker Compose for Redis and MongoDB\nnpm install\nnpm start",
        frontend: "cd frontend\nnpm install\nnpm start",
      },
      references: [
        { name: "Nettu Meet Repository", url: "https://github.com/fmeringdal/nettu-meet" },
        { name: "Mediasoup Demo", url: "https://github.com/versatica/mediasoup-demo" },
        { name: "GitHub Source Code", url: "https://github.com/kushal88053/videoConfrence" },
      ],
    },
  },
  {
    id: "ventomotors-dashboard",
    title: "VentoMotors Full-Stack IoT & Factory Platform",
    subtitle: "React.js Frontend (IndexedDB), Spring Boot APIs, ActiveMQ & Redis Pipeline",
    category: "Full-Stack",
    description:
      "An end-to-end full-stack industrial IoT factory platform. Features a React.js client utilizing IndexedDB for offline-first local state, high-performance Spring Boot REST APIs, sub-second analytics via ActiveMQ and Redis, and live defect video streaming with Node.js WebSockets.",
    highlights: [
      "Engineered full-stack real-time factory dashboard with React.js frontend using IndexedDB for local offline state and Java / Spring Boot RESTful APIs.",
      "Transformed slow analytics queries from 30-40s to 2-5s (95%+ speedup) using ActiveMQ event queues and Redis caching.",
      "Built live defect video streaming and real-time chat between technicians and QA using Node.js, WebSockets, and Redis Pub/Sub.",
      "Developed the My Vento digital service book module and automated billing workflows via Zoho Invoice API (-90% manual effort).",
      "Migrated infrastructure to AWS EC2 & RDS with automated CodePipeline CI/CD to ECS.",
    ],
    metrics: [
      { label: "Architecture", value: "Full-Stack + IoT" },
      { label: "Latency Speedup", value: "95%+ (30s → 2s)" },
      { label: "Frontend", value: "React + IndexedDB" },
      { label: "Cloud & CI/CD", value: "AWS ECS + CodePipeline" },
    ],
    tags: ["React.js", "IndexedDB", "Java", "Spring Boot", "ActiveMQ", "Redis", "WebSockets", "Node.js", "AWS ECS", "Docker"],
  },
  {
    id: "email-saas",
    title: "Email Sender as a Service (Full-Stack SaaS)",
    subtitle: "Next.js Application Layer, RabbitMQ Pub/Sub Workers & Kubernetes HPA",
    category: "Full-Stack",
    description:
      "A complete full-stack SaaS platform built with Next.js for the modern web application interface, paired with asynchronous background worker nodes, RabbitMQ pub/sub queues, and AWS SES, orchestrated via Docker & Kubernetes.",
    highlights: [
      "Designed full-stack application architecture using Next.js for frontend user dashboards and application logic with asynchronous backend queuing.",
      "Configured RabbitMQ pub/sub message brokers with worker nodes and Redis caching for resilient background email dispatch.",
      "Integrated AWS SES for ultra-reliable transactional and marketing email delivery with bounce and delivery webhook tracking.",
      "Authored custom Kubernetes manifests with Horizontal Pod Autoscaling (HPA) to seamlessly sustain 100,000+ emails/day during peak traffic bursts.",
    ],
    metrics: [
      { label: "Type", value: "Full-Stack SaaS" },
      { label: "Throughput", value: "100k+ emails/day" },
      { label: "Frontend/App", value: "Next.js" },
      { label: "Autoscaling", value: "Kubernetes HPA" },
    ],
    tags: ["Next.js", "React", "RabbitMQ", "Redis", "Kubernetes", "MongoDB", "AWS SES", "Docker"],
    links: {
      github: "https://github.com/kushal88053",
    },
  },
  {
    id: "kyosk-telecom",
    title: "Kyosk B2B Core Backend Microservices",
    subtitle: "High-Throughput Kafka Streams, Telecom Recharge Engine & Elasticsearch",
    category: "Core Backend",
    description:
      "Mission-critical core backend microservices for the Kyosk B2B e-commerce platform. Handles high-throughput Apache Kafka event streams, automated administrative reporting, dynamic Elasticsearch catalogs, and 99.9% reliable telecom recharge transactions across Africa.",
    highlights: [
      "Engineered fault-tolerant backend recharge microservice supporting high-volume payment and top-up transactions for Vodacom, MTN Group, Orange, Globacom, and Airtel with 99.9% reliability.",
      "Managed high-throughput Apache Kafka consumer groups for asynchronous, reliable delivery of 10,000+ daily Email, WhatsApp (Twilio), and SMS notifications.",
      "Architected automated Spring Boot platform reporting service generating daily administrative summaries across zonal sales, user growth, airtime, and loans.",
      "Built dynamic area-specific catalog microservices using Elasticsearch to index location listings and real-time multi-warehouse inventory.",
      "Provided 24/7 backend production support debugging asynchronous message flows and distributed transaction states.",
    ],
    metrics: [
      { label: "Role", value: "Core Backend SDE" },
      { label: "Reliability", value: "99.9% SLA" },
      { label: "Kafka Events", value: "10k+ msgs / day" },
      { label: "Telco Partners", value: "Vodacom, MTN, Orange" },
    ],
    tags: ["Spring Boot", "Apache Kafka", "Elasticsearch", "PostgreSQL", "Twilio API", "Microservices", "Distributed Transactions"],
  },
  {
    id: "viasocket-plugins",
    title: "Automation Engine & 100+ Workflow Plugins",
    subtitle: "Extensible Integration Hub (ViaSocket)",
    category: "Workflow Automation",
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
      "Hello! I'm Kushal Patel, a Software Development Engineer specializing in high-throughput distributed systems, real-time WebRTC platforms like VideoConfrence, Java Spring Boot, Kafka, and Kubernetes. I build scalable full-stack and backend architectures that handle massive workloads with sub-second latency.",
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
    title: "2. VentoMotors Full-Stack IoT Platform (95% Speedup)",
    badge: "Full-Stack Project",
    narration:
      "For VentoMotors, my flagship full-stack project, I engineered a real-time factory dashboard using React.js with IndexedDB on the frontend, backed by Spring Boot REST APIs. I solved heavy 30 to 40 second analytics queries with an asynchronous ActiveMQ and Redis caching pipeline, slashing response time to 2 to 5 seconds—a 95% speedup.",
    visualType: "optimization",
    metrics: [
      { label: "Type", value: "Full-Stack System" },
      { label: "Query Speedup", value: "30-40s → 2-5s (95%)" },
      { label: "Stack", value: "React + Spring + Redis" },
    ],
    codeSnippet: `// Asynchronous ActiveMQ & Redis Pipeline
@JmsListener(destination = "factory.analytics.queue")
public void processFactoryMetrics(FactoryRecord record) {
    CalculatedMetrics metrics = engine.compute(record);
    redisTemplate.opsForValue().set("metrics:" + record.getId(), metrics, 15, TimeUnit.MINUTES);
}`,
    diagramTitle: "React (IndexedDB) -> Spring Boot -> ActiveMQ -> Redis Cache",
  },
  {
    id: 3,
    timeStart: 22,
    duration: 12,
    title: "3. Kyosk Core Backend Microservices & Telecom Engine",
    badge: "Core Backend Project",
    narration:
      "Kyosk is my core backend microservices platform. I architected high-throughput Apache Kafka clusters for asynchronous delivery of 10,000+ daily multi-channel notifications, and engineered fault-tolerant recharge microservices with 99.9% uptime for Vodacom, MTN Group, Orange, Globacom, and Airtel.",
    visualType: "kafka",
    metrics: [
      { label: "Type", value: "Core Backend Engine" },
      { label: "Daily Kafka Events", value: "10,000+ msgs" },
      { label: "System Availability", value: "99.9% SLA" },
    ],
    codeSnippet: `// High-Throughput Kafka Notification Consumer
@KafkaListener(topics = "customer.notifications", groupId = "notification-cluster")
public void handleNotification(NotificationEvent event) {
    notificationRouter.dispatch(event); // WhatsApp Twilio, SES, SMS
}`,
    diagramTitle: "Core Backend: Kafka Topics -> Consumer Groups -> Telecom Gateways",
  },
  {
    id: 4,
    timeStart: 34,
    duration: 12,
    title: "4. Full-Stack SaaS Email Platform & Kubernetes HPA",
    badge: "Full-Stack SaaS",
    narration:
      "My messaging SaaS is an end-to-end full-stack platform: combining a Next.js application dashboard with asynchronous RabbitMQ pub/sub workers and AWS SES. Managed with Kubernetes Horizontal Pod Autoscaling, the system smoothly delivers over 100,000 emails per day.",
    visualType: "kubernetes",
    metrics: [
      { label: "Type", value: "Full-Stack SaaS" },
      { label: "Peak Capacity", value: "100,000+ / day" },
      { label: "App & Infra", value: "Next.js + K8s HPA" },
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
