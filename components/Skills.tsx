const categories = [
  { label: "Languages & Frameworks", items: ["JavaScript", "TypeScript", "Node.js", "Express.js", "Next.js", "React", "Redux", "Zustand"] },
  { label: "Database & CMS",         items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Prisma", "Payload CMS"] },
  { label: "Auth & Infrastructure",  items: ["Keycloak (SSO)", "Docker", "AWS EC2", "AWS S3", "PM2", "Caddy"] },
  { label: "Automation & Integration", items: ["n8n", "Chatwoot", "Waha API", "Midtrans", "Google Maps API", "ONLYOFFICE"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <span className="section-label">Skills</span>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "2rem",
                padding: "1rem 0",
                borderBottom: i < categories.length - 1 ? "1px solid var(--border)" : "none",
              }}
              className="skills-row"
            >
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-faint)",
                  fontWeight: 500,
                  minWidth: "100px",
                  flexShrink: 0,
                }}
                className="skills-label"
              >
                {cat.label}
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {cat.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
