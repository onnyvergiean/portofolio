import Image from "next/image";
import type { ProjectImage } from "@/content/projects";

export default function CensoredImage({ img, alt, priority }: { img: ProjectImage; alt: string; priority?: boolean }) {
  return (
    <div style={{ position: "relative", width: "100%", lineHeight: 0 }}>
      <Image
        src={`/projects/${img.src}`}
        alt={alt}
        width={1200}
        height={675}
        style={{ width: "100%", height: "auto", display: "block" }}
        unoptimized
        priority={priority}
      />
      {img.censor?.map((box, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: `${box.x}%`,
            top: `${box.y}%`,
            width: `${box.w}%`,
            height: `${box.h}%`,
            background: "#111111",
            borderRadius: "4px",
          }}
        />
      ))}
    </div>
  );
}
