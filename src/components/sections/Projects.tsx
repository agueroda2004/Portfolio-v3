import { useTranslation } from "react-i18next";
import { projects } from "../../constants/data/projects";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="py-stack-xl">
      <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-extrabold text-primary mb-stack-lg uppercase tracking-tight text-balance">
        {t("projectsPage.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}