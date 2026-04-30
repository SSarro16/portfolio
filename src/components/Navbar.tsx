import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Simone Sarro home">
        <span className="brand-mark">SS</span>
        <span>
          <strong>{profile.name}</strong>
          <small>frontend.dev / react-native.dev</small>
        </span>
      </a>
      <div className="nav-actions">
        <a href="#projects">{String(t.navProjects)}</a>
        <a href="#stack">{String(t.navStack)}</a>
        <a href={`mailto:${profile.email}`}>{String(t.navMail)}</a>
        <LanguageToggle />
      </div>
    </nav>
  );
}
