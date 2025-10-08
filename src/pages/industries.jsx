import { useContactModal } from "@/shared/ContactModalProvider";
import { useLocale } from "@/shared/LocaleProvider";
import { industriesData } from "@/data/industriesData";

export default function Industries() {
  const { openContact } = useContactModal();
  const { t, locale } = useLocale();
  const sectors = industriesData[locale];

  return (
    <div className="section-bg-a">
      <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">{t("industries.title")}</h1>
      <p className="mt-3 max-w-2xl text-white/80">
        {t("industries.subtitle")}
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {sectors.map((s) => (
          <div key={s.title} className="card-surface hover-card hover-border p-6">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-white/80">{s.desc}</p>
            <div className="mt-5">
              <button className="btn-secondary hover-border" onClick={() => openContact(`Sector brief: ${s.title}`)}>{t("industries.getSectorBrief")}</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}


