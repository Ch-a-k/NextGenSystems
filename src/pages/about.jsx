import { useContactModal } from "@/shared/ContactModalProvider";
import { useLocale } from "@/shared/LocaleProvider";

export default function About() {
  const { openContact } = useContactModal();
  const { t } = useLocale();
  return (
    <div className="section-bg-a">
      <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">{t("about.title")}</h1>
      <div className="mt-4 grid gap-8 sm:grid-cols-2">
        <p className="text-white/80">
          {t("about.para1")}
        </p>
        <p className="text-white/80">
          {t("about.para2")}
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[
          {h: t("about.principle1.title"), d: t("about.principle1.desc")},
          {h: t("about.principle2.title"), d: t("about.principle2.desc")},
          {h: t("about.principle3.title"), d: t("about.principle3.desc")}
        ].map(x => (
          <div key={x.h} className="card-surface hover-card hover-border p-6">
            <div className="text-lg font-semibold">{x.h}</div>
            <p className="mt-2 text-white/80">{x.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className="btn-primary hover-border" onClick={() => openContact("Request capabilities deck")}>{t("about.requestDeck")}</button>
      </div>
      </div>
    </div>
  );
}


