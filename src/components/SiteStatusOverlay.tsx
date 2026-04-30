import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

type OverlayState =
  | {
      kind: "loading";
      title?: string;
      message?: string;
    }
  | {
      kind: "error";
      title?: string;
      message?: string;
      details?: string;
    }
  | null;

type LoadingEventDetail = {
  active?: boolean;
  title?: string;
  message?: string;
};

type ErrorEventDetail = {
  title?: string;
  message?: string;
  details?: string;
};

export function SiteStatusOverlay() {
  const { t } = useLanguage();
  const [overlay, setOverlay] = useState<OverlayState>({
    kind: "loading",
  });

  useEffect(() => {
    const overlayParam = new URLSearchParams(window.location.search).get("overlay");

    if (overlayParam === "error") {
      setOverlay({
        kind: "error",
        details: "portfolio:start?overlay=error",
      });
      return;
    }

    const timer = window.setTimeout(() => {
      setOverlay((current) => (current?.kind === "loading" ? null : current));
    }, 1100);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleLoading = (event: Event) => {
      const detail = (event as CustomEvent<LoadingEventDetail>).detail;

      if (detail?.active === false) {
        setOverlay(null);
        return;
      }

      setOverlay({
        kind: "loading",
        title: detail?.title,
        message: detail?.message,
      });
    };

    const handleErrorOverlay = (event: Event) => {
      const detail = (event as CustomEvent<ErrorEventDetail>).detail;

      setOverlay({
        kind: "error",
        title: detail?.title,
        message: detail?.message,
        details: detail?.details,
      });
    };

    const handleRuntimeError = (event: ErrorEvent) => {
      setOverlay({
        kind: "error",
        message: event.message,
        details: event.filename ? `${event.filename}:${event.lineno}:${event.colno}` : undefined,
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason instanceof Error ? event.reason.message : String(event.reason ?? "");

      setOverlay({
        kind: "error",
        message: reason || String(t.overlayErrorMessage),
      });
    };

    window.addEventListener("portfolio:loading", handleLoading);
    window.addEventListener("portfolio:error", handleErrorOverlay);
    window.addEventListener("error", handleRuntimeError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("portfolio:loading", handleLoading);
      window.removeEventListener("portfolio:error", handleErrorOverlay);
      window.removeEventListener("error", handleRuntimeError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, [t]);

  if (!overlay) {
    return null;
  }

  const isError = overlay.kind === "error";
  const title = overlay.title ?? String(isError ? t.overlayErrorTitle : t.overlayLoadingTitle);
  const message = overlay.message ?? String(isError ? t.overlayErrorMessage : t.overlayLoadingMessage);

  return (
    <div className={`status-overlay status-overlay-${overlay.kind}`} role={isError ? "alertdialog" : "status"} aria-live={isError ? "assertive" : "polite"}>
      <section className="status-panel" aria-labelledby="status-overlay-title">
        <div className="panel-topbar">
          <span className="window-dot red" />
          <span className="window-dot amber" />
          <span className="window-dot green" />
          <span className="filename">{isError ? "runtime.error.ts" : "boot.sequence.ts"}</span>
        </div>

        <div className="status-panel-body">
          <div className="status-loader" aria-hidden="true">
            <span />
          </div>

          <div className="status-copy">
            <p className="role-line">{isError ? "throw new Error()" : "await portfolio.ready()"}</p>
            <h2 id="status-overlay-title">{title}</h2>
            <p>{message}</p>
            {isError && overlay.details ? <code>{overlay.details}</code> : null}
          </div>

          <div className="status-terminal" aria-hidden="true">
            {(isError ? ["try { render()", "catch (event)", "showOverlay(event)"] : ["npm run typecheck", "vite build --watch", "hydrate motion"]).map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>

          {isError ? (
            <div className="status-actions">
              <button className="button button-primary" type="button" onClick={() => window.location.reload()}>
                {String(t.overlayReload)}
              </button>
              <button className="button button-ghost" type="button" onClick={() => setOverlay(null)}>
                {String(t.overlayDismiss)}
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
