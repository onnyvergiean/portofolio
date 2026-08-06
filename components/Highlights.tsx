import type { ReactNode } from "react";
import SectionLabel from "@/components/SectionLabel";

interface Highlight {
  eyebrow: string;
  name: string;
  context: string;
  problem: string;
  built: string;
  resultStat: string;
  resultDescription: string;
  stack: string[];
}

const highlights: Highlight[] = [
  {
    eyebrow: "Business impact",
    name: "CRM & Project Management System (Backend API)",
    context: "PT Mitra Berdaya Optima · Backend Developer",
    problem:
      "Sales and project tracking were handled manually, with no structured system for the sales team and no real-time visibility for management.",
    built:
      "A backend API for a company CRM and project management system using Node.js, Express, TypeScript, and Prisma ORM, with around 48 feature modules covering client management, sales pipeline, projects, tasks, and revenue reporting — including deal tracking, centralized client and company management, project and timeline management with multi-level approval, revenue and target tracking per team, centralized SSO authentication, and notifications, reminders, and activity logs for accountability.",
    resultStat: "Faster sales pipeline",
    resultDescription:
      "Replaced manual sales and project tracking with a structured pipeline, helping the sales team close deals faster and giving management real-time visibility of team progress.",
    stack: ["Node.js", "Express.js", "TypeScript", "Prisma ORM", "PostgreSQL", "REST API"],
  },
  {
    eyebrow: "Business impact",
    name: "KPI & Performance Management System (Backend API)",
    context: "PT Mitra Berdaya Optima · Backend Developer",
    problem:
      "KPI verification and peer review scoring were tracked and tallied by hand by HR and supervisors, across every department.",
    built:
      "A backend API for a company-wide KPI and performance management system using Node.js, Express, TypeScript, and Prisma ORM, with around 44 feature modules covering KPI submission, competency assessment, peer review, and performance reporting — including a multi-level approval flow, automated peer review scoring, competency assessment across periods, categories, and templates, a real-time performance dashboard, HR system integration for automated attendance and time-off sync, centralized SSO via Keycloak, and notifications, reminders, and auto-escalation for accountability.",
    resultStat: "HR workload reduced",
    resultDescription:
      "Automated the KPI verification and scoring HR and supervisors used to do by hand, freeing up their time and giving management real-time visibility of employee performance.",
    stack: ["Node.js", "Express.js", "TypeScript", "Prisma ORM", "PostgreSQL", "REST API"],
  },
  {
    eyebrow: "Business impact",
    name: "Learning Management System (Backend API)",
    context: "PT Mitra Berdaya Optima · Backend Developer",
    problem:
      "Employee onboarding and training materials were scattered across files and spreadsheets, with no way to see who had actually completed what.",
    built:
      "A backend API for a company-wide learning management system using Node.js, Express, TypeScript, and Prisma ORM, with around 40 feature modules covering employee onboarding, course delivery, assessments, and training sessions — including structured onboarding with customizable templates and progress tracking, course and curriculum management, a quiz and assignment system with automated scoring, instructor-led training session management with invitations and attendance tracking, learner progress and certificate generation, centralized SSO via Keycloak, and learning/onboarding analytics dashboards.",
    resultStat: "Fully digitized training",
    resultDescription:
      "Digitized and standardized employee onboarding and training that was previously manual, and improved real-time visibility of learner progress for management and HR.",
    stack: ["Node.js", "Express.js", "TypeScript", "Prisma ORM", "PostgreSQL", "REST API"],
  },
  {
    eyebrow: "Business impact",
    name: "WhatsApp Automation Stack",
    context: "PT Mitra Berdaya Optima · Backend Developer",
    problem:
      "Website leads sat unanswered until someone manually reached out and re-typed their details into the CRM.",
    built:
      "An n8n workflow that fires on lead submission, sends the first WhatsApp message via Waha, hands the conversation to sales through Chatwoot, and syncs lead data into the CRM automatically.",
    resultStat: "Instant first response",
    resultDescription:
      "Leads get a reply immediately, and the pipeline stays current with zero manual re-entry.",
    stack: ["n8n", "Chatwoot", "Waha", "Docker", "AWS EC2"],
  },
  {
    eyebrow: "Business impact",
    name: "PT Mitraberdaya Optima Website",
    context: "PT Mitra Berdaya Optima · Fullstack Developer",
    problem:
      "The company's WordPress site was slow, hard to maintain, and needed a developer for every content change.",
    built:
      "A full rebuild on Next.js and Express with a headless CMS, a Midtrans-powered training catalog, and transactional email via AWS SES.",
    resultStat: "2M+ impressions",
    resultDescription:
      "Google Search Console impressions within 3 months of launch, with several target keywords reaching Google's top 10. The training catalog's payment flow is fully automated through Midtrans, and non-technical staff now manage content directly.",
    stack: ["Next.js", "React", "Express.js", "TypeScript", "MySQL", "Prisma", "Midtrans", "AWS S3", "AWS SES", "Phusion Passenger"],
  },
];

const RowLabel = ({ children }: { children: string }) => (
  <span className="highlight-row-label" style={{
    fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.06em",
    textTransform: "uppercase", color: "var(--text-faint)", flexShrink: 0, width: "90px", paddingTop: "0.1rem",
  }}>
    {children}
  </span>
);

const Row = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="highlight-row" style={{ display: "flex", gap: "1.5rem", padding: "1.1rem 0" }}>
    <RowLabel>{label}</RowLabel>
    <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
  </div>
);

export default function Highlights() {
  return (
    <section id="highlights" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <SectionLabel path="highlights" />

        <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {highlights.map((h, i) => (
            <div key={h.name} className="highlight-grid" style={{ display: "grid", gap: "2.5rem" }}>
              {/* Sidebar */}
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, color: "var(--signal)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-faint)" }}>
                    {h.eyebrow}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em", marginBottom: "0.4rem" }}>
                  {h.name}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-faint)" }}>{h.context}</p>
              </div>

              {/* Problem / Built / Result */}
              <div>
                <Row label="Problem">
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{h.problem}</p>
                </Row>
                <div style={{ borderTop: "1px solid var(--border)" }} />
                <Row label="Built">
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{h.built}</p>
                </Row>
                <div style={{ borderTop: "1px solid var(--border)" }} />
                <Row label="Result">
                  <div>
                    <p style={{
                      fontFamily: "var(--font-mono)", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", fontWeight: 700,
                      color: "var(--text)", letterSpacing: "-0.01em", marginBottom: "0.5rem",
                    }}>
                      {h.resultStat}
                    </p>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
                      {h.resultDescription}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {h.stack.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </Row>
              </div>

              {i < highlights.length - 1 && (
                <div style={{ gridColumn: "1 / -1", height: "1px", background: "var(--border)", marginTop: "1rem" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
