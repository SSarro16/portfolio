import type { Project } from "../data/projects";

export function ProjectPreview({ project }: { project: Project }) {
  if (!project.previewImage) {
    return null;
  }

  const image = <img src={project.previewImage} alt={`${project.title} preview`} loading="lazy" />;

  if (!project.demo) {
    return <div className="project-preview-shell">{image}</div>;
  }

  return (
    <a className="project-preview-shell project-preview-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} demo`}>
      {image}
      <span className="project-preview-cta">Vai alla demo</span>
    </a>
  );
}
