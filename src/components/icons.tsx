import type { SVGProps } from "react";

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 .5A11.5 11.5 0 0 0 8.37 22.9c.58.1.79-.25.79-.56v-2.15c-3.21.7-3.89-1.38-3.89-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.18 1.18a11.08 11.08 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.79 1.07.79 2.16v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  );
}

export function ExternalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17 17 7m0 0H9m8 0v8" />
    </svg>
  );
}

export function SlashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" d="m15 4-6 16" />
    </svg>
  );
}

export function AssetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
      <path fill="currentColor" d="M8.25 10.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 17 4.4-4.4a1.5 1.5 0 0 1 2.1 0L16 17l1.4-1.4a1.5 1.5 0 0 1 2.1 0l.5.5" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16v12H4z" />
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function AdFidoIcon() {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true">
      <rect width="128" height="128" rx="32" fill="#0F3D5E" />
      <path
        d="M34 78C34 57.0132 51.0132 40 72 40H94V54H79C67.402 54 58 63.402 58 75V92H48C40.268 92 34 85.732 34 78Z"
        fill="#FF6B35"
      />
      <path d="M63 35C63 26.7157 69.7157 20 78 20C86.2843 20 93 26.7157 93 35V46H63V35Z" fill="#F6EFE8" />
      <circle cx="48" cy="41" r="11" fill="#F6EFE8" />
      <circle cx="91" cy="78" r="17" fill="#B8E1DD" />
    </svg>
  );
}
