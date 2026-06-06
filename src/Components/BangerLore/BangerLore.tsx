import React, { useState } from "react";
import "../Common/common.css";
import "./bangerlore.css";

type SocialKey =
  | "twitter"
  | "goodreads"
  | "github"
  | "letterboxd"
  | "instagram"
  | "linkedin";

type Social = {
  key: SocialKey;
  label: string;
  placeholder: string;
  profileUrl: (handle: string) => string;
  icon: React.ReactNode;
};

const SOCIALS: Social[] = [
  {
    key: "twitter",
    label: "X / Twitter",
    placeholder: "handle",
    profileUrl: (handle) => `https://x.com/${handle}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
  },
  {
    key: "goodreads",
    label: "Goodreads",
    placeholder: "user id",
    profileUrl: (handle) => `https://www.goodreads.com/user/show/${handle}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M11.43 23.995c-3.608-.208-6.274-2.077-6.448-5.078.034-.016 2.48.026 5.047.826 2.527.79 4.137 1.961 4.137 1.961s-1.09-1.12-2.736-1.88C9.62 18.05 7.017 17.86 5.338 17.674c-1.68-.186-2.598-1.48-2.598-3.043 0-1.125.81-2.221 2.221-2.221.96 0 1.68.48 2.04 1.08l1.02-1.02C7.8 11.36 6.72 10.8 5.4 10.8c-2.4 0-4.08 1.92-4.08 4.32 0 2.88 2.16 4.8 5.28 5.04 3.36.24 6.24-1.2 7.44-3.12l-1.68-.96c-.72 1.44-2.4 2.4-4.32 2.4-1.44 0-2.64-.72-3.12-1.68l8.88 2.64c.24 2.16-.96 4.32-3.36 4.8zm8.16-11.04c-.48 0-.96.24-1.2.72l-4.8 8.16-2.88-4.8c-.24-.48-.72-.72-1.2-.72-.96 0-1.68.72-1.68 1.68 0 .48.24.96.72 1.2l4.08 6.72 6.48-11.04c.24-.48.72-.72 1.2-.72.96 0 1.68-.72 1.68-1.68 0-.48-.24-.96-.72-1.2l-1.44-2.4c-.24-.48-.72-.72-1.2-.72z"
        />
      </svg>
    ),
  },
  {
    key: "github",
    label: "GitHub",
    placeholder: "username",
    profileUrl: (handle) => `https://github.com/${handle}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
    ),
  },
  {
    key: "letterboxd",
    label: "Letterboxd",
    placeholder: "username",
    profileUrl: (handle) => `https://letterboxd.com/${handle}/`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="6" cy="12" r="4.5" fill="currentColor" />
        <circle cx="12" cy="12" r="4.5" fill="currentColor" />
        <circle cx="18" cy="12" r="4.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    placeholder: "username",
    profileUrl: (handle) => `https://instagram.com/${handle}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    placeholder: "username",
    profileUrl: (handle) => `https://linkedin.com/in/${handle}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
  },
];

const SOCIAL_KEYS = new Set(SOCIALS.map((s) => s.key));

function parseHandles(search: string): Partial<Record<SocialKey, string>> {
  const params = new URLSearchParams(search);
  const handles: Partial<Record<SocialKey, string>> = {};
  params.forEach((value, key) => {
    if (SOCIAL_KEYS.has(key as SocialKey) && value.trim()) {
      handles[key as SocialKey] = value.trim();
    }
  });
  return handles;
}

function buildLink(handles: Partial<Record<SocialKey, string>>): string {
  const params = new URLSearchParams();
  SOCIALS.forEach(({ key }) => {
    const handle = handles[key]?.trim();
    if (handle) params.set(key, handle);
  });
  return `https://naths.in/bangerlore?${params.toString()}`;
}

function ProfileLinks({ handles }: { handles: Partial<Record<SocialKey, string>> }) {
  const entries = SOCIALS.filter(({ key }) => handles[key]);

  if (entries.length === 0) {
    return (
      <div className="bangerlore-empty">
        No handles found.{" "}
        <a className="href" href="/bangerlore">
          Generate a link
        </a>
      </div>
    );
  }

  return (
    <div className="bangerlore-links">
      {entries.map(({ key, label, profileUrl, icon }) => (
        <a
          key={key}
          className="bangerlore-link"
          href={profileUrl(handles[key]!)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bangerlore-icon">{icon}</span>
          <span className="bangerlore-handle">
            <span className="bangerlore-platform">{label}</span>
            <span className="bangerlore-username">@{handles[key]}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

function LinkGenerator() {
  const [handles, setHandles] = useState<Partial<Record<SocialKey, string>>>({});
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function updateHandle(key: SocialKey, value: string) {
    setHandles((prev) => ({ ...prev, [key]: value }));
    setGeneratedLink(null);
    setCopied(false);
  }

  function generate() {
    const hasAny = SOCIALS.some(({ key }) => handles[key]?.trim());
    if (!hasAny) return;
    setGeneratedLink(buildLink(handles));
    setCopied(false);
  }

  function copyLink() {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="bangerlore-form">
      <div className="bangerlore-fields">
        {SOCIALS.map(({ key, label, placeholder }) => (
          <label key={key} className="bangerlore-field">
            <span className="bangerlore-field-label">{label}</span>
            <input
              type="text"
              className="bangerlore-input"
              placeholder={placeholder}
              value={handles[key] ?? ""}
              onChange={(e) => updateHandle(key, e.target.value)}
            />
          </label>
        ))}
      </div>
      <button type="button" className="bangerlore-generate" onClick={generate}>
        Generate
      </button>
      {generatedLink && (
        <div className="bangerlore-result">
          <a className="href bangerlore-result-link" href={generatedLink}>
            {generatedLink}
          </a>
          <button type="button" className="bangerlore-copy" onClick={copyLink}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}

function BangerLore() {
  const handles = parseHandles(window.location.search);
  const hasHandles = Object.keys(handles).length > 0;

  return (
    <div className="centeredContainer bangerlore">
      <div className="bangerlore-title">bangerlore</div>
      {hasHandles ? <ProfileLinks handles={handles} /> : <LinkGenerator />}
    </div>
  );
}

export default BangerLore;
