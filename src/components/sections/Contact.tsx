import { type FormEvent, useRef } from "react";
import { useTranslation } from "react-i18next";
import { personal } from "../../constants/data/personal";

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(t("contact.form.subject", { name }));
    const body = encodeURIComponent(
      `${t("contact.form.from")}: ${name}\n${t("contact.form.email")}: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="py-stack-xl border-t-2 border-primary grid grid-cols-1 md:grid-cols-2 gap-gutter scroll-mt-[80px]"
    >
      <div>
        <h2 className="font-headline-xl text-headline-xl font-extrabold text-primary mb-stack-md uppercase tracking-tight">
          {t("contact.titleLine1")}
          <br />
          {t("contact.titleLine2")}
        </h2>
        <p className="font-body-lg text-body-lg text-secondary mb-stack-lg max-w-md">
          {t("contact.description")}
        </p>
        <div className="space-y-4">
          <a
            href={`mailto:${personal.email}`}
            className="block font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary hover:underline uppercase break-all"
          >
            {personal.email}
          </a>
        </div>
      </div>
      <div className="bg-surface-gray p-8 border-2 border-primary">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="name"
              className="block font-label-code text-label-code uppercase text-secondary mb-2"
            >
              {t("contact.form.name")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={t("contact.form.namePlaceholder")}
              className="w-full bg-transparent border-0 border-b-2 border-primary p-2 focus:ring-0 focus:border-primary font-body-lg text-primary placeholder-surface-dim transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-label-code text-label-code uppercase text-secondary mb-2"
            >
              {t("contact.form.email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t("contact.form.emailPlaceholder")}
              className="w-full bg-transparent border-0 border-b-2 border-primary p-2 focus:ring-0 focus:border-primary font-body-lg text-primary placeholder-surface-dim transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-label-code text-label-code uppercase text-secondary mb-2"
            >
              {t("contact.form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder={t("contact.form.messagePlaceholder")}
              className="w-full bg-transparent border-0 border-b-2 border-primary p-2 focus:ring-0 focus:border-primary font-body-lg text-primary placeholder-surface-dim resize-none transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-on-primary font-label-code text-label-code uppercase py-4 border-2 border-primary hover:bg-transparent hover:text-primary transition-colors active:scale-95"
          >
            {t("contact.form.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}