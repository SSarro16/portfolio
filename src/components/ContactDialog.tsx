import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import { MailIcon } from "./icons";

type ContactDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const { t } = useLanguage();
  const requestTypes = t.contactRequestTypes as string[];
  const [requestType, setRequestType] = useState(requestTypes[0] ?? "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isTypeOpen) {
          setIsTypeOpen(false);
          return;
        }

        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isTypeOpen, onClose]);

  useEffect(() => {
    setRequestType(requestTypes[0] ?? "");
    setIsTypeOpen(false);
  }, [requestTypes]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitStatus("idle");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("sending");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestType,
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  };

  return (
    <div className="contact-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="contact-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="contact-dialog-header">
          <div>
            <span>{String(t.contactDialogFile)}</span>
            <h2 id="contact-dialog-title">{String(t.contactDialogTitle)}</h2>
          </div>
          <button className="dialog-close" type="button" onClick={onClose} aria-label={String(t.contactDialogClose)}>
            x
          </button>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <span>{String(t.contactRequestLabel)}</span>
            <div className="request-select">
              <button
                type="button"
                className="request-select-trigger"
                aria-haspopup="listbox"
                aria-expanded={isTypeOpen}
                onClick={() => setIsTypeOpen((current) => !current)}
              >
                <span>{requestType}</span>
                <span className="request-select-caret" aria-hidden="true">
                  {">"}
                </span>
              </button>

              {isTypeOpen ? (
                <div className="request-select-menu" role="listbox" aria-label={String(t.contactRequestLabel)}>
                  {requestTypes.map((item) => (
                    <button
                      type="button"
                      role="option"
                      aria-selected={item === requestType}
                      className={item === requestType ? "is-selected" : ""}
                      key={item}
                      onClick={() => {
                        setRequestType(item);
                        setIsTypeOpen(false);
                      }}
                    >
                      <span>{item}</span>
                      {item === requestType ? <strong>active</strong> : null}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="form-grid">
            <label>
              <span>{String(t.contactNameLabel)}</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={String(t.contactNamePlaceholder)}
                required
              />
            </label>
            <label>
              <span>{String(t.contactEmailLabel)}</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={String(t.contactEmailPlaceholder)}
                required
              />
            </label>
          </div>

          <label>
            <span>{String(t.contactMessageLabel)}</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={String(t.contactMessagePlaceholder)}
              rows={5}
              required
            />
          </label>

          <div className="contact-form-actions">
            <button className="button button-primary" type="submit" disabled={submitStatus === "sending"}>
              <MailIcon />
              {submitStatus === "sending" ? String(t.contactSending) : String(t.contactSubmit)}
            </button>
            <button className="button button-ghost" type="button" onClick={onClose}>
              {String(t.contactCancel)}
            </button>
            {submitStatus === "success" ? <p className="contact-form-status is-success">{String(t.contactSuccess)}</p> : null}
            {submitStatus === "error" ? <p className="contact-form-status is-error">{String(t.contactError)}</p> : null}
          </div>
        </form>
      </section>
    </div>
  );
}
