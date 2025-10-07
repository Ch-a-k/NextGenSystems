import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
              Strategy, operations, and technology consulting with subscriptions and
              value-based fee models.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Expertise</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/solutions">Solutions</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="#">Privacy</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <div>© {new Date().getFullYear()} NextGen Systems. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:info@nextgensystems.com" className="hover-link">info@nextgensystems.com</a>
            <span>Mon–Fri 9:00–18:00</span>
            <span>Category: 7020 – Business & Management Consulting</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


