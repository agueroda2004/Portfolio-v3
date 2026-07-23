import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-start py-stack-xl">
      <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg font-black text-primary uppercase max-w-5xl leading-none tracking-tighter mb-stack-md">
        {t("hero.title")}
        <br />
        <span className="text-surface-tint">{t("hero.subtitle")}</span>
      </h1>
      <p className="font-body-lg text-body-lg text-secondary max-w-2xl mb-stack-lg">
        {t("hero.description")}
      </p>
      <div className="flex gap-4">
        <a
          href="#work"
          className="bg-primary text-on-primary font-label-code text-label-code uppercase px-8 py-4 border-2 border-primary hover:bg-transparent hover:text-primary transition-colors active:scale-95"
        >
          {t("hero.viewProjects")}
        </a>
        <a
          href="#contact"
          className="bg-transparent text-primary font-label-code text-label-code uppercase px-8 py-4 border-2 border-primary hover:bg-primary hover:text-on-primary transition-colors active:scale-95"
        >
          {t("hero.getInTouch")}
        </a>
      </div>
    </section>
  );
}