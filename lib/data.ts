export const profile = {
  name: "Achal Desai",
  roleTarget: "Senior Backend Engineer",
  location: "Mumbai, India",
  positioning:
    "Senior backend engineer with 6+ years building and scaling Node.js microservices, event-driven systems, and cloud infrastructure on AWS.",
  email: "achald123@gmail.com",
  linkedin: "https://linkedin.com/in/achal-desai/",
  github: "https://github.com/achaldesai",
  resumeUrl: "/Achal_Desai_Senior_Backend_Engineer.pdf",
};

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages & Runtime", items: ["JavaScript", "TypeScript", "Node.js"] },
  {
    label: "Backend",
    items: ["Express.js", "REST API design", "Microservices", "Auth & validation", "Jest"],
  },
  {
    label: "Event-Driven & Messaging",
    items: ["Kafka", "SQS", "AWS Lambda", "Confluent", "Redis"],
  },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
  {
    label: "Cloud & DevOps",
    items: ["AWS (EKS, API Gateway, S3, CloudWatch)", "Docker", "GitLab CI/CD", "IaC", "Datadog"],
  },
  {
    label: "Also",
    items: [
      "Mentoring",
      "AI-assisted engineering (Claude Code, GitHub Copilot, DeepSeek)",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string | null;
};

export const projects: Project[] = [
  {
    title: "Algo Trade Service",
    description:
      "TypeScript backend for algorithmic trading with a REST API for managing stocks, trades, and portfolios, using Angel One SmartAPI for market data and order execution.",
    stack: ["TypeScript", "Node.js", "REST API", "Docker"],
    link: "https://github.com/achaldesai/algo-trade-app",
  },
  {
    title: "GoInterpreter",
    description:
      "A simple interpreter written in Go, covering parsing, variable declarations, arithmetic operations, conditionals, and loop constructs.",
    stack: ["Go"],
    link: "https://github.com/achaldesai/GoInterpreter",
  },
  {
    title: "lightBulb",
    description:
      "A web UI for controlling a Philips Wiz Connected smart bulb by bridging it through the Samsung SmartThings API.",
    stack: ["HTML", "SmartThings API"],
    link: "https://github.com/achaldesai/lightBulb",
  },
];

export type ExperienceEntry = {
  company: string;
  title: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "LTIMindtree · Mumbai",
    title: "Senior Software Engineer",
    start: "Jan 2024",
    end: "Present",
    bullets: [
      "Architected and managed Node.js microservices for a high-concurrency system supporting 2M+ agents, ensuring 99.9% uptime through optimized API contracts and horizontal scaling.",
      "Engineered serverless workflows using AWS Lambda, SQS, and Kafka to handle asynchronous data exchanges, improving system decoupling and fault tolerance for real-time analytics.",
      "Reduced end-to-end API latency by 20% by optimizing MongoDB aggregation pipelines, implementing Redis caching, and refining data access patterns for high-volume operational data.",
      "Owned the full CI/CD lifecycle using GitLab and AWS (EKS/CloudWatch), implementing automated monitoring and alerting that reduced production incident resolution time (MTTR) by 15%.",
      "Spearheaded cross-functional collaboration between Angular frontend and backend teams to define robust RESTful schemas, enforcing strict code quality and release discipline across the microservices ecosystem.",
    ],
  },
  {
    company: "BharatCall (Neeks & Hanks Solutions)",
    title: "Backend Engineer (Founding)",
    start: "Jul 2020",
    end: "Dec 2023",
    bullets: [
      "Acted as the sole backend engineer to architect, build, and scale a D2C SaaS platform from inception to 50,000+ production users, using Node.js, Express, and MongoDB.",
      "Engineered mission-critical REST APIs and integrated third-party systems, including an in-house SMPP SMS gateway, WhatsApp Business API, Firebase in-app messaging, and major payment processors.",
      "Accelerated product launch by developing end-to-end features, pairing high-throughput backend workflows with Angular-based dashboards for real-time e-commerce and campaign performance tracking.",
      "Independently managed all production deployments and system reliability, implementing logging, monitoring, and automated pipelines for high availability and rapid incident resolution.",
    ],
  },
];
