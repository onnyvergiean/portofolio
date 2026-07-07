const H = ({ children }: { children: string }) => (
  <span style={{ color: "var(--text)", fontWeight: 600 }}>{children}</span>
);

export default function About() {
  return (
    <section id="about" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <span className="section-label">About</span>

        <div
          style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            lineHeight: 1.85,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <p>
            Based in <H>Yogyakarta, Indonesia</H>. My path into software started early, with
            an IT support internship back in <H>2018</H>, followed by web development training
            through Digital Talent Scholarship and a <H>backend engineering bootcamp at Binar Academy</H>.
            I studied Computer Science at Amikom while building my technical foundation along the way.
          </p>
          <p>
            Today I work as a <H>Backend Developer at PT Mitra Berdaya Optima</H>, where I&apos;ve
            architected most of the internal tooling the company runs on: a <H>CRM</H>, an <H>LMS</H>,
            a <H>KPI management system</H>, a <H>document management system</H>, and a <H>WhatsApp
            automation stack</H> that routes leads directly into the sales pipeline. I also implemented
            <H> centralized SSO using Keycloak</H> across all platforms, standardizing identity and
            access control company-wide. These aren&apos;t side projects — they&apos;re <H>live
            systems used by real teams every day</H>.
          </p>
          <p>
            On the fullstack side, I rebuilt the company&apos;s public website from WordPress
            to a <H>Next.js and Express stack</H>, reaching <H>2M+ Google Search Console impressions</H> within
            three months. I also built a <H>training catalog platform</H> using Next.js and Payload CMS
            with <H>Midtrans payment integration</H>, and a <H>WhatsApp automation stack</H> using n8n, Waha,
            and Chatwoot that messages leads, routes conversations, and syncs data into the CRM automatically.
          </p>
          <p>
            I gravitate toward backend work: <H>API design</H>, <H>automation</H>, <H>infrastructure</H>,
            and making complex workflows disappear behind clean interfaces. I like
            solving real problems, not interesting ones.
          </p>
        </div>
      </div>
    </section>
  );
}
