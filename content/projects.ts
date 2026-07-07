export interface CensorBox {
  x: number; y: number; w: number; h: number; // percentages 0-100
}

export interface ProjectImage {
  src: string;
  censor?: CensorBox[];
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  role?: string;
  stack: string[];
  images?: ProjectImage[];
  link?: string;
  repo?: string;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    name: "CRM System",
    slug: "crm-system",
    description:
      "Multi-department CRM for sales pipeline, contact management, and reporting with role-based access.",
    longDescription:
      "An internal CRM built for a multi-department organization. Covers contact management, deal pipeline tracking, activity logging, and reporting dashboards with role-based access.",
    role: "Backend Developer. Designed and built the REST API, database schema, and server infrastructure. Deployed on AWS EC2 with PM2 as the process manager and Caddy as the reverse proxy.",
    stack: ["Express.js", "TypeScript", "MySQL", "AWS EC2", "AWS SES", "PM2", "Caddy"],
    images: [
      { src: "CRM/CRM.png" },
    ],
    highlight: true,
  },
  {
    name: "LMS Platform",
    slug: "lms-platform",
    description:
      "Employee LMS with video modules, quiz builder, auto-grading, and training attendance tracking.",
    longDescription:
      "An internal LMS built for structured employee onboarding and training. Features include video modules, course materials with access control, a form builder for quizzes and assignments with auto-grading, training session management with RSVP and attendance tracking, and a progress dashboard per learner. Admins can manage courses, users, permissions, and send invitations.",
    role: "Backend Developer. Built the REST API, form builder engine, grading logic, and notification system. Deployed on VPS using Phusion Passenger.",
    stack: ["Node.js", "Express.js", "TypeScript", "MySQL", "AWS S3", "Phusion Passenger"],
    images: [
      { src: "LMS/LMS.png" },
    ],
  },
  {
    name: "KPI Management System",
    slug: "kpi-dashboard",
    description:
      "KPI tracking with multi-level approval workflows, analytics dashboards, and export to Excel and PDF.",
    longDescription:
      "An internal system for tracking employee KPIs and performance across departments. Features a multi-level approval workflow, role-based access control, automated notifications, and an analytics dashboard with charts and export to Excel, PDF, and CSV.",
    role: "Backend Developer. Designed and built the REST API, database schema, and server infrastructure. Deployed on VPS using Phusion Passenger.",
    stack: ["Express.js", "TypeScript", "MySQL", "AWS SES", "Phusion Passenger"],
    images: [
      { src: "KPI/KPI.png" },
    ],
  },
  {
    name: "Document Management System",
    slug: "document-management",
    description:
      "ISO document hub with in-browser PDF viewer, folder navigation, and per-user access control.",
    longDescription:
      "An internal DMS built for secure document storage and sharing. Features include PDF upload and in-browser viewing, hierarchical folder navigation, search, and a complete permission system: users only see files and folders they are granted access to. Integrated into the company's internal app portal.",
    role: "Backend Developer. Built the REST API, folder system, permission engine, and file storage integration. Deployed on VPS using Phusion Passenger.",
    stack: ["Node.js", "Express.js", "TypeScript", "MySQL", "AWS S3", "Phusion Passenger"],
    images: [
      { src: "DMS/DMS.png" },
    ],
  },
  {
    name: "Internal App Portal",
    slug: "super-app",
    description:
      "Internal super-app aggregating all company tools with announcements and event management.",
    longDescription:
      "An internal portal (Super App) that aggregates all MBO applications into a single dashboard. Features app tiles with categorization, company announcements, events & activities feed, a user guide section, and an admin panel for managing app listings and content. Accessible only via VPN.",
    role: "Backend Developer. Built the REST API, admin panel, and content management. Deployed on AWS EC2 with PM2 and Caddy.",
    stack: ["Node.js", "Express.js", "TypeScript", "MySQL", "AWS EC2", "PM2", "Caddy"],
    images: [
      { src: "Super Apps/Super App.png" },
    ],
  },
  {
    name: "WhatsApp Automation Stack",
    slug: "payment-automation",
    description:
      "Auto-messages website leads via WhatsApp, routes conversations to Chatwoot, and syncs data into the CRM.",
    longDescription:
      "When a lead submits an inquiry on the website, n8n picks up the trigger, sends an automated WhatsApp message via Waha (self-hosted WhatsApp HTTP API), and syncs the conversation to Chatwoot for the team to handle. n8n also wires the lead data directly into the CRM so sales pipelines stay up to date without manual entry. All services run in Docker containers on AWS EC2.",
    role: "Built and self-hosted the full stack. Configured Waha and Chatwoot on Docker, designed the n8n automation workflows connecting the website, WhatsApp, Chatwoot, and CRM.",
    stack: ["n8n", "Chatwoot", "Waha", "Docker", "AWS EC2"],
    images: [
      { src: "Chatwoot/Chatwoot.png" },
    ],
  },
  {
    name: "PT Mitraberdaya Optima Website",
    slug: "mitraberdaya-website",
    description:
      "Company profile with headless CMS and Midtrans payments. 2M+ Search Console impressions within 3 months of launch.",
    longDescription:
      "Full rebuild of the company's public-facing website from WordPress to a custom Next.js + Express stack. Includes a headless CMS for non-technical staff to manage content, a training catalog with Midtrans payment integration, and transactional emails via AWS SES. Deployed on VPS using Phusion Passenger. The migration resulted in a major SEO improvement, reaching 2M+ impressions within the first 3 months.",
    role: "Fullstack Developer. Built and maintained both the frontend (Next.js/React) and backend (Express.js REST API), including CMS, training catalog, payment flow, and deployment on VPS via Phusion Passenger.",
    stack: ["Next.js", "React", "Express.js", "TypeScript", "MySQL", "Prisma", "Midtrans", "AWS S3", "AWS SES", "Phusion Passenger"],
    images: [
      { src: "PT Mitraberdaya Optima/PT Mitraberdaya Optima 1.png" },
      { src: "PT Mitraberdaya Optima/PT Mitraberdaya Optima 2.png" },
      { src: "PT Mitraberdaya Optima/PT Mitraberdaya Optima 3.png" },
      { src: "PT Mitraberdaya Optima/PT Mitraberdaya Optima 4.png" },
    ],
    link: "https://mitraberdaya.id/id",
    highlight: true,
  },
  {
    name: "MBO Sustain Website",
    slug: "mbosustain-website",
    description:
      "Company profile for MBO Sustain, a sustainability consulting brand under PT Mitra Berdaya Optima.",
    longDescription:
      "Company profile website built and maintained as part of the MBO group. Same custom Next.js and Express stack as the main Mitraberdaya site, with content management and VPS deployment.",
    role: "Backend Developer. Built the REST API, CMS, and server infrastructure. Deployed on AWS EC2 with PM2 and Caddy.",
    stack: ["Express.js", "TypeScript", "MySQL", "Prisma", "AWS EC2", "AWS SES", "PM2", "Caddy"],
    images: [{ src: "MBO Sustain/Sustain.png" }],
    link: "https://mbosustain.id/en",
  },
  {
    name: "Toppangan Consulting Website",
    slug: "toppangan-website",
    description:
      "Company profile for Toppangan Consulting, a food safety consulting firm under PT Mitra Berdaya Optima.",
    longDescription:
      "Company profile website for a food safety consulting firm covering BPOM, Halal, GMP, ISO 22000, HACCP, and FSSC 22000 certifications. Built and maintained as part of the MBO group.",
    role: "Backend Developer. Built the REST API, CMS, and server infrastructure. Deployed on AWS EC2 with PM2 and Caddy.",
    stack: ["Express.js", "TypeScript", "MySQL", "Prisma", "AWS EC2", "AWS SES", "PM2", "Caddy"],
    images: [{ src: "TPC/TPC.png" }],
    link: "https://toppanganconsulting.com/en",
  },
  {
    name: "MBO Info Training Portal",
    slug: "mbo-info",
    description:
      "ISO training schedule portal with Payload CMS for non-technical content management.",
    longDescription:
      "A public training information portal listing ISO certification schedules and webinars managed by the MBO team. Built with Next.js on the frontend and Payload CMS as the headless content management system, allowing non-technical staff to publish and manage training content independently.",
    role: "Fullstack Developer. Built the frontend, integrated Payload CMS, and handled deployment with Docker, PM2, and Caddy.",
    stack: ["Next.js", "React", "TypeScript", "Payload CMS", "Docker", "PM2", "Caddy"],
    images: [
      { src: "Info MBO/image.png" },
      { src: "Info MBO/payload.png" },
    ],
  },
];
