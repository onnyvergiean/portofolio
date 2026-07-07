export default function SectionLabel({ path }: { path: string }) {
  return (
    <span className="section-label">
      <span className="section-label-slash">/</span>{path}
    </span>
  );
}
