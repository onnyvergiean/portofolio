import Image from "next/image";

const T = ({ children }: { children: string }) => (
  <span style={{ color: "var(--text)", fontWeight: 600 }}>{children}</span>
);

export default function Hero() {
  return (
    <section
      className="section"
      style={{ paddingTop: "120px", paddingBottom: "3.5rem" }}
    >
      <div className="container">
        {/* Avatar + name */}
        <div
          className="fade-up d1"
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "1px solid var(--border-mid)",
            }}
          >
            <Image
              src="/Avatar.jpg"
              alt="Onny Vergiean Saputra"
              width={56}
              height={56}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              unoptimized
              priority
            />
          </div>
          <div>
            <h1 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Onny Vergiean Saputra
            </h1>
            <p style={{ fontSize: "0.8rem", color: "var(--text-faint)", marginTop: "0.2rem" }}>Yogyakarta, Indonesia</p>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.72rem",
                color: "#4ade80",
                background: "rgba(74,222,128,0.08)",
                border: "1px solid rgba(74,222,128,0.15)",
                borderRadius: "100px",
                padding: "0.1rem 0.55rem",
                marginTop: "0.3rem",
              }}
            >
              <span className="status-dot" aria-hidden="true" />
              Open for work
            </span>
          </div>
        </div>

        {/* Prose */}
        <p
          className="fade-up d2"
          style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            lineHeight: 1.75,
          }}
        >
          a <span style={{ color: "var(--text)", fontWeight: 500 }}>Software Engineer</span> based in Indonesia 🇮🇩, building internal platforms, automation systems, and APIs that real teams rely on every day.
          {" "}I work mostly with <T>Node.js</T> <T>TypeScript</T> <T>MySQL</T> <T>PostgreSQL</T> on the
          backend, wire up automation with <T>n8n</T> <T>Chatwoot</T> and <T>Waha</T>, and deploy
          on <T>AWS EC2</T> with <T>PM2</T> and <T>Caddy</T>.
        </p>

        {/* CTAs */}
        <div
          className="fade-up d3 hero-cta"
          style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "2rem" }}
        >
          <a href="#experience" className="btn btn-light">View experience</a>
          <a href="mailto:onny133saputra@gmail.com" className="btn btn-ghost">Get in touch</a>
          <a href="/CV Onny Vergiean Saputra.pdf" download className="btn btn-ghost">Download CV</a>
        </div>
      </div>
    </section>
  );
}
