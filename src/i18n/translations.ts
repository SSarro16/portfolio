export type Language = "it" | "en";

export const languageNames: Record<Language, string> = {
  it: "Italiano",
  en: "English",
};

export const translations = {
  it: {
    navProjects: "~/projects",
    navStack: "~/stack",
    navMail: "mail()",
    role: "Junior Web Developer React | Mobile Developer React Native / Expo",
    bio: "Sviluppatore junior focalizzato su React, TypeScript e React Native / Expo. Creo interfacce responsive, app mobile e flussi prodotto end-to-end: autenticazione, CRUD, gestione stato, routing, Firebase, testing e deploy.",
    heroTitle: "Costruisco interfacce come prodotti, non schermate statiche.",
    heroSubtitle:
      "React / TypeScript developer con esperienza mobile in React Native ed Expo. Lavoro su auth, CRUD, routed webapps, Firebase, responsive UI, testing workflow e progetti deploy-ready.",
    openProjects: "Apri projects.json",
    githubProfile: "Profilo GitHub",
    projectTitle: "Repository selezionate",
    projectSubtitle:
      "Card progetto con snippet di codice, link rapidi, favicon e riferimenti diretti a repo, demo, router o asset.",
    stackTitle: "Il mio toolbox attuale.",
    workflowTitle: "Come mi piace costruire.",
    ctaTitle: "Disponibile per ruoli Junior React / Frontend.",
    sendEmail: "Invia email",
    routes: "routes",
    quickLinks: "quick links",
    metrics: "signals",
    stackFile: "stack.lock",
    profileFile: "simone.profile.ts",
    treeTitle: "file tree",
    commandTitle: "command bar",
    locationLabel: "location",
    englishLabel: "english",
    commits: [
      {
        hash: "a13f9c2",
        title: "feat: costruire flussi prodotto",
        body: "Auth, CRUD, aree protette, componenti riusabili e viste responsive.",
      },
      {
        hash: "c42e81b",
        title: "test: aggiungere quality guardrails",
        body: "ESLint, Prettier, Jest/Vitest, Playwright smoke tests e typecheck.",
      },
      {
        hash: "f09d4aa",
        title: "chore: preparare il deploy",
        body: "Render, Firebase envs, build scripts, documentazione e release workflow.",
      },
    ],
  },
  en: {
    navProjects: "~/projects",
    navStack: "~/stack",
    navMail: "mail()",
    role: "Junior React Web Developer | React Native / Expo Mobile Developer",
    bio: "Junior developer focused on React, TypeScript and React Native / Expo. I build responsive interfaces, mobile apps and end-to-end product flows: authentication, CRUD, state management, routing, Firebase, testing and deployment.",
    heroTitle: "Building interfaces like products, not static screens.",
    heroSubtitle:
      "React / TypeScript developer with mobile experience in React Native and Expo. I work on auth, CRUD, routed webapps, Firebase, responsive UI, testing workflows and deploy-ready projects.",
    openProjects: "Open projects.json",
    githubProfile: "GitHub profile",
    projectTitle: "Selected repositories",
    projectSubtitle:
      "Project cards with code snippets, quick links, favicons and direct references to repos, demos, routers or assets.",
    stackTitle: "My current dev toolbox.",
    workflowTitle: "How I like to build.",
    ctaTitle: "Open to Junior React / Frontend roles.",
    sendEmail: "Send email",
    routes: "routes",
    quickLinks: "quick links",
    metrics: "signals",
    stackFile: "stack.lock",
    profileFile: "simone.profile.ts",
    treeTitle: "file tree",
    commandTitle: "command bar",
    locationLabel: "location",
    englishLabel: "english",
    commits: [
      {
        hash: "a13f9c2",
        title: "feat: build routed product flows",
        body: "Auth, CRUD, protected areas, reusable components and responsive views.",
      },
      {
        hash: "c42e81b",
        title: "test: add quality guardrails",
        body: "ESLint, Prettier, Jest/Vitest, Playwright smoke tests and typecheck.",
      },
      {
        hash: "f09d4aa",
        title: "chore: prepare deploy",
        body: "Render, Firebase envs, build scripts, documentation and release workflow.",
      },
    ],
  },
} satisfies Record<Language, Record<string, unknown>>;
