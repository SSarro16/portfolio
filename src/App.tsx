import { CommandBar } from "./components/CommandBar";
import { EditorCard } from "./components/EditorCard";
import { GithubIcon, MailIcon } from "./components/icons";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { stack } from "./data/stack";
import { useLanguage } from "./i18n/LanguageProvider";

function App() {
  const { language, t } = useLanguage();

  return (
    <div className="site-shell" id="top">
      <Navbar />

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="role-line">{String(t.role)}</p>
            <h1 id="hero-title">{String(t.heroTitle)}</h1>
            <p className="hero-subtitle">{String(t.heroSubtitle)}</p>
            <p className="bio-line">{String(t.bio)}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {String(t.openProjects)}
              </a>
              <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon />
                {String(t.githubProfile)}
              </a>
            </div>
            <div className="hero-contact">
              <span>{profile.location}</span>
              <span>{profile.email}</span>
              <span>B2 English</span>
            </div>
            <CommandBar />
          </div>
          <EditorCard />
        </section>

        <section className="section-wrap" id="projects" aria-labelledby="projects-title">
          <SectionHeading title={String(t.projectTitle)} subtitle={String(t.projectSubtitle)} filename="projects.json" />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} language={language} />
            ))}
          </div>
        </section>

        <section className="section-wrap stack-section" id="stack" aria-labelledby="stack-title">
          <SectionHeading title={String(t.stackTitle)} filename={String(t.stackFile)} />
          <div className="stack-grid">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section-wrap workflow-section" aria-labelledby="workflow-title">
          <SectionHeading title={String(t.workflowTitle)} filename="commits.log" />
          <div className="commit-list">
            {(t.commits as Array<{ hash: string; title: string; body: string }>).map((commit) => (
              <article className="commit-card" key={commit.hash}>
                <code>{commit.hash}</code>
                <div>
                  <h3>{commit.title}</h3>
                  <p>{commit.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap final-cta" aria-labelledby="cta-title">
          <div>
            <span className="section-file">contact/mail.ts</span>
            <h2 id="cta-title">{String(t.ctaTitle)}</h2>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              <MailIcon />
              {String(t.sendEmail)}
            </a>
            <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              {String(t.githubProfile)}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
