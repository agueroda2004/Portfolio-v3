import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import LanguageSelector from "./LanguageSelector";

const NAV_ITEMS = [
  { key: "about", href: "#about", active: true },
  { key: "work", href: "#work", active: false },
  { key: "contact", href: "#contact", active: false },
] as const;

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isSpanish = i18n.language.startsWith("es");
  const cvFile = isSpanish
    ? "/Daniel Aguero CV ES.pdf"
    : "/Daniel Aguero CV EN.pdf";
  const cvDownload = isSpanish
    ? "Daniel-Aguero-CV-ES.pdf"
    : "Daniel-Aguero-CV-EN.pdf";

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-background border-b-2 border-primary">
      <Link to="/" className="flex items-center gap-4 no-underline">
        <img
          alt={t("header.brand")}
          className="h-10 w-10 object-contain"
          src="/logo-placeholder.svg"
        />
        <span className="font-display-lg-mobile text-display-lg-mobile font-black text-primary hidden md:block text-[24px] tracking-[-0.05em]">
          {t("header.brand")}
        </span>
      </Link>
      {isHome && (
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map(({ key, href, active }) => (
            <a
              key={key}
              href={href}
              className={[
                "font-label-code text-label-code uppercase tracking-widest cursor-pointer active:scale-95 hover:bg-primary hover:text-on-primary transition-colors duration-100",
                active
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-secondary",
              ].join(" ")}
            >
              {t(`header.nav.${key}`)}
            </a>
          ))}
        </nav>
      )}
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <a
          href={cvFile}
          download={cvDownload}
          className="font-label-code text-label-code uppercase tracking-widest bg-primary text-on-primary px-6 py-3 hover:bg-surface-tint transition-colors active:scale-95 inline-block border-2 border-primary"
        >
          {t("header.resume")}
        </a>
      </div>
    </header>
  );
}