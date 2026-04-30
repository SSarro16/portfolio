import type { CSSProperties } from "react";

type CodePanelProps = {
  code: string;
  filename?: string;
  compact?: boolean;
};

export function CodePanel({ code, filename, compact = false }: CodePanelProps) {
  const lines = code.split("\n");

  return (
    <div className={`code-panel code-panel-typing ${compact ? "code-panel-compact" : ""}`}>
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
            <span
              className="code-line"
              key={`${line}-${index}`}
              style={
                {
                  "--line-index": index,
                  "--line-chars": Math.max(line.length, 1),
                } as CSSProperties
              }
            >
              <span className="line-number">{index + 1}</span>
              <span className="line-text">{line || " "}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
