import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { CommandBar } from "./components/CommandBar";
import { ContactDialog } from "./components/ContactDialog";
import { EditorCard } from "./components/EditorCard";
import { GithubIcon, MailIcon } from "./components/icons";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { SiteStatusOverlay } from "./components/SiteStatusOverlay";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { stack } from "./data/stack";
import { useLanguage } from "./i18n/LanguageProvider";

function App() {
  const { language, t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".motion-reveal");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.setAttribute("data-visible", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.14,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const timer = window.setTimeout(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      target?.scrollIntoView({ block: "start" });
    }, 1250);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="site-shell" id="top">
        <Navbar />

        <main>
          <section className="hero section-wrap" aria-labelledby="hero-title">
            <div className="hero-copy motion-reveal motion-reveal-left">
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
            <div className="hero-code-stack">
              <EditorCard />
              <CommandBar />
            </div>
          </section>

          <section className="section-wrap" id="projects" aria-labelledby="projects-title">
            <SectionHeading title={String(t.projectTitle)} subtitle={String(t.projectSubtitle)} filename="projects.json" />
            <div className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} language={language} style={{ "--motion-index": index } as CSSProperties} />
              ))}
            </div>
          </section>

          <section className="section-wrap stack-section" id="stack" aria-labelledby="stack-title">
            <SectionHeading title={String(t.stackTitle)} filename={String(t.stackFile)} />
            <div className="stack-grid">
              {stack.map((item, index) => (
                <span className="motion-reveal" key={item} style={{ "--motion-index": index } as CSSProperties}>
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="section-wrap final-cta motion-reveal" aria-labelledby="cta-title">
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
      </div>
      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <SiteStatusOverlay />
    </>
  );
}

export default App;
