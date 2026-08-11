export const profile = {
  name: "Achal Desai",
  roleTarget: "Senior Backend Engineer",
  location: "Mumbai, India",
  // TODO: ask Achal for exact wording of the one-line positioning statement
  positioning: "TODO: one-line positioning statement",
  // TODO: which address — likely something@achald.me
  email: "TODO: contact email",
  linkedin: "TODO: LinkedIn URL",
  github: "TODO: GitHub URL",
  // TODO: add resume PDF to /public/resume.pdf
  resumeUrl: "/resume.pdf",
};

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages & Runtime", items: ["Node.js", "TypeScript"] },
  { label: "Messaging & Caching", items: ["Kafka", "Redis"] },
  { label: "Data", items: ["MongoDB"] },
  { label: "AWS", items: ["EKS", "Lambda", "API Gateway", "CloudWatch"] },
  { label: "Architecture", items: ["Microservices at scale"] },
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

// TODO: replace all four with real projects — title, description, stack, link
export const projects: Project[] = [
  {
    title: "TODO: Project title",
    description: "TODO: one to two sentence description of the project.",
    stack: ["TODO: stack"],
    link: null,
  },
  {
    title: "TODO: Project title",
    description: "TODO: one to two sentence description of the project.",
    stack: ["TODO: stack"],
    link: null,
  },
  {
    title: "TODO: Project title",
    description: "TODO: one to two sentence description of the project.",
    stack: ["TODO: stack"],
    link: null,
  },
  {
    title: "TODO: Project title",
    description: "TODO: one to two sentence description of the project.",
    stack: ["TODO: stack"],
    link: null,
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
    company: "LTI Mindtree (Anywhere Real Estate account)",
    title: "Backend Engineer",
    start: "TODO: start date",
    end: "Present",
    bullets: ["TODO: 2-4 bullets on scope and impact in this role"],
  },
  // TODO: add prior roles — ~6 years of experience total
];
