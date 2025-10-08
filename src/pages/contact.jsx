import { useFakeAction } from "@/shared/FakeActionProvider";
import { useLocale } from "@/shared/LocaleProvider";

export default function Contact() {
  const { doAction } = useFakeAction();
  const { t } = useLocale();
  function onSubmit(e) {
    e.preventDefault();
    doAction({ title: "Request submitted", message: "Thank you for reaching out." });
  }
  return (
    <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">{t("contact.title")}</h1>
      <p className="mt-3 max-w-2xl text-white/80">
        {t("contact.subtitle")}
      </p>
      <form className="mt-8 max-w-xl space-y-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 transition-colors hover:border-white/25" placeholder={t("contact.firstName")} />
          <input className="rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 transition-colors hover:border-white/25" placeholder={t("contact.lastName")} />
        </div>
        <input className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 transition-colors hover:border-white/25" placeholder={t("contact.email")} />
        <input className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 transition-colors hover:border-white/25" placeholder={t("contact.company")} />
        <textarea rows="5" className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 transition-colors hover:border-white/25" placeholder={t("contact.message")} />
        <div className="flex items-center gap-3">
          <button type="submit" className="btn-primary hover-border">{t("contact.submit")}</button>
          <span className="text-sm text-white/60">{t("contact.noSpam")}</span>
        </div>
        <div className="mt-3 text-sm text-white/70">{t("contact.info")}</div>
      </form>
    </div>
  );
}


