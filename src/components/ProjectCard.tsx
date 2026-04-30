import type { Project, ProjectLink } from "../data/projects";
import type { Language } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageProvider";
import { AppIcon } from "./AppIcon";
import { CodePanel } from "./CodePanel";
import { AssetIcon, ExternalIcon, GithubIcon, SlashIcon } from "./icons";

function LinkIcon({ kind }: { kind: ProjectLink["kind"] }) {
  if (kind === "repo") {
    return <GithubIcon />;
  }

  if (kind === "router") {
    return <SlashIcon />;
  }

  if (kind === "favicon") {
    return <AssetIcon />;
  }

  return <ExternalIcon />;
}

export function ProjectCard({ project, language }: { project: Project; language: Language }) {
  const { t } = useLanguage();

  return (
    <article className="project-card">
      <div className="project-card-header">
        <AppIcon title={project.title} favicon={project.favicon} />
        <div>
          <p className="project-type">{project.type[language]}</p>
          <h3>{project.title}</h3>
        </div>
      </div>

      <p className="project-description">{project.description[language]}</p>

      <div className="quick-links" aria-label={`${project.title} ${String(t.quickLinks)}`}>
        {project.links.map((link) => (
          <a key={`${project.title}-${link.label}`} href={link.href} target="_blank" rel="noreferrer">
            <LinkIcon kind={link.kind} />
            {link.label}
          </a>
        ))}
      </div>

      {project.routes ? (
        <div className="routes" aria-label={`${project.title} ${String(t.routes)}`}>
          {project.routes.map((route) => (
            <code key={route}>{route}</code>
          ))}
        </div>
      ) : null}

      <CodePanel code={project.codeSnippet} compact />

      <div className="metrics" aria-label={`${project.title} ${String(t.metrics)}`}>
        {project.metrics[language].map((metric) => (
          <span key={metric}>{metric}</span>
        ))}
      </div>

      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
