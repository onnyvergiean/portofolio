import SectionLabel from "@/components/SectionLabel";

const H = ({ children }: { children: string }) => (
  <span style={{ color: "var(--text)", fontWeight: 600 }}>{children}</span>
);

export default function About() {
  return (
    <section id="about" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <SectionLabel path="about" />

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
            Based in <H>Yogyakarta, Indonesia</H>. I got into software through an IT support
            internship, then web development training and a backend bootcamp at <H>Binar
            Academy</H>, while studying Computer Science at Amikom.
          </p>
          <p>
            I&apos;m a <H>Backend Developer at PT Mitra Berdaya Optima</H>, where I&apos;ve built
            most of the internal systems the company runs on: a <H>CRM</H> that helped grow the
            sales pipeline, a <H>KPI system</H> that replaced manual tracking through spreadsheets
            across departments, and an <H>LMS</H> for structured employee training — plus{" "}
            <H>SSO with Keycloak</H> across every platform.
          </p>
          <p>
            I focus on <H>TypeScript, Node.js, Express, React, Next.js, and Prisma</H>,
            mostly for API design and automation. I&apos;d rather solve a real problem than a merely interesting one.
          </p>
        </div>
      </div>
    </section>
  );
}
