"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/content/projects";

const categories = [
  {
    label: "Current Work",
    items: ["CRM System", "LMS Platform", "KPI Management System", "Document Management System", "Internal App Portal", "WhatsApp Automation Stack", "PT Mitraberdaya Optima Website", "MBO Sustain Website", "Toppangan Consulting Website", "MBO Info Training Portal"],
  },
];

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${p.slug}`}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "0.75rem",
        padding: "0.9rem 0.75rem",
        borderRadius: "6px",
        background: hovered ? "var(--surface)" : "transparent",
        border: `1px solid ${hovered ? "var(--border-mid)" : "transparent"}`,
        transition: "background 0.15s, border-color 0.15s",
        position: "relative",
        cursor: "pointer",
        textDecoration: "none",
        height: "100%",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
          <h3 style={{
            fontSize: "0.9rem", fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {p.name}
          </h3>
        </div>
        <p style={{
          fontSize: "0.78rem", color: "var(--text-faint)", lineHeight: 1.55, marginTop: "0.2rem",
          display: "-webkit-box", WebkitLineClamp: hovered ? "unset" : 3, WebkitBoxOrient: "vertical", overflow: hovered ? "visible" : "hidden",
        }}>
          {p.description}
        </p>

        {/* Stack tags — always visible */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "0.55rem" }}>
          {p.stack.map((t) => (
            <span key={t} className="tag" style={{ fontSize: "0.68rem", padding: "0.08rem 0.45rem" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Arrow indicator on hover */}
      <span
        style={{
          color: "var(--text-faint)",
          fontSize: "0.8rem",
          flexShrink: 0,
          marginTop: "2px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.15s",
        }}
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <span className="section-label">Projects</span>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {categories.map((cat) => {
            const catProjects = projects.filter((p) => cat.items.includes(p.name));
            return (
              <div key={cat.label} style={{ position: "relative", marginBottom: "3rem" }}>
                <div
                  aria-hidden="true"
                  style={{
                    fontSize: "clamp(2.5rem, 7vw, 5rem)",
                    fontWeight: 800,
                    color: "transparent",
                    WebkitTextStroke: "1.5px var(--watermark-stroke)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                    marginBottom: "1.5rem",
                  }}
                >
                  {cat.label}
                </div>

                {/* Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: "0.25rem",
                    alignItems: "stretch",
                  }}
                >
                  {catProjects.map((p, i) => (
                    <ProjectCard key={i} p={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
