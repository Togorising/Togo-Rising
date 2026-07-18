"use client";

import { useEffect, useState } from "react";

type Align = "left" | "center" | "right";

type Settings = {
  fontScale: number; // 1 = 100%
  lineHeight: number; // multiplier, 1 = default (1.5)
  letterSpacing: number; // px
  bold: boolean;
  readable: boolean;
  align: Align;
  dark: boolean;
  monochrome: boolean;
  bigCursor: boolean;
};

const DEFAULTS: Settings = {
  fontScale: 1,
  lineHeight: 1,
  letterSpacing: 0,
  bold: false,
  readable: false,
  align: "left",
  dark: false,
  monochrome: false,
  bigCursor: false,
};

const STORAGE_KEY = "togoRisingA11y";

function applySettings(s: Settings) {
  const root = document.documentElement;
  root.style.setProperty("--a11y-font-scale", String(s.fontScale));
  root.style.setProperty("--a11y-line-height", String(s.lineHeight));
  root.style.setProperty("--a11y-letter-spacing", `${s.letterSpacing}px`);
  root.classList.toggle("dark", s.dark);
  root.classList.toggle("a11y-bold", s.bold);
  root.classList.toggle("a11y-readable", s.readable);
  root.classList.toggle("a11y-monochrome", s.monochrome);
  root.classList.toggle("a11y-big-cursor", s.bigCursor);
  root.classList.remove("a11y-align-left", "a11y-align-center", "a11y-align-right");
  root.classList.add(`a11y-align-${s.align}`);
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        checked ? "bg-togo-green" : "bg-ink/15"
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="font-sans text-sm text-ink/80">{label}</span>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-1 mt-5 font-sans text-xs font-bold uppercase tracking-widest text-togo-green/70 first:mt-0">
      {children}
    </p>
  );
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = { ...DEFAULTS, ...JSON.parse(stored) };
        setSettings(parsed);
        applySettings(parsed);
      }
    } catch {
      // ignore malformed storage
    }
    setReady(true);
  }, []);

  function update(patch: Partial<Settings>) {
    const next = { ...settings, ...patch };
    setSettings(next);
    applySettings(next);
    if (ready) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
    }
  }

  function reset() {
    setSettings(DEFAULTS);
    applySettings(DEFAULTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Accessibility settings"
        aria-expanded={open}
        className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-togo-green text-white shadow-lg transition-transform hover:scale-105 sm:bottom-5 sm:right-5 sm:h-12 sm:w-12"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="8" r="1.6" fill="currentColor" />
          <path
            d="M7 10.5c1.6.7 3.3 1 5 1s3.4-.3 5-1M12 11.5V17M9.5 20l2.5-4 2.5 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Accessibility settings"
          className="fixed bottom-20 right-4 left-4 z-50 max-h-[75vh] overflow-y-auto rounded-2xl border border-ink/10 bg-cream text-ink shadow-2xl sm:left-auto sm:right-5 sm:w-[19rem]"
        >
          <div className="sticky top-0 flex items-center justify-between border-b border-ink/10 bg-cream px-5 py-4">
            <p className="font-sans text-base font-bold text-togo-green">Accessibility</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="flex h-7 w-7 items-center justify-center rounded-full text-ink/50 hover:bg-ink/5 hover:text-ink"
            >
              &times;
            </button>
          </div>

          <div className="px-5 pb-5">
            <SectionLabel>Text</SectionLabel>

            <Row label={`Font size · ${Math.round(settings.fontScale * 100)}%`}>
              <input
                type="range"
                min={0.85}
                max={1.5}
                step={0.05}
                value={settings.fontScale}
                onChange={(e) => update({ fontScale: Number(e.target.value) })}
                className="w-28 accent-togo-green"
                aria-label="Font size"
              />
            </Row>

            <Row label={`Line height · ${Math.round(150 * settings.lineHeight)}%`}>
              <input
                type="range"
                min={0.8}
                max={1.6}
                step={0.05}
                value={settings.lineHeight}
                onChange={(e) => update({ lineHeight: Number(e.target.value) })}
                className="w-28 accent-togo-green"
                aria-label="Line height"
              />
            </Row>

            <Row label={`Letter spacing · ${settings.letterSpacing}px`}>
              <input
                type="range"
                min={0}
                max={4}
                step={0.5}
                value={settings.letterSpacing}
                onChange={(e) => update({ letterSpacing: Number(e.target.value) })}
                className="w-28 accent-togo-green"
                aria-label="Letter spacing"
              />
            </Row>

            <Row label="Bold text">
              <Toggle
                checked={settings.bold}
                onChange={(v) => update({ bold: v })}
                label="Bold text"
              />
            </Row>

            <Row label="Readable font">
              <Toggle
                checked={settings.readable}
                onChange={(v) => update({ readable: v })}
                label="Readable font"
              />
            </Row>

            <div className="flex items-center justify-between gap-4 py-2.5">
              <span className="font-sans text-sm text-ink/80">Text align</span>
              <div className="flex gap-1 rounded-full border border-ink/10 p-1">
                {(["left", "center", "right"] as Align[]).map((a) => (
                  <button
                    key={a}
                    type="button"
                    aria-label={`Align ${a}`}
                    aria-pressed={settings.align === a}
                    onClick={() => update({ align: a })}
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                      settings.align === a
                        ? "bg-togo-green text-white"
                        : "text-ink/50 hover:bg-ink/5"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d={
                          a === "left"
                            ? "M4 6h16M4 12h10M4 18h14"
                            : a === "center"
                              ? "M4 6h16M7 12h10M5 18h14"
                              : "M4 6h16M10 12h10M6 18h14"
                        }
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <SectionLabel>Display</SectionLabel>

            <Row label="Dark mode">
              <Toggle checked={settings.dark} onChange={(v) => update({ dark: v })} label="Dark mode" />
            </Row>

            <Row label="Monochrome">
              <Toggle
                checked={settings.monochrome}
                onChange={(v) => update({ monochrome: v })}
                label="Monochrome"
              />
            </Row>

            <SectionLabel>Cursor</SectionLabel>

            <Row label="Big cursor">
              <Toggle
                checked={settings.bigCursor}
                onChange={(v) => update({ bigCursor: v })}
                label="Big cursor"
              />
            </Row>

            <button
              type="button"
              onClick={reset}
              className="mt-5 w-full rounded-full border border-ink/15 py-2 font-sans text-sm font-semibold text-ink/70 hover:bg-ink/5"
            >
              Reset to default
            </button>
          </div>
        </div>
      )}
    </>
  );
}
