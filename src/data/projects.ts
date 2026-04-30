import type { Language } from "../i18n/translations";

export type ProjectLink = {
  label: "Repo" | "Demo" | "Router" | "Favicon";
  href: string;
  kind: "repo" | "demo" | "router" | "favicon";
};

export type Project = {
  title: string;
  type: Record<Language, string>;
  repo: string;
  demo?: string;
  favicon?: string;
  faviconAsset?: string;
  routerFile?: string;
  description: Record<Language, string>;
  tags: string[];
  routes?: string[];
  metrics: Record<Language, string[]>;
  codeSnippet: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "goAnimedle",
    type: { it: "Daily anime quiz game", en: "Daily anime quiz game" },
    repo: "https://github.com/SSarro16/goanimedle",
    favicon: "https://raw.githubusercontent.com/SSarro16/goanimedle/main/public/favicon.png",
    faviconAsset: "https://github.com/SSarro16/goanimedle/blob/main/public/favicon.png",
    routerFile: "https://github.com/SSarro16/goanimedle/blob/main/src/app/router/AppRouter.tsx",
    description: {
      it: "Gioco daily-first per indovinare anime e personaggi, con piu modalita, routing dedicato, dataset locali come source of truth, Firebase opzionale e smoke test.",
      en: "Daily-first anime guessing game with multiple modes, dedicated routing, local datasets as source of truth, optional Firebase and smoke tests.",
    },
    tags: ["React", "TypeScript", "Vite", "Firebase", "Vitest", "Playwright"],
    routes: ["/classica", "/anime", "/anime-cast", "/citazioni", "/crea-stanza"],
    metrics: {
      it: ["daily quiz", "stanze duello", "lazy routes"],
      en: ["daily quiz", "duel rooms", "lazy routes"],
    },
    codeSnippet: `const modes = [
  "classica",
  "anime",
  "anime-cast",
  "citazioni",
  "duello"
];

export const dataSource =
  import.meta.env.VITE_DATA_SOURCE_MODE ?? "local";`,
    links: [
      { label: "Repo", href: "https://github.com/SSarro16/goanimedle", kind: "repo" },
      { label: "Favicon", href: "https://github.com/SSarro16/goanimedle/blob/main/public/favicon.png", kind: "favicon" },
      { label: "Router", href: "https://github.com/SSarro16/goanimedle/blob/main/src/app/router/AppRouter.tsx", kind: "router" },
    ],
  },
  {
    title: "AdFido",
    type: { it: "Marketplace beta", en: "Marketplace beta" },
    repo: "https://github.com/SSarro16/ad-fido-webapp-react",
    faviconAsset: "https://github.com/SSarro16/ad-fido-webapp-react/blob/main/public/favicon.svg",
    description: {
      it: "Foundation marketplace per annunci di cani, con frontend React, backend Express, API auth, Firebase Admin, Storage e deploy su Render.",
      en: "Marketplace foundation for dog listings with React frontend, Express backend, auth APIs, Firebase Admin, Storage and Render deployment.",
    },
    tags: ["React", "TypeScript", "Express", "Firebase", "React Query", "Zod"],
    routes: ["/", "/annunci", "/dashboard", "/admin", "/login"],
    metrics: {
      it: ["API auth", "flusso annunci", "deploy-ready"],
      en: ["auth API", "listing flow", "deploy-ready"],
    },
    codeSnippet: `app.post("/api/auth/login", loginHandler);
app.get("/api/auth/me", requireAuth, meHandler);

const storage = getStorage(firebaseAdminApp);
const listingsRef = firestore.collection("listings");`,
    links: [
      { label: "Repo", href: "https://github.com/SSarro16/ad-fido-webapp-react", kind: "repo" },
      { label: "Favicon", href: "https://github.com/SSarro16/ad-fido-webapp-react/blob/main/public/favicon.svg", kind: "favicon" },
    ],
  },
  {
    title: "Savemoney",
    type: { it: "Mobile expense manager", en: "Mobile expense manager" },
    repo: "https://github.com/SSarro16/Savemoney",
    description: {
      it: "App mobile React Native / Expo per gestione spese, con navigazione stack/drawer/tabs, AsyncStorage, Firebase Auth + Realtime Database, Sentry, grafici e UX mobile.",
      en: "React Native / Expo mobile app for expense management, with stack/drawer/tabs navigation, AsyncStorage, Firebase Auth + Realtime Database, Sentry, charts and mobile UX.",
    },
    tags: ["React Native", "Expo", "Firebase", "Axios", "Sentry", "Jest"],
    metrics: {
      it: ["auth + CRUD", "grafici", "EAS build"],
      en: ["auth + CRUD", "charts", "EAS build"],
    },
    codeSnippet: `createNativeStackNavigator();
createDrawerNavigator();
createBottomTabNavigator();

await AsyncStorage.setItem("theme", selectedTheme);`,
    links: [{ label: "Repo", href: "https://github.com/SSarro16/Savemoney", kind: "repo" }],
  },
  {
    title: "LVG OnFood",
    type: { it: "Production CRUD web app", en: "Production CRUD web app" },
    repo: "https://github.com/SSarro16/lvg-onfood",
    demo: "https://lvg-onfood.onrender.com",
    description: {
      it: "Web app React / TypeScript responsive per monitoraggio prodotti gastronomici, con CRUD, 3 stati prodotto, login/logout, interfaccia multilingua e deploy su Render.",
      en: "Responsive React / TypeScript web app for gastronomy product monitoring, with CRUD, 3 product states, login/logout, multilingual UI and Render deployment.",
    },
    tags: ["React", "TypeScript", "CRUD", "i18n", "Responsive UI", "Render"],
    metrics: {
      it: ["3 stati prodotto", "auth", "live demo"],
      en: ["3 product states", "auth", "live demo"],
    },
    codeSnippet: `type ProductStatus =
  | "available"
  | "not-available"
  | "in-progress";

const locale = i18n.language;`,
    links: [
      { label: "Repo", href: "https://github.com/SSarro16/lvg-onfood", kind: "repo" },
      { label: "Demo", href: "https://lvg-onfood.onrender.com", kind: "demo" },
    ],
  },
];
