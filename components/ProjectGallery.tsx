"use client";

import { useState } from "react";
import type { ProjectImage } from "@/content/projects";
import CensoredImage from "@/components/CensoredImage";

export default function ProjectGallery({ images, name }: { images: ProjectImage[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      {/* Main image */}
      <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)" }}>
        <CensoredImage img={images[active]} alt={`${name} screenshot ${active + 1}`} priority />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: 0,
                border: `1.5px solid ${active === i ? "var(--text-muted)" : "var(--border)"}`,
                borderRadius: "6px",
                overflow: "hidden",
                background: "var(--surface)",
                cursor: "pointer",
                flex: 1,
                opacity: active === i ? 1 : 0.45,
                transition: "opacity 0.15s, border-color 0.15s",
              }}
              aria-label={`Screenshot ${i + 1}`}
            >
              <CensoredImage img={img} alt={`${name} thumbnail ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
