import { useState } from "react";
import { ContactDialog } from "./components/ContactDialog";
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
  const [isContactOpen, setIsContactOpen] = useState(false);

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

        <section className="section-wrap final-cta" aria-labelledby="cta-title">
          <div className="cta-copy">
            <h2 id="cta-title">{String(t.ctaTitle)}</h2>
            <p>{String(t.ctaSubtitle)}</p>
            <div className="contact-topics" aria-label={String(t.contactTopicsLabel)}>
              {(t.contactTopics as string[]).map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
          <div className="cta-actions">
            <button className="button button-primary" type="button" onClick={() => setIsContactOpen(true)}>
              <MailIcon />
              {String(t.sendEmail)}
            </button>
            <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              {String(t.githubProfile)}
            </a>
          </div>
        </section>
      </main>

      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} recipient={profile.email} />
    </div>
  );
}

export default App;
