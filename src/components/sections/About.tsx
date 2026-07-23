import { useTranslation } from "react-i18next";
import { personal } from "../../constants/data/personal";

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