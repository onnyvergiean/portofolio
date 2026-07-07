"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About", section: "about" },
  { href: "#experience", label: "Experience", section: "experience" },
  { href: "#projects", label: "Projects", section: "projects" },
  { href: "#skills", label: "Skills", section: "skills" },
  { href: "#education", label: "Education", section: "education" },
  { href: "#contact", label: "Contact", section: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const lockedSection = useRef("");
  const lockTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const pathname = usePathname();

  const isProjectPage = pathname.startsWith("/projects/");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on scroll
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
        if (lockedSection.current) {
          setActive(lockedSection.current);
          return;
        }
        const atBottom =
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 60;
        if (atBottom) {
          setActive("contact");
          return;
        }
        let best = "";
        let bestDist = Infinity;
        for (const { section } of links) {
          const el = document.getElementById(section);
          if (!el) continue;
          const top = el.getBoundingClientRect().top - NAV_H;
          if (top <= 0) {
            const dist = Math.abs(top);
            if (dist < bestDist) {
              bestDist = dist;
              best = section;
            }
          }
        }
        setActive(best);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isProjectPage]);

  const navHref = (href: string) => (isProjectPage ? `/${href}` : href);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.2s, border-color 0.2s",
          background: scrolled || menuOpen ? "var(--nav-bg)" : "transparent",
          borderBottom: `1px solid ${scrolled || menuOpen ? "var(--border)" : "transparent"}`,
          backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "52px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Home"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              border: "1px solid var(--border-mid)",
              borderRadius: "6px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--text)",
              textDecoration: "none",
              background: "var(--surface)",
              letterSpacing: "-0.03em",
              transition: "border-color 0.15s",
              flexShrink: 0,
            }}
          >
            OV
          </Link>

          {/* Desktop nav */}
          <div
            className="nav-desktop"
            style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}
          >
            {links.map((l) => {
              const isActive = active === l.section;
              return (
                <a
                  key={l.href}
                  href={navHref(l.href)}
                  onClick={() => {
                    lockedSection.current = l.section;
                    setActive(l.section);
                    clearTimeout(lockTimer.current);
                    lockTimer.current = setTimeout(() => {
                      lockedSection.current = "";
                    }, 1200);
                  }}
                  style={{
                    fontSize: "0.9rem",
                    color: isActive ? "var(--text)" : "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                    fontWeight: isActive ? 500 : 400,
                    position: "relative",
                  }}
                  className={isActive ? "nav-item nav-item-active" : "nav-item"}
                >
                  {l.label}
                </a>
              );
            })}

            <span
              style={{
                width: "1px",
                height: "16px",
                background: "var(--border-mid)",
              }}
              aria-hidden="true"
            />

            <ThemeToggle />

            {/* GitHub */}
            <a
              href="https://github.com/onnyvergiean"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--text-muted)",
                display: "flex",
                transition: "color 0.15s",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/onnyvergiean17/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--text-muted)",
                display: "flex",
                transition: "color 0.15s",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Mobile right: icons + hamburger */}
          <div
            className="nav-mobile"
            style={{ display: "none", alignItems: "center", gap: "1rem" }}
          >
            <a
              href="https://github.com/onnyvergiean"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", display: "flex" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            <ThemeToggle />

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-muted)",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                padding: "4px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "18px",
                  height: "1.5px",
                  background: "currentColor",
                  borderRadius: "2px",
                  transition: "transform 0.2s, opacity 0.2s",
                  transform: menuOpen
                    ? "translateY(5.5px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "18px",
                  height: "1.5px",
                  background: "currentColor",
                  borderRadius: "2px",
                  transition: "opacity 0.2s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "18px",
                  height: "1.5px",
                  background: "currentColor",
                  borderRadius: "2px",
                  transition: "transform 0.2s, opacity 0.2s",
                  transform: menuOpen
                    ? "translateY(-5.5px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            className="nav-mobile"
            style={{
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid var(--border)",
              padding: "0.5rem 2rem 1rem",
            }}
          >
            {links.map((l) => {
              const isActive = active === l.section;
              return (
                <a
                  key={l.href}
                  href={navHref(l.href)}
                  onClick={() => {
                    lockedSection.current = l.section;
                    setActive(l.section);
                    clearTimeout(lockTimer.current);
                    lockTimer.current = setTimeout(() => {
                      lockedSection.current = "";
                    }, 1200);
                    setMenuOpen(false);
                  }}
                  style={{
                    fontSize: "0.95rem",
                    color: isActive ? "var(--text)" : "var(--text-muted)",
                    textDecoration: "none",
                    fontWeight: isActive ? 500 : 400,
                    padding: "0.65rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="https://www.linkedin.com/in/onnyvergiean17/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                padding: "0.65rem 0",
                marginTop: "0.25rem",
              }}
            >
              LinkedIn
            </a>
          </div>
        )}
      </header>
    </>
  );
}
