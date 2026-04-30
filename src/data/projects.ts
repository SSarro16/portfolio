import type { Language } from "../i18n/translations";

export type ProjectLink = {
  label: "Repo" | "Demo" | "Scarica APK" | "Scarica .ipa";
  href: string;
  kind: "repo" | "demo" | "android" | "ios";
};

export type Project = {
  title: string;
  previewImage?: string;
  type: Record<Language, string>;
  repo: string;
  demo?: string;
  favicon?: string;
  faviconAsset?: string;
  routerFile?: string;
  description: Record<Language, string>;
  statusNote?: Record<Language, string>;
  tags: string[];
  routes?: string[];
  metrics: Record<Language, string[]>;
  codeSnippet: string;
  links: ProjectLink[];
};

const projectFavicon = (projectName: string) => `/projects/favicon/favicon-${projectName}.png`;

export const projects: Project[] = [
  {
    title: "goAnimedle",
    previewImage: "/preview-goanimedle.png",
    type: { it: "Daily anime quiz game", en: "Daily anime quiz game" },
    repo: "https://github.com/SSarro16/goanimedle",
    demo: "https://animedle-9ne7.onrender.com/",
    favicon: projectFavicon("goanimedle"),
    faviconAsset: projectFavicon("goanimedle"),
    routerFile: "https://github.com/SSarro16/goanimedle/blob/main/src/app/router/AppRouter.tsx",
    description: {
      it: "Gioco daily-first per indovinare anime e personaggi, con piu modalita, routing dedicato, dataset locali come source of truth, Firebase opzionale e smoke test.",
      en: "Daily-first anime guessing game with multiple modes, dedicated routing, local datasets as source of truth, optional Firebase and smoke tests.",
    },
    statusNote: {
      it: "In lavorazione.",
      en: "Work in progress.",
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
      { label: "Demo", href: "https://animedle-9ne7.onrender.com/", kind: "demo" },
    ],
  },
  {
    title: "AdFido",
    previewImage: "/preview-adfido.png",
    type: { it: "Marketplace beta", en: "Marketplace beta" },
    repo: "https://github.com/SSarro16/ad-fido-webapp-react",
    demo: "https://ad-fido-webapp-react.onrender.com/",
    favicon: projectFavicon("adfido"),
    faviconAsset: projectFavicon("adfido"),
    description: {
      it: "Foundation marketplace per annunci di cani, con frontend React, backend Express, API auth, Firebase Admin, Storage e deploy su Render.",
      en: "Marketplace foundation for dog listings with React frontend, Express backend, auth APIs, Firebase Admin, Storage and Render deployment.",
    },
    statusNote: {
      it: "Ancora in lavorazione.",
      en: "Still in progress.",
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
      { label: "Demo", href: "https://ad-fido-webapp-react.onrender.com/", kind: "demo" },
    ],
  },
  {
    title: "Savemoney",
    type: { it: "Mobile expense manager", en: "Mobile expense manager" },
    repo: "https://github.com/SSarro16/Savemoney",
    favicon: projectFavicon("savemoney"),
    faviconAsset: projectFavicon("savemoney"),
    description: {
      it: "App mobile React Native / Expo per gestione spese, con navigazione stack/drawer/tabs, AsyncStorage, Firebase Auth + Realtime Database, Sentry, grafici e UX mobile.",
      en: "React Native / Expo mobile app for expense management, with stack/drawer/tabs navigation, AsyncStorage, Firebase Auth + Realtime Database, Sentry, charts and mobile UX.",
    },
    statusNote: {
      it: "Demo mobile scaricabile: Savemoney non e stata lanciata su store digitali ed e installabile solo sul proprio dispositivo tramite APK o IPA.",
      en: "Downloadable mobile demo: Savemoney has not been launched on any digital store and can only be installed on your device via APK or IPA.",
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
    links: [
      { label: "Repo", href: "https://github.com/SSarro16/Savemoney", kind: "repo" },
      { label: "Scarica APK", href: "https://github.com/SSarro16/Savemoney/releases/latest/download/savemoney.apk", kind: "android" },
      { label: "Scarica .ipa", href: "https://github.com/SSarro16/Savemoney/releases/latest/download/savemoney.ipa", kind: "ios" },
    ],
  },
  {
    title: "LVG OnFood",
    type: { it: "Production CRUD web app", en: "Production CRUD web app" },
    repo: "https://github.com/SSarro16/lvg-onfood",
    demo: "https://lvg-onfood.onrender.com",
    favicon: projectFavicon("lvg-onfood"),
    faviconAsset: projectFavicon("lvg-onfood"),
    description: {
      it: "Web app React / TypeScript responsive per monitoraggio prodotti gastronomici, con CRUD, 3 stati prodotto, login/logout, interfaccia multilingua e deploy su Render.",
      en: "Responsive React / TypeScript web app for gastronomy product monitoring, with CRUD, 3 product states, login/logout, multilingual UI and Render deployment.",
    },
    statusNote: {
      it: "Restyling e rebranding in progetto.",
      en: "Restyling and rebranding planned.",
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
