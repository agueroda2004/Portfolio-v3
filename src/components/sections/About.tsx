import { useTranslation } from "react-i18next";
import { personal } from "../../constants/data/personal";
import { technologyIcons } from "../../constants/data/technologyIcons";

const aiTools = [
  { name: "OpenCode", icon: "opencode" },
  { name: "Claude", icon: "claude" },
  { name: "GPT", icon: "openai" },
  { name: "DeepSeek", icon: "deepseek" },
] as const;

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-stack-xl border-t-2 border-primary grid grid-cols-1 md:grid-cols-12 gap-gutter scroll-mt-[80px]"
    >
      <div className="md:col-span-5">
        <img
          src={personal.imageUrl}
          alt={t("about.imageAlt")}
          loading="lazy"
          className="w-full h-auto object-cover grayscale border-2 border-primary"
        />
      </div>
      <div className="md:col-span-7 flex flex-col justify-center pl-0 md:pl-gutter">
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-extrabold text-primary mb-stack-md uppercase tracking-tight text-balance">
          {t("about.title")}
        </h2>
        <p className="font-body-lg text-body-lg text-secondary mb-stack-lg max-w-2xl">
          {t("about.description")}
        </p>
        <div className="grid grid-cols-2 gap-8 border-t-2 border-primary pt-8">
          {personal.stats.map((stat) => (
            <div key={stat.key}>
              <span className="block font-display-lg-mobile text-display-lg-mobile font-black text-primary">
                {stat.value}
              </span>
              <span className="font-label-code text-label-code uppercase text-secondary">
                {t(`about.stats.${stat.key}`)}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-stack-md border-2 border-primary p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="block font-label-code text-label-code uppercase text-secondary mb-2">
              {t("about.englishCertificate.label")}
            </span>
            <span className="block font-headline-lg-mobile text-headline-lg-mobile md:text-headline-lg font-bold text-primary">
              {t("about.englishCertificate.level")}
            </span>
          </div>
          <a
            href="https://cert.efset.org/y1oSMa"
            target="_blank"
            rel="noreferrer"
            className="font-label-code text-label-code uppercase tracking-widest bg-primary text-on-primary px-4 py-3 hover:bg-surface-tint transition-colors active:scale-95 inline-block border-2 border-primary text-center"
          >
            {t("about.englishCertificate.view")}
          </a>
        </div>
        <div className="mt-stack-md border-2 border-primary p-6">
          <span className="block font-label-code text-label-code uppercase text-secondary mb-2">
            {t("about.aiSkills.label")}
          </span>
          <span className="block font-headline-lg-mobile text-headline-lg-mobile md:text-headline-lg font-bold text-primary mb-3">
            {t("about.aiSkills.title")}
          </span>
          <p className="font-body-md text-body-md text-secondary mb-5">
            {t("about.aiSkills.description")}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {aiTools.map((tool) => {
              const Icon = technologyIcons[tool.icon];

              return (
                <span
                  key={tool.name}
                  className="flex items-center gap-2 font-label-code text-label-code uppercase text-primary"
                >
                  {Icon && <Icon className="w-5 h-5" aria-hidden="true" />}
                  {tool.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="mt-stack-md flex flex-wrap gap-2">
          {personal.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-[#111111] text-white font-label-code text-label-code px-3 py-1 uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
