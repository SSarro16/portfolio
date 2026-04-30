import { AdFidoIcon } from "./icons";

type AppIconProps = {
  title: string;
  favicon?: string;
};

export function AppIcon({ title, favicon }: AppIconProps) {
  if (title === "AdFido") {
    return (
      <span className="app-icon" aria-hidden="true">
        <AdFidoIcon />
      </span>
    );
  }

  if (favicon) {
    return (
      <span className="app-icon">
        <img src={favicon} alt="" loading="lazy" />
      </span>
    );
  }

  return (
    <span className="app-icon app-icon-fallback" aria-hidden="true">
      {title.slice(0, 2).toUpperCase()}
    </span>
  );
}
