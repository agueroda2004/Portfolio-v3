import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import type { Project } from "../constants/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { t } = useTranslation();
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block border-2 border-primary bg-surface-gray relative overflow-hidden transition-all duration-300 hover:-translate-y-2 no-underline"
    >
      <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 flex flex-col justify-end p-8">
        <span className="text-on-primary font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-2 uppercase">
          {t(`work.projects.${project.id}.title`)}
        </span>
        <span className="text-on-primary font-label-code text-label-code uppercase">
          {t("work.viewCaseStudy")}
        </span>
      </div>
      <div className="p-4 border-b-2 border-primary flex justify-between items-center bg-background relative z-20 group-hover:bg-primary transition-colors duration-300">
        <span className="font-label-code text-label-code text-primary uppercase group-hover:text-on-primary">
          {number} / {t(`work.projects.${project.id}.category`)}
        </span>
        <span className="material-symbols-outlined text-primary group-hover:text-on-primary">
          arrow_outward
        </span>
      </div>
      <div className="h-[400px] w-full relative z-0 p-2">
        <img
          src={project.imageUrl}
          alt={t(`work.projects.${project.id}.imageAlt`)}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
}
