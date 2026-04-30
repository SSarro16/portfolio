import { useState } from "react";

type AppIconProps = {
  title: string;
  favicon?: string;
};

export function AppIcon({ title, favicon }: AppIconProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const fallbackLabel = title.slice(0, 2).toUpperCase();

  return (
    <span className={`app-icon ${favicon && !hasImageError ? "" : "app-icon-fallback"}`} aria-hidden="true">
      <span className="app-icon-label">{fallbackLabel}</span>
      {favicon && !hasImageError ? (
        <img
          src={favicon}
          alt=""
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            setHasImageError(true);
          }}
        />
      ) : null}
    </span>
  );
}
