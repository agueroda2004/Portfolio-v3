import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <article className="min-h-[60vh] flex flex-col justify-center items-center text-center min-h-screen">
      <p className="font-label-code text-label-code uppercase tracking-widest text-secondary mb-4">
        {t("notFound.code")}
      </p>
      <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-black text-primary uppercase mb-stack-md tracking-tight text-balance">
        {t("notFound.title")}
      </h1>
      <p className="font-body-lg text-body-lg text-secondary max-w-xl mb-stack-lg">
        {t("notFound.description")}
      </p>
      <Link
        to="/"
        className="font-label-code text-label-code uppercase bg-primary text-on-primary px-8 py-4 border-2 border-primary hover:bg-transparent hover:text-primary transition-colors active:scale-95 inline-block no-underline"
      >
        {t("notFound.backHome")}
      </Link>
    </article>
  );
}
