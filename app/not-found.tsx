import Link from "next/link";
import Nav from "@/components/Nav";
import NetworkBackground from "@/components/NetworkBackground";

export default function NotFound() {
  return (
    <>
      <NetworkBackground />
      <Nav />
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-faint)",
              marginBottom: "1rem",
            }}
          >
            404
          </p>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.03em",
              marginBottom: "0.75rem",
            }}
          >
            Page not found.
          </h1>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
            The page you are looking for does not exist.
          </p>
          <Link href="/" className="btn btn-light">
            Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
