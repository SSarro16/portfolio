import { languageNames, type Language } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageProvider";

const languages: Language[] = ["it", "en"];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle" role="group" aria-label="Language selector">
      {languages.map((item) => (
        <button
          type="button"
          key={item}
          className={item === language ? "is-active" : ""}
          onClick={() => setLanguage(item)}
          aria-pressed={item === language}
          aria-label={`Switch to ${languageNames[item]}`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
