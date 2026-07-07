import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="section"
      style={{ paddingTop: "140px", paddingBottom: "6rem" }}
    >
      <div className="container hero-grid">
        <div>
          {/* Avatar + name + live dot */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "3rem" }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "1px solid var(--border-mid)",
              }}
            >
              <Image
                src="/Avatar.jpg"
                alt="Onny Vergiean Saputra"
                width={36}
                height={36}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                unoptimized
                priority
              />
            </div>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Onny Vergiean Saputra
            </span>
            <span className="status-dot" aria-hidden="true" />
          </div>

          {/* Big statement */}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "0.5rem",
            }}
          >
            Software Engineer.
          </h1>
          <p
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
              fontWeight: 700,
              color: "var(--text-faint)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            Yogyakarta, Indonesia.
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "34rem",
              marginBottom: "2.5rem",
            }}
          >
            Backend-leaning developer building the APIs, automation, and internal
            platforms an organization actually runs on.
          </p>

          {/* CTAs */}
          <div
            className="hero-cta"
            style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}
          >
            <a href="#experience" className="btn btn-light">View experience</a>
            <a href="#projects" className="btn btn-ghost">View projects</a>
            <a href="mailto:onny133saputra@gmail.com" className="btn btn-ghost">Get in touch</a>
            <a href="/CV Onny Vergiean Saputra.pdf" download className="btn btn-ghost">Download CV</a>
          </div>
        </div>

        {/* Signature: Onny as an API resource */}
        <div className="hero-card">
          <div className="hero-card-head">
            <span className="hero-card-method">GET /onny</span>
            <span className="hero-card-status">200 OK</span>
          </div>
          <div className="hero-card-body">
            <div>{"{"}</div>
            <div className="hero-card-line">
              <span className="hero-card-key">&quot;role&quot;</span>: <span className="hero-card-string">&quot;Backend Developer&quot;</span>,
            </div>
            <div className="hero-card-line">
              <span className="hero-card-key">&quot;focus&quot;</span>: [<span className="hero-card-string">&quot;apis&quot;</span>, <span className="hero-card-string">&quot;automation&quot;</span>, <span className="hero-card-string">&quot;infra&quot;</span>],
            </div>
            <div className="hero-card-line">
              <span className="hero-card-key">&quot;status&quot;</span>: <span className="hero-card-live">&quot;open_for_work&quot;</span>,
            </div>
            <div className="hero-card-line">
              <span className="hero-card-key">&quot;based_in&quot;</span>: <span className="hero-card-string">&quot;Yogyakarta, ID&quot;</span>
            </div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
