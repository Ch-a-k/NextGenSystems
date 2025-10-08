import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useContactModal } from "./ContactModalProvider";
import { useLocale } from "./LocaleProvider";

const nav = [
  { href: "/services", labelKey: "nav.services" },
  { href: "/industries", labelKey: "nav.industries" },
  { href: "/solutions", labelKey: "nav.solutions" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/careers", labelKey: "nav.careers" },
  { href: "/contact", labelKey: "nav.contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { openContact } = useContactModal();
  const { locale, setLocale, t } = useLocale();
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(11,14,20,0.7)] backdrop-blur">
        <div className="container-base flex h-14 sm:h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover-link">
            <Image src="/logo.png" alt="NextGen Systems" width={32} height={32} className="h-8 w-8" priority />
            <span className="hidden sm:inline text-base font-semibold tracking-tight">NextGen Systems</span>
          </Link>
        <nav className="hidden gap-6 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-white/80 hover-link">
              {t(n.labelKey)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="hidden lg:inline-flex items-center gap-1 rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs text-white hover:bg-white/10"
            onClick={() => setLocale(locale === "en" ? "ur" : "en")}
            title="Switch language"
          >
            {locale === "en" ? "اردو" : "EN"}
          </button>
          <a className="btn-secondary hover-border hidden lg:inline-flex" href="mailto:info@nextgensystems.com">
            {t("header.workWithUs")}
          </a>
          <button className="btn-primary hidden lg:inline-flex hover-border" onClick={() => openContact("Getting started") }>
            {t("header.getStarted")}
          </button>
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 p-2 text-white hover:bg-white/10"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
              {!open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 menu-overlay animate-fade-in" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-xs bg-[#0f1320] shadow-2xl border-l border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="NextGen Systems" width={28} height={28} className="h-7 w-7" />
                <span className="text-base font-semibold">{t("header.menu")}</span>
              </div>
              <button aria-label="Close menu" className="text-white/80 hover:text-white" onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <button
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${locale === "en" ? "bg-brand-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/15"}`}
                onClick={() => { setLocale("en"); }}
              >
                English
              </button>
              <button
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${locale === "ur" ? "bg-brand-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/15"}`}
                onClick={() => { setLocale("ur"); }}
              >
                اردو
              </button>
            </div>
            <nav className="mt-6 grid gap-3">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-xl border border-white/20 bg-[#101626]/90 px-4 py-3 text-white shadow-lg shadow-black/30 hover:border-white/30 hover:bg-[#121a2b]/95"
                  onClick={() => setOpen(false)}
                >
                  {t(n.labelKey)}
                </Link>
              ))}
            </nav>
            <div className="mt-6 grid gap-3">
              <a href="mailto:info@nextgensystems.com" className="btn-secondary hover-border w-full text-center bg-[#101626]/90 border-white/20 hover:bg-[#121a2b]/95" onClick={() => setOpen(false)}>
                {t("header.workWithUs")}
              </a>
              <button className="btn-primary hover-border w-full" onClick={() => { setOpen(false); openContact("Getting started"); }}>
                {t("header.getStarted")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


