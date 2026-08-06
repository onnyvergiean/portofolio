import SectionLabel from "@/components/SectionLabel";

export default function Education() {
  return (
    <section id="education" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <SectionLabel path="education" />

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {/* Universitas Amikom */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em", marginBottom: "0.2rem" }}>
                Bachelor of Computer Science
              </h3>
              <p style={{ fontSize: "0.82rem", color: "var(--text-faint)", marginBottom: "0.3rem" }}>
                Universitas Amikom Yogyakarta
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-faint)", fontStyle: "italic" }}>
                Thesis: Content-based Filtering Recommendation System Using SBERT and Cosine Similarity for News Article Recommendations
              </p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: "0.78rem", color: "var(--text-faint)", marginBottom: "0.2rem" }}>2019 – 2023</p>
              <p style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text)" }}>
                GPA 3.93 <span style={{ fontWeight: 400, color: "var(--text-faint)", fontSize: "0.8rem" }}>/ 4.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
