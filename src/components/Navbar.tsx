import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Simone Sarro home">
        <span className="brand-mark" aria-hidden="true">
          <img src="/favicon.png" alt="Simone Sarro" />
        </span>
        <span>
          <strong>{profile.name}</strong>
          <small>portfolio.tsx</small>
        </span>
      </a>
      <div className="nav-actions">
        <div className="nav-links">
          <a href="#projects">{String(t.navProjects)}</a>
          <a href="#stack">{String(t.navStack)}</a>
          <a href={`mailto:${profile.email}`}>{String(t.navMail)}</a>
        </div>
        <LanguageToggle />
      </div>
    </nav>
  );
}
