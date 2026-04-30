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

export function EditorCard() {
  const { t } = useLanguage();

  return (
    <aside className="editor-card motion-reveal motion-reveal-right" aria-label="Developer profile snippet">
      <CodePanel code={profileSnippet} filename={String(t.profileFile)} />
    </aside>
  );
}
