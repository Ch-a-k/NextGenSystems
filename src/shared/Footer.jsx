import Link from "next/link";
import Image from "next/image";
import { useLocale } from "./LocaleProvider";

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-white/10">
      <div className="container-base py-10">
        <div className="grid gap-8 sm:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="NextGen Systems" width={28} height={28} className="h-7 w-7" />
              <div className="text-base font-semibold">NextGen Systems</div>
            </div>
            <p className="mt-2 text-sm text-white/70">
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">{t("footer.company")}</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="/about">{t("nav.about")}</Link></li>
              <li><Link href="/careers">{t("nav.careers")}</Link></li>
              <li><Link href="/contact">{t("nav.contact")}</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">{t("footer.expertise")}</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="/services">{t("nav.services")}</Link></li>
              <li><Link href="/industries">{t("nav.industries")}</Link></li>
              <li><Link href="/solutions">{t("nav.solutions")}</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">{t("footer.legal")}</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="#">{t("footer.privacy")}</Link></li>
              <li><Link href="#">{t("footer.terms")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <div>© {new Date().getFullYear()} NextGen Systems. {t("footer.rights")}</div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:info@nextgensystems.com" className="hover-link">info@nextgensystems.com</a>
            <span>Mon–Fri 9:00–18:00</span>
            <span>{t("footer.category")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


