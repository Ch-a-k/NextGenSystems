import Link from "next/link";
import Image from "next/image";
import { useFakeAction } from "./FakeActionProvider";
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
  const { doAction } = useFakeAction();
  const { openContact } = useContactModal();
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(11,14,20,0.7)] backdrop-blur">
      <div className="container-base flex h-14 sm:h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover-link">
          <Image src="/logo.png" alt="NextGen Systems" width={32} height={32} className="h-8 w-8" priority />
          <span className="text-base font-semibold tracking-tight">NextGen Systems</span>
        </Link>
        <nav className="hidden gap-6 sm:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-white/80 hover-link">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a className="btn-secondary hover-border" href="mailto:info@nextgensystems.com">
            Work with us
          </a>
          <button className="btn-primary hidden sm:inline-flex hover-border" onClick={() => openContact("Getting started") }>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}


