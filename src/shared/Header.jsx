import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useContactModal } from "./ContactModalProvider";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { openContact } = useContactModal();
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
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a className="btn-secondary hover-border hidden lg:inline-flex" href="mailto:info@nextgensystems.com">
            Work with us
          </a>
          <button className="btn-primary hidden lg:inline-flex hover-border" onClick={() => openContact("Getting started") }>
            Get Started
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
                <span className="text-base font-semibold">Menu</span>
              </div>
              <button aria-label="Close menu" className="text-white/80 hover:text-white" onClick={() => setOpen(false)}>✕</button>
            </div>
            <nav className="mt-6 grid gap-3">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-xl border border-white/20 bg-[#101626]/90 px-4 py-3 text-white shadow-lg shadow-black/30 hover:border-white/30 hover:bg-[#121a2b]/95"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 grid gap-3">
              <a href="mailto:info@nextgensystems.com" className="btn-secondary hover-border w-full text-center bg-[#101626]/90 border-white/20 hover:bg-[#121a2b]/95" onClick={() => setOpen(false)}>
                Work with us
              </a>
              <button className="btn-primary hover-border w-full" onClick={() => { setOpen(false); openContact("Getting started"); }}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


