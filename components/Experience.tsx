import React from "react";

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
  {
    period: "Sep 2023 – Dec 2023",
    role: "Backend Engineering Bootcamp",
    type: "Seasonal",
    company: "FGA × Binar Academy",
    location: "Indonesia · Remote",
    current: false,
    highlights: [
      <>Incentive-based backend program building <H>production-grade APIs</H>.</>,
      <>Built real-world projects with Node.js, Express.js, Prisma, and PostgreSQL.</>,
    ],
    stack: ["Node.js", "Express.js", "Prisma ORM", "PostgreSQL"],
  },
  {
    period: "Mar 2023 – Apr 2023",
    role: "Scalable Web Service with Golang",
    type: "Training",
    company: "Digital Talent Scholarship × Hacktiv8",
    location: "Indonesia",
    current: false,
    highlights: [
      <><H>6-week intensive training</H> on scalable web services in Go.</>,
      <>Covered GORM, REST API design, and performance-oriented backend patterns.</>,
    ],
    stack: ["Go", "GORM", "REST API"],
  },
  {
    period: "Jul 2022 – Aug 2022",
    role: "Junior Web Developer",
    type: "Training",
    company: "Digital Talent Scholarship",
    location: "Indonesia",
    current: false,
    highlights: [
      "Web development training covering server-side scripting and relational databases.",
    ],
    stack: ["PHP", "MySQL"],
  },
  {
    period: "May 2018 – Nov 2018",
    role: "IT Support",
    type: "Internship",
    company: "PT Aino Indonesia",
    location: "South Jakarta",
    current: false,
    highlights: [
      "IT support for internal operations: hardware and software troubleshooting.",
      "Developed communication and problem-solving skills in a professional enterprise environment.",
    ],
    stack: ["IT Support", "Communication", "Problem Solving"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <span className="section-label">Experience</span>

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
                          fontSize: "0.65rem",
                          fontWeight: 500,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#4ade80",
                          background: "rgba(74,222,128,0.08)",
                          border: "1px solid rgba(74,222,128,0.15)",
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
