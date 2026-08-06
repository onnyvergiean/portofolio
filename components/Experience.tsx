import React from "react";
import SectionLabel from "@/components/SectionLabel";

const H = ({ children }: { children: string }) => (
  <span style={{ color: "var(--text)", fontWeight: 600 }}>{children}</span>
);

const jobs = [
  {
    period: "Aug 2024 – Present",
    role: "Back End Developer",
    type: "Full-time",
    company: "PT Mitra Berdaya Optima",
    location: "Yogyakarta",
    current: true,
    highlights: [
      <><H>Architected enterprise internal platforms</H>: CRM, LMS, KPI monitoring, and document management — translating multi-department workflows into production-ready systems.</>,
      <>Built scalable <H>RESTful APIs</H> and database architecture with Node.js, Express.js, MySQL, and Prisma.</>,
      <>Developed backend for two additional business brands, including a <H>training catalog platform</H> built with Next.js and Payload CMS.</>,
      <><H>Automated operational workflows</H> and payment processing by integrating Chatwoot, n8n, WhatsApp API, and Midtrans.</>,
      <>Deployed on <H>AWS EC2</H> with S3 for file storage; managed containerized services via Docker.</>,
      <>Implemented <H>centralized SSO with Keycloak</H> across all internal platforms, standardizing identity and access control company-wide.</>,
    ],
    stack: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "MySQL", "Prisma", "Keycloak", "AWS EC2", "S3", "Docker", "n8n", "Midtrans", "Payload CMS"],
  },
  {
    period: "Feb 2024 – Aug 2024",
    role: "IT Fullstack",
    type: "Contract",
    company: "PT Mitra Berdaya Optima",
    location: "Yogyakarta",
    current: false,
    highlights: [
      <>Migrated company website from <H>WordPress to Next.js</H>, improving performance and scalability.</>,
      <>Implemented SEO optimization, reaching <H>2M+ Search Console impressions</H> within 3 months.</>,
      <>Built end-to-end web features and <H>API integrations</H> aligned with business requirements.</>,
      <>Maintained and optimized website performance and frontend architecture.</>,
    ],
    stack: ["Next.js", "React", "TypeScript", "SEO"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <SectionLabel path="experience" />

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {jobs.map((job, i) => (
            <div key={i}>
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "0.75rem",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", flexWrap: "wrap" }}>
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "var(--text)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {job.role}
                    </h3>
                    {job.current && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          fontWeight: 500,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--live)",
                          background: "var(--live-soft)",
                          border: "1px solid var(--live-soft)",
                          borderRadius: "100px",
                          padding: "0.12rem 0.5rem",
                        }}
                      >
                        Now
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-faint)", marginTop: "0.15rem" }}>
                    {job.company} · {job.type} · {job.location}
                  </p>
                </div>
                <span style={{ fontSize: "0.78rem", color: "var(--text-faint)", flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>
                  {job.period}
                </span>
              </div>

              {/* Bullets */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "1rem" }}>
                {job.highlights.map((h, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      gap: "0.65rem",
                      fontSize: "0.87rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    <span style={{ color: "var(--text-faint)", flexShrink: 0, marginTop: "0.1rem", userSelect: "none" }}>–</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {job.stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {i < jobs.length - 1 && (
                <div style={{ height: "1px", background: "var(--border)", marginTop: "2.5rem" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
