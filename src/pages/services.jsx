import { useContactModal } from "@/shared/ContactModalProvider";
import { useLocale } from "@/shared/LocaleProvider";
import { servicesData } from "@/data/servicesData";

export default function Services() {
  const { openContact } = useContactModal();
  const { t, locale } = useLocale();
  const services = servicesData[locale];

  return (
    <div className="section-bg-b">
      <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">{t("services.title")}</h1>
      <p className="mt-3 max-w-2xl text-white/80">
        {t("services.subtitle")}
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="card-surface hover-card hover-border p-6">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-white/80">{s.desc}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/80">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-5">
              <button className="btn-primary hover-border" onClick={() => openContact(`Service: ${s.title}`)}>{t("services.requestInfo")}</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}


