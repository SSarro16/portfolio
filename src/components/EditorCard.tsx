import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageProvider";
import { CodePanel } from "./CodePanel";

const profileSnippet = `type Developer = {
  name: "Simone Sarro";
  role: "Junior Web Developer";
  focus: ["React", "TypeScript", "RN/Expo"];
  ships: {
    web: ["goAnimedle", "AdFido", "LVG OnFood"];
    mobile: ["Savemoney"];
  };
  quality: ["ESLint", "Prettier", "Jest", "Vitest"];
  location: "Palermo, Italy";
};`;

const tree = `portfolio/
|- app/hero.tsx
|- projects/goanimedle.ts
|- projects/adfido.ts
|- contact/mail.ts`;

export function EditorCard() {
  const { t } = useLanguage();

  return (
    <aside className="editor-card" aria-label="Developer profile snippet">
      <CodePanel code={profileSnippet} filename={String(t.profileFile)} />
      <div className="profile-meta">
        <span>{String(t.locationLabel)}: {profile.location}</span>
        <span>{String(t.englishLabel)}: {profile.englishLevel}</span>
      </div>
      <div className="file-tree" aria-label={String(t.treeTitle)}>
        <span>{String(t.treeTitle)}</span>
        <pre>{tree}</pre>
      </div>
    </aside>
  );
}
