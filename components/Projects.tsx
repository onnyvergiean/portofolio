"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { projects } from "@/content/projects";
import SectionLabel from "@/components/SectionLabel";

function ProjectRow({
  p, active, onEnter, onLeave,
}: {
  p: typeof projects[0];
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const popupId = useId();

  return (
    <div
      className={`project-item${active ? " is-active" : ""}`}
      style={{ position: "relative" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onLeave();
      }}
      onKeyDown={(e) => { if (e.key === "Escape") onLeave(); }}
    >
      <Link
        href={`/projects/${p.slug}`}
        className="project-row"
        aria-describedby={popupId}
        onFocus={onEnter}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          padding: "0.85rem 0.75rem",
          borderBottom: "1px solid var(--border)",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        <h3 style={{
          fontSize: "0.9rem", fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>
          {p.name}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexShrink: 0, maxWidth: "60%" }}>
          <span style={{
            fontSize: "0.72rem", color: "var(--text-faint)", fontFamily: "var(--font-mono)",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {p.stack.slice(0, 3).join(" · ")}
          </span>
          <span className="project-chevron" aria-hidden="true">▾</span>
        </div>
      </Link>

      {/* Popup — always directly below its own row, never shifts the list.
          Visibility comes from the `.is-active` class, driven by the single
          shared activeIndex in the parent, so only one can ever be open. */}
      <div id={popupId} role="dialog" className="project-popup">
        <h3 style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>
          {p.name}
        </h3>

        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "0.6rem" }}>
          {p.longDescription ?? p.description}
        </p>

        {p.role && (
          <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "0.6rem" }}>
            <span style={{ color: "var(--signal)" }}>role — </span>
            {p.role}
          </p>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.7rem" }}>
          {p.stack.map((t) => (
            <span key={t} className="tag" style={{ fontSize: "0.68rem", padding: "0.08rem 0.45rem" }}>{t}</span>
          ))}
        </div>

        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.76rem", color: "var(--signal)", textDecoration: "none" }}>
            Visit site ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  // A single shared index, not per-row state, so opening one project's
  // popup always closes any other — they can never show at the same time.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <SectionLabel path="projects" />

        <div>
          {projects.map((p, i) => (
            <ProjectRow
              key={i}
              p={p}
              active={activeIndex === i}
              onEnter={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex((cur) => (cur === i ? null : cur))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
