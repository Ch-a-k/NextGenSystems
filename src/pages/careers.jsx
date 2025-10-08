import { useContactModal } from "@/shared/ContactModalProvider";
import { useLocale } from "@/shared/LocaleProvider";
import { careersData } from "@/data/careersData";

export default function Careers() {
  const { openContact } = useContactModal();
  const { t, locale } = useLocale();
  const roles = careersData[locale];

  return (
    <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">{t("careers.title")}</h1>
      <p className="mt-3 max-w-2xl text-white/80">
        {t("careers.subtitle")}
      </p>
      <div className="mt-8 grid gap-4">
        {roles.map((r) => (
          <div key={r.title} className="card-surface hover-card hover-border flex items-center justify-between p-6">
            <div>
              <div className="font-semibold">{r.title}</div>
              <div className="text-sm text-white/70">{r.location}</div>
            </div>
            <button className="btn-primary hover-border" onClick={() => openContact(`Apply: ${r.title}`)}>{t("careers.apply")}</button>
          </div>
        ))}
      </div>
    </div>
  );
}


