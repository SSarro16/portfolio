type CodePanelProps = {
  code: string;
  filename?: string;
  compact?: boolean;
};

export function CodePanel({ code, filename, compact = false }: CodePanelProps) {
  const lines = code.split("\n");

  return (
    <div className={`code-panel ${compact ? "code-panel-compact" : ""}`}>
      {filename ? (
        <div className="panel-topbar">
          <span className="window-dot red" />
          <span className="window-dot amber" />
          <span className="window-dot green" />
          <span className="filename">{filename}</span>
        </div>
      ) : null}
      <pre>
        <code>
          {lines.map((line, index) => (
            <span className="code-line" key={`${line}-${index}`}>
              <span className="line-number">{index + 1}</span>
              <span className="line-text">{line || " "}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
