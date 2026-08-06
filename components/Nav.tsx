"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about",       section: "about" },
  { href: "#experience",  section: "experience" },
  { href: "#highlights",  section: "highlights" },
  { href: "#projects",    section: "projects" },
  { href: "#skills",      section: "skills" },
  { href: "#education",   section: "education" },
  { href: "#contact",     section: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const lockedSection = useRef("");
  const lockTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");

  useEffect(() => {
    if (!menuOpen) return;
    const fn = () => setMenuOpen(false);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [menuOpen]);

  useEffect(() => {
    if (isProjectPage) {
      startTransition(() => setActive("projects"));
      return;
    }
    const NAV_H = 70;
    const update = () => {
      startTransition(() => {
        if (lockedSection.current) { setActive(lockedSection.current); return; }
        const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 60;
        if (atBottom) { setActive("contact"); return; }
        let best = "";
        let bestDist = Infinity;
        for (const { section } of links) {
          const el = document.getElementById(section);
          if (!el) continue;
          const top = el.getBoundingClientRect().top - NAV_H;
          if (top <= 0) {
            const dist = Math.abs(top);
            if (dist < bestDist) { bestDist = dist; best = section; }
          }
        }
        setActive(best);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isProjectPage]);

  const navHref = (href: string) => isProjectPage ? `/${href}` : href;

  const handleClick = (section: string) => {
    lockedSection.current = section;
    setActive(section);
    clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => { lockedSection.current = ""; }, 1200);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isProjectPage) return;
    e.preventDefault();
    lockedSection.current = "";
    setActive("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Route bar — desktop */}
      <nav className="nav-bar">
        <Link href="/" onClick={handleLogoClick} className="nav-brand">onny/</Link>
        <div className="nav-divider" />
        <div className="nav-links">
          {links.map((l) => {
            const isActive = active === l.section;
            return (
              <a
                key={l.href}
                href={navHref(l.href)}
                onClick={() => handleClick(l.section)}
                className={`nav-link${isActive ? " nav-link-active" : ""}`}
              >
                /{l.section}
              </a>
            );
          })}
        </div>
        <div className="nav-divider" />
        <ThemeToggle />
      </nav>

      {/* Mobile: top-left brand */}
      <div
        className="nav-mobile-btn"
        style={{
          position: "fixed",
          top: "1rem",
          left: "1.25rem",
          zIndex: 51,
          display: "none",
          alignItems: "center",
        }}
      >
        <Link href="/" onClick={handleLogoClick} className="nav-brand" style={{ padding: 0 }}>onny/</Link>
      </div>

      {/* Mobile: top-right buttons */}
      <div
        className="nav-mobile-btn"
        style={{
          position: "fixed",
          top: "1rem",
          right: "1.25rem",
          zIndex: 51,
          display: "none",
          alignItems: "center",
          gap: "0.6rem",
        }}
      >
        <ThemeToggle />
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: "var(--nav-bg)",
            border: "1px solid var(--border-mid)",
            borderRadius: "8px",
            cursor: "pointer",
            color: "var(--text-muted)",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            padding: "7px 8px",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <span style={{ display: "block", width: "18px", height: "1.5px", background: "currentColor", borderRadius: "2px", transition: "transform 0.2s, opacity 0.2s", transform: menuOpen ? "translateY(5.5px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: "18px", height: "1.5px", background: "currentColor", borderRadius: "2px", transition: "opacity 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "18px", height: "1.5px", background: "currentColor", borderRadius: "2px", transition: "transform 0.2s, opacity 0.2s", transform: menuOpen ? "translateY(-5.5px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "4rem",
            left: "1rem",
            right: "1rem",
            zIndex: 50,
            background: "var(--nav-bg)",
            border: "1px solid var(--border-mid)",
            borderRadius: "16px",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {links.map((l) => {
            const isActive = active === l.section;
            return (
              <a
                key={l.href}
                href={navHref(l.href)}
                onClick={() => { handleClick(l.section); setMenuOpen(false); }}
                style={{
                  display: "block",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "10px",
                  fontSize: "0.88rem",
                  fontFamily: "var(--font-mono)",
                  background: isActive ? "var(--signal-soft)" : "transparent",
                  color: isActive ? "var(--signal)" : "var(--text-muted)",
                  fontWeight: isActive ? 500 : 400,
                  textDecoration: "none",
                  transition: "background 0.15s, color 0.15s",
                }}
              >
                /{l.section}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
