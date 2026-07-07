import SectionLabel from "@/components/SectionLabel";

const contacts = [
  {
    label: "Email",
    value: "onny133saputra@gmail.com",
    href: "mailto:onny133saputra@gmail.com",
    external: false,
  },
  {
    label: "WhatsApp",
    value: "+62 822-2672-9128",
    href: "https://wa.me/6282226729128",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/onnyvergiean",
    href: "https://github.com/onnyvergiean",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/onnyvergiean17",
    href: "https://www.linkedin.com/in/onnyvergiean17/",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <SectionLabel path="contact" />

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Let&apos;s build
              <br />
              something great.
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Open to full-time backend roles, freelance work, or a
              conversation about systems and architecture. I respond to every message.
            </p>
            <a href="mailto:onny133saputra@gmail.com" className="btn btn-light">
              Send an email
            </a>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem 0",
                  borderBottom: i < contacts.length - 1 ? "1px solid var(--border)" : "none",
                  textDecoration: "none",
                  gap: "1rem",
                }}
                className="contact-row"
              >
                <span style={{ fontSize: "0.72rem", fontWeight: 500, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.08em", flexShrink: 0 }}>
                  {c.label}
                </span>
                <span style={{ fontSize: "0.88rem", color: "var(--text-muted)", textAlign: "right" }}>
                  {c.value}
                </span>
              </a>
            ))}

            <div style={{ display: "flex", alignItems: "center", padding: "1rem 0", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 500, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Based
              </span>
              <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                Yogyakarta, Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
