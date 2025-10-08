import { useContactModal } from "@/shared/ContactModalProvider";
import { useLocale } from "@/shared/LocaleProvider";
import { solutionsData } from "@/data/solutionsData";

export default function Solutions() {
  const { openContact } = useContactModal();
  const { t, locale } = useLocale();
  const solutions = solutionsData[locale];

  return (
    <div className="section-bg-b">
      <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">{t("solutions.title")}</h1>
      <p className="mt-3 max-w-2xl text-white/80">
        {t("solutions.subtitle")}
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {solutions.map((s) => (
          <div key={s.title} className="card-surface hover-card hover-border p-6">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-white/80">{s.desc}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/80">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-5">
              <button className="btn-primary hover-border" onClick={() => openContact(`Solution demo: ${s.title}`)}>{t("solutions.requestDemo")}</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}


