import { useTranslation } from "react-i18next";
import { personal } from "../../constants/data/personal";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-stack-md px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6 bg-primary border-t-2 border-primary text-on-primary">
      <div className="font-headline-lg text-headline-lg font-black uppercase tracking-tight">
        {t("header.brand")}
      </div>
      <div className="flex gap-6">
        {personal.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-code text-label-code uppercase text-on-secondary-container hover:text-on-primary-fixed-variant transition-opacity duration-150 cursor-pointer"
          >
            {social.label}
          </a>
        ))}
      </div>
      <div className="font-label-code text-label-code uppercase text-on-secondary-container text-center">
        ©{year} {t("header.brand")}. {t("footer.copyright")}.
      </div>
    </footer>
  );
}
