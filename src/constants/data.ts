import { Cpu, Terminal, Layout, type LucideIcon } from "lucide-react";

export const BRAND_NAME = "BuildwithSud";
export const CONTACT_EMAIL = "invii@invii.online";

export const BRAND_COLORS = {
  upwork: "bg-[#14a800] hover:bg-[#14a800]/90",
  fiverr: "bg-[#1dbf73] hover:bg-[#1dbf73]/90",
};

interface ServiceItem {
  title: string;
  icon: LucideIcon; // Store the component type, NOT the rendered node
  desc: string;
}

export const services: ServiceItem[] = [
  {
    title: "SaaS Development",
    icon: Cpu, // Pass the reference (No brackets!)
    desc: "Full-cycle web apps from database to UI.",
  },
  {
    title: "API Integration",
    icon: Terminal,
    desc: "Connecting Stripe, OpenAI, or custom Node backends.",
  },
  {
    title: "React Dashboards",
    icon: Layout,
    desc: "High-performance admin panels and data visualization.",
  },
];

export const projects = [
  {
    name: "Retain | Client Portal",
    tag: "SaaS / Productivity",
    desc: "A real-time retainer management dashboard...",
    stack: ["React", "Socket.io", "PostgreSQL", "Node.js"],
    link: "https://retain-frontend-gamma.vercel.app/",
    highlight: true,
  },
  {
    name: "SignOff | Approval Flow",
    tag: "Live Product",
    desc: "The friction-free way to get client approvals...",
    stack: ["React", "Cloudflare R2", "Node.js", "Tailwind"],
    link: "https://signoff-one.vercel.app/",
    highlight: false,
  },
  {
    name: "Invo | Document Engine",
    tag: "Frontend Tool",
    desc: "A privacy-focused, offline-first document generator...",
    stack: ["React", "Local Storage", "Vite", "Tailwind"],
    link: "https://invo-eight.vercel.app/",
    highlight: false,
  },
  {
    name: "Hunt | Job Aggregator",
    tag: "Internal Tool",
    desc: "Automated lead generation engine...",
    stack: ["TypeScript", "Cron", "Prisma", "Node.js"],
    link: null,
  },
];

export const history = [
  {
    version: "v2.2.0",
    date: "2026-01-25",
    title: "Project 'Kudos' Beta",
    desc: "Shipped MVP for testimonial collection SaaS. Integrated Supabase Auth & React Embeds.",
  },
  {
    version: "v2.1.0",
    date: "2026-01-10",
    title: "Backend Architecture",
    desc: "Migrated focus to raw Node.js/TypeScript. Built custom CLI Task Manager from scratch.",
  },
  {
    version: "v1.5.0",
    date: "2025-12-15",
    title: "Freelance Tooling",
    desc: "Deployed 'Invoice Generator' with client-side PDF rendering. Zero-cost architecture.",
  },
  {
    version: "v1.0.0",
    date: "2025-11-01",
    title: "System Initialization",
    desc: "Transitioned to Full-Stack development. Core stack established: React, Vite, Node.",
  },
];
