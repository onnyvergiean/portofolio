import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import ProjectGallery from "@/components/ProjectGallery";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.name} — Onny Vergiean Saputra` };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const others = projects.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
    <NetworkBackground />
    <Nav />
    <main style={{ minHeight: "100vh", paddingTop: "80px", paddingBottom: "5rem", position: "relative", zIndex: 1 }}>
      <div className="container">
        {/* Back */}
        <Link
          href="/#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.82rem",
            fontWeight: 500,
            color: "var(--text-muted)",
            textDecoration: "none",
            marginBottom: "2.5rem",
            padding: "0.35rem 0.75rem",
            borderRadius: "6px",
            border: "1px solid var(--border-mid)",
            background: "var(--surface)",
            transition: "color 0.15s, border-color 0.15s, background 0.15s",
          }}
          className="back-link"
        >
          ← Projects
        </Link>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
            <h1
              style={{
                fontSize: "clamp(1.4rem, 4vw, 2rem)",
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              {project.name}
            </h1>
          </div>

          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            {project.longDescription ?? project.description}
          </p>
        </div>

        {/* Role */}
        {project.role && (
          <div style={{ marginBottom: "1.5rem", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-faint)", flexShrink: 0, paddingTop: "2px" }}>
              My role
            </span>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
              {project.role}
            </p>
          </div>
        )}

        {/* Stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "3rem" }}>
          {project.stack.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <ProjectGallery images={project.images} name={project.name} />
        )}

        {/* CTA */}
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "3rem" }}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Visit site
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              View repo
            </a>
          )}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid var(--border)" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "1.25rem" }}>
              Other projects
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "0.25rem",
              }}
            >
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                    padding: "0.9rem 0.75rem",
                    borderRadius: "6px",
                    border: "1px solid transparent",
                    textDecoration: "none",
                    transition: "background 0.15s, border-color 0.15s",
                  }}
                  className="other-project-card"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em" }}>
                      {p.name}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.76rem", color: "var(--text-faint)", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {p.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", marginTop: "0.2rem" }}>
                    {p.stack.map((t) => (
                      <span key={t} className="tag" style={{ fontSize: "0.65rem", padding: "0.05rem 0.4rem" }}>{t}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
}
