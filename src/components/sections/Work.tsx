import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { projects } from "../../constants/data/projects";
import ProjectCard from "../ProjectCard";

export default function Work() {
  const { t } = useTranslation();

  return (
    <section
      id="work"
      className="py-stack-xl border-t-2 border-primary scroll-mt-[80px]"
    >
      <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-extrabold text-primary mb-stack-lg uppercase tracking-tight text-balance">
        {t("work.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <div className="mt-stack-md flex justify-center">
        <Link
          to="/projects"
          className="bg-primary text-on-primary font-label-code text-label-code uppercase px-12 py-4 border-2 border-primary hover:bg-transparent hover:text-primary transition-colors active:scale-95 inline-block"
        >
          {t("work.viewAll")}
        </Link>
      </div>
    </section>
  );
}