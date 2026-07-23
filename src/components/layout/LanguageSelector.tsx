import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", labelKey: "header.language.en" },
  { code: "es", labelKey: "header.language.es" },
  { code: "pt", labelKey: "header.language.pt" },
] as const;

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = (i18n.resolvedLanguage ?? i18n.language ?? "en").slice(0, 2);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={t("header.language.label")}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((prev) => !prev)}
        className="font-label-code text-label-code uppercase tracking-widest text-secondary hover:text-primary transition-colors cursor-pointer"
      >
        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
          language
        </span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 bg-background border-2 border-primary min-w-[80px] z-50"
        >
          {LANGUAGES.map(({ code, labelKey }) => {
            const isActive = current === code;
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    void i18n.changeLanguage(code);
                    setOpen(false);
                  }}
                  className={[
                    "w-full text-left font-label-code text-label-code uppercase tracking-widest px-4 py-2 hover:bg-primary hover:text-on-primary transition-colors cursor-pointer",
                    isActive ? "bg-primary text-on-primary" : "text-primary",
                  ].join(" ")}
                >
                  {t(labelKey)}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}