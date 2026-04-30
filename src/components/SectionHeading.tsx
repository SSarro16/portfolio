type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  filename?: string;
};

export function SectionHeading({ title, subtitle, filename }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      {filename ? <span className="section-file">{filename}</span> : null}
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}
