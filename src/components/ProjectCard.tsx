import type { CSSProperties } from "react";
import type { Project, ProjectLink } from "../data/projects";
import type { Language } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageProvider";
import { AppIcon } from "./AppIcon";
import { AndroidIcon, AppleIcon, ExternalIcon, GithubIcon } from "./icons";
import { ProjectPreview } from "./ProjectPreview";

function LinkIcon({ kind }: { kind: ProjectLink["kind"] }) {
  if (kind === "repo") {
    return <GithubIcon />;
  }

  if (kind === "android") {
    return <AndroidIcon />;
  }

  if (kind === "ios") {
    return <AppleIcon />;
  }

  return <ExternalIcon />;
}

export function ProjectCard({ project, language, style }: { project: Project; language: Language; style?: CSSProperties }) {
  const { t } = useLanguage();

  return (
    <article className="project-card motion-reveal" style={style}>
      <div className="project-card-header">
        <AppIcon title={project.title} favicon={project.favicon} />
        <div>
          <p className="project-type">{project.type[language]}</p>
          <h3>{project.title}</h3>
        </div>
      </div>

      <p className="project-description">{project.description[language]}</p>

      {project.statusNote ? <p className="project-status-note">{project.statusNote[language]}</p> : null}

      {project.previewImage ? (
        <div className="project-preview-wrap">
          <ProjectPreview project={project} />
        </div>
      ) : null}

      <div className="quick-links" aria-label={`${project.title} ${String(t.quickLinks)}`}>
        {project.links.map((link) => (
          <a key={`${project.title}-${link.label}`} href={link.href} target="_blank" rel="noreferrer">
            <LinkIcon kind={link.kind} />
            {link.label}
          </a>
        ))}
      </div>

      <div className="tag-list">
        {project.tags.slice(0, 5).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
