export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "1.75rem 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "0.78rem", color: "var(--text-faint)" }}>
          Onny Vergiean Saputra
        </span>
        <span style={{ fontSize: "0.78rem", color: "var(--text-faint)" }}>
          © 2026
        </span>
      </div>
    </footer>
  );
}
