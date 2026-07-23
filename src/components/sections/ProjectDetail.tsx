import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { projects } from "../../constants/data/projects";
import LoadingImage from "../LoadingImage";
import ImageLightbox from "../ImageLightbox";
import type { Technology } from "../../constants/data/projects";
import { technologyIcons } from "../../constants/data/technologyIcons";

function PlaceholderBox({
  aspect,
  message,
}: {
  aspect: "video" | "portrait";
  message: string;
}) {
  return (
    <div
      className={[
        "w-full bg-surface-gray border-2 border-primary flex items-center justify-center",
        aspect === "video" ? "aspect-video" : "aspect-[9/16] max-w-xs mx-auto",
      ].join(" ")}
    >
      <span className="font-label-code text-label-code uppercase text-secondary text-center px-4">
        {message}
      </span>
    </div>
  );
}

function TechnologyCard({ technology }: { technology: Technology }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <article className="border-t border-outline pt-3">
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
        className="w-full flex items-center justify-between gap-3 text-left cursor-pointer"
      >
        <span className="flex items-center gap-2">
          {(() => {
            const Icon = technologyIcons[technology.icon];
            return Icon ? (
              <Icon className="w-6 h-6" aria-hidden="true" />
            ) : (
              <span
                className="w-6 h-6 border border-primary"
                aria-hidden="true"
              />
            );
          })()}
          <span className="font-label-code text-label-code uppercase text-primary">
            {technology.name}
          </span>
        </span>
        <span
          className="material-symbols-outlined text-primary"
          aria-hidden="true"
        >
          {expanded ? "expand_less" : "expand_more"}
        </span>
      </button>
      {expanded && (
        <div className="mt-3 pl-8">
          <p className="font-body-md text-body-md text-secondary mb-2">
            {t(`${technology.translationKey}.explanation`)}
          </p>
          <p className="font-label-code text-label-code text-secondary">
            {t(`${technology.translationKey}.problemSolved`)}
          </p>
        </div>
      )}
    </article>
  );
}
function DeployCard({
  service,
}: {
  service: {
    readonly name: string;
    readonly icon: string;
    readonly translationKey: string;
  };
}) {
  const { t } = useTranslation();
  return (
    <article className="border-2 border-primary p-4">
      <div className="flex items-center gap-3 mb-3">
        {(() => {
          const Icon = technologyIcons[service.icon];
          return Icon ? (
            <Icon className="w-6 h-6" aria-hidden="true" />
          ) : (
            <span
              className="material-symbols-outlined text-primary"
              aria-hidden="true"
            >
              cloud
            </span>
          );
        })()}
        <h3 className="font-label-code text-label-code uppercase text-primary">
          {service.name}
        </h3>
      </div>
      <p className="font-body-md text-body-md text-secondary">
        {t(service.translationKey)}
      </p>
    </article>
  );
}
function ImageCarousel({
  images,
  currentIndex,
  onIndexChange,
  altBase,
  onOpenLightbox,
  aspect,
}: {
  images: readonly string[];
  currentIndex: number;
  onIndexChange: (i: number) => void;
  altBase: string;
  onOpenLightbox: () => void;
  aspect: "video" | "portrait";
}) {
  const VISIBLE_COUNT = 3;
  const [visibleStart] = useState(0);
  const maxStart = Math.max(0, images.length - VISIBLE_COUNT);
  const boundedVisibleStart = Math.min(visibleStart, maxStart);
  const adjustedVisibleStart =
    currentIndex < boundedVisibleStart
      ? currentIndex
      : currentIndex >= boundedVisibleStart + VISIBLE_COUNT
        ? Math.min(currentIndex - VISIBLE_COUNT + 1, maxStart)
        : boundedVisibleStart;

  if (images.length === 0) return null;

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;
  const goPrev = () => {
    if (!isFirst) onIndexChange(currentIndex - 1);
  };
  const goNext = () => {
    if (!isLast) onIndexChange(currentIndex + 1);
  };

  const bigImageClasses =
    aspect === "video"
      ? "aspect-video w-full"
      : "aspect-[16/32] w-full max-w-[200px] mx-auto";

  const thumbSizeClasses =
    aspect === "video" ? "w-20 aspect-video" : "w-12 aspect-[9/16]";

  const itemWidth = aspect === "video" ? 80 : 48;
  const gapPx = 8;
  const visibleCount = Math.min(VISIBLE_COUNT, images.length);
  const containerWidth =
    visibleCount * itemWidth + Math.max(0, visibleCount - 1) * gapPx;
  const itemStride = itemWidth + gapPx;

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={onOpenLightbox}
        aria-label={`${altBase} ${currentIndex + 1} - open in fullscreen`}
        className="block w-full p-0 border-0 cursor-pointer mb-gutter"
      >
        <LoadingImage
          src={images[currentIndex]!}
          alt={`${altBase} ${currentIndex + 1}`}
          className={bigImageClasses}
        />
      </button>

      {images.length > 1 && (
        <>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={isFirst}
              aria-label="Previous image"
              className="shrink-0 border-2 border-primary text-primary p-2 hover:bg-primary hover:text-on-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary transition-colors cursor-pointer"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "24px" }}
              >
                arrow_back
              </span>
            </button>

            <div
              className="overflow-hidden"
              style={{ width: `${containerWidth}px` }}
            >
              <div
                className="flex gap-2 transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${adjustedVisibleStart * itemStride}px)`,
                }}
              >
                {images.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => onIndexChange(i)}
                    aria-label={`Go to image ${i + 1}`}
                    aria-current={i === currentIndex ? "true" : undefined}
                    className={[
                      "shrink-0 p-0 border-2 cursor-pointer transition-opacity",
                      thumbSizeClasses,
                      i === currentIndex
                        ? "border-primary opacity-100"
                        : "border-transparent opacity-40 hover:opacity-70",
                    ].join(" ")}
                  >
                    <LoadingImage src={src} alt="" className="w-full h-full" />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={isLast}
              aria-label="Next image"
              className="shrink-0 border-2 border-primary text-primary p-2 hover:bg-primary hover:text-on-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary transition-colors cursor-pointer"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "24px" }}
              >
                arrow_forward
              </span>
            </button>
          </div>

          <p className="font-label-code text-label-code uppercase text-secondary mt-3">
            {currentIndex + 1} / {images.length}
          </p>
        </>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const project = projects.find((p) => p.id === id);

  const [currentDesktopIndex, setCurrentDesktopIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [desktopLightboxOpen, setDesktopLightboxOpen] = useState(false);
  const [mobileLightboxOpen, setMobileLightboxOpen] = useState(false);
  const [prevProjectId, setPrevProjectId] = useState<string | undefined>(
    project?.id,
  );

  if (project?.id !== prevProjectId) {
    setPrevProjectId(project?.id);
    setCurrentDesktopIndex(0);
    setCurrentMobileIndex(0);
    setDesktopLightboxOpen(false);
    setMobileLightboxOpen(false);
  }

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const githubClient =
    "githubClient" in project ? project.githubClient : undefined;
  const githubServer =
    "githubServer" in project ? project.githubServer : undefined;
  const liveUrl = "liveUrl" in project ? project.liveUrl : undefined;

  return (
    <article className="py-stack-xl">
      <header className="mb-stack-md">
        <p className="font-label-code text-label-code uppercase tracking-widest text-secondary mb-4">
          {t(`work.projects.${project.id}.category`)}
        </p>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-extrabold text-primary uppercase tracking-tight text-balance mb-stack-md">
          {t(`work.projects.${project.id}.title`)}
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-3xl">
          {t(`work.projects.${project.id}.description`)}
        </p>
      </header>

      {(githubClient || githubServer || liveUrl) && (
        <div className="flex flex-wrap gap-4 mb-stack-xl">
          {githubClient && (
            <a
              href={githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-code text-label-code uppercase border-2 border-primary text-primary px-6 py-3 hover:bg-primary hover:text-on-primary transition-colors active:scale-95 inline-block"
            >
              {t("projectDetail.githubClient")} ↗
            </a>
          )}
          {githubServer && (
            <a
              href={githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-code text-label-code uppercase border-2 border-primary text-primary px-6 py-3 hover:bg-primary hover:text-on-primary transition-colors active:scale-95 inline-block"
            >
              {t("projectDetail.githubServer")} ↗
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-code text-label-code uppercase bg-primary text-on-primary px-6 py-3 border-2 border-primary hover:bg-surface-tint transition-colors active:scale-95 inline-block"
            >
              {t("projectDetail.liveView")} ↗
            </a>
          )}
        </div>
      )}

      <section className="mb-stack-xl">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary mb-stack-md uppercase tracking-tight">
          {t("projectDetail.desktop")}
        </h2>
        {project.desktopImages.length > 0 ? (
          <ImageCarousel
            images={project.desktopImages}
            currentIndex={currentDesktopIndex}
            onIndexChange={setCurrentDesktopIndex}
            altBase={`${t(`work.projects.${project.id}.title`)} desktop screenshot`}
            onOpenLightbox={() => setDesktopLightboxOpen(true)}
            aspect="video"
          />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[1, 2].map((i) => (
              <PlaceholderBox
                key={i}
                aspect="video"
                message={t("projectDetail.desktopPlaceholder")}
              />
            ))}
          </div>
        )}
      </section>

      <section className="mb-stack-xl">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary mb-stack-md uppercase tracking-tight">
          {t("projectDetail.mobile")}
        </h2>
        {project.mobileImages.length > 0 ? (
          <ImageCarousel
            images={project.mobileImages}
            currentIndex={currentMobileIndex}
            onIndexChange={setCurrentMobileIndex}
            altBase={`${t(`work.projects.${project.id}.title`)} mobile screenshot`}
            onOpenLightbox={() => setMobileLightboxOpen(true)}
            aspect="portrait"
          />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[1, 2].map((i) => (
              <PlaceholderBox
                key={i}
                aspect="portrait"
                message={t("projectDetail.mobilePlaceholder")}
              />
            ))}
          </div>
        )}
      </section>

      <section className="mb-stack-xl grid grid-cols-1 md:grid-cols-2 gap-gutter border-t-2 border-primary pt-stack-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary mb-stack-md uppercase tracking-tight">
            {t("projectDetail.problem")}
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            {t(`work.projects.${project.id}.problem`)}
          </p>
        </div>
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary mb-stack-md uppercase tracking-tight">
            {t("projectDetail.solution")}
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            {t(`work.projects.${project.id}.solution`)}
          </p>
        </div>
      </section>

      <section className="mb-stack-xl border-t-2 border-primary pt-stack-md">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary mb-stack-md uppercase tracking-tight">
          {t("projectDetail.technologies")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {(
            [
              {
                key: "frontend" as const,
                label: t("projectDetail.frontend"),
                show: project.showFrontend ?? true,
                messageKey: project.frontendMessage,
              },
              {
                key: "backend" as const,
                label: t("projectDetail.backend"),
                show: project.showBackend ?? true,
                messageKey: project.backendMessage,
              },
            ] as const
          ).map(({ key, label, show, messageKey }) => {
            const technologies = project.technologies[key];

            return (
              <div key={key} className="border-2 border-primary p-4">
                <h3 className="font-label-code text-label-code uppercase text-primary mb-4">
                  {label}
                </h3>
                {show ? (
                  technologies.length > 0 ? (
                    <div className="space-y-4">
                      {technologies.map((technology) => (
                        <TechnologyCard
                          key={technology.name}
                          technology={technology}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="font-label-code text-label-code uppercase text-secondary">
                      {t("projectDetail.technologiesPlaceholder")}
                    </p>
                  )
                ) : (
                  <p className="font-body-md text-body-md text-secondary">
                    {messageKey ? t(messageKey) : ""}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-stack-xl border-t-2 border-primary pt-stack-md">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary mb-stack-md uppercase tracking-tight">
          {t("projectDetail.deploy")}
        </h2>
        {project.deploy.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {project.deploy.map((service) => (
              <DeployCard key={service.name} service={service} />
            ))}
          </div>
        ) : (
          <p className="font-label-code text-label-code uppercase text-secondary">
            {t("projectDetail.deployPlaceholder")}
          </p>
        )}
      </section>
      <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t-2 border-primary pt-stack-md">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.id}`}
            className="group flex flex-col items-start border-2 border-primary text-primary px-6 py-4 hover:bg-primary hover:text-on-primary transition-colors active:scale-95 text-left"
          >
            <span className="font-label-code text-label-code uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
              ← {t("projectDetail.previousProject")}
            </span>
            <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold uppercase mt-1">
              {t(`work.projects.${prevProject.id}.title`)}
            </span>
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="flex flex-col items-start border-2 border-outline text-outline px-6 py-4 opacity-30 cursor-not-allowed"
          >
            <span className="font-label-code text-label-code uppercase tracking-widest">
              ← {t("projectDetail.previousProject")}
            </span>
          </span>
        )}
        {nextProject ? (
          <Link
            to={`/projects/${nextProject.id}`}
            className="group flex flex-col items-end border-2 border-primary text-primary px-6 py-4 hover:bg-primary hover:text-on-primary transition-colors active:scale-95 text-right"
          >
            <span className="font-label-code text-label-code uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
              {t("projectDetail.nextProject")} →
            </span>
            <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold uppercase mt-1">
              {t(`work.projects.${nextProject.id}.title`)}
            </span>
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="flex flex-col items-end border-2 border-outline text-outline px-6 py-4 opacity-30 cursor-not-allowed text-right"
          >
            <span className="font-label-code text-label-code uppercase tracking-widest">
              {t("projectDetail.nextProject")} →
            </span>
          </span>
        )}
      </nav>

      <ImageLightbox
        images={project.desktopImages}
        isOpen={desktopLightboxOpen}
        index={currentDesktopIndex}
        onIndexChange={setCurrentDesktopIndex}
        alt={`${t(`work.projects.${project.id}.title`)} desktop screenshot`}
        onClose={() => setDesktopLightboxOpen(false)}
      />
      <ImageLightbox
        images={project.mobileImages}
        isOpen={mobileLightboxOpen}
        index={currentMobileIndex}
        onIndexChange={setCurrentMobileIndex}
        alt={`${t(`work.projects.${project.id}.title`)} mobile screenshot`}
        onClose={() => setMobileLightboxOpen(false)}
      />
    </article>
  );
}
