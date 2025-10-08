import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import { useContactModal } from "@/shared/ContactModalProvider";
import { useLocale } from "@/shared/LocaleProvider";
import { homeData } from "@/data/homeData";

export default function Home() {
  const { openContact } = useContactModal();
  const { t, locale } = useLocale();
  const data = homeData[locale];
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero">
        <div className="container-base py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t("home.hero.title")}
            </h1>
            <p className="mt-5 text-lg text-white/80">
              {t("home.hero.subtitle")}
            </p>
            <div className="mt-8 flex gap-3">
              <button className="btn-primary" onClick={() => openContact(t("home.hero.exploreServices")) }>
                {t("home.hero.exploreServices")}
              </button>
              <button className="btn-secondary" onClick={() => openContact(t("home.hero.talkToExpert")) }>
                {t("home.hero.talkToExpert")}
              </button>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {data.hero.categories.map((item) => (
                <div key={item} className="card-surface hover-card animate-float-slow p-4 text-sm text-white/80 hover-border">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section>
        <div className="container-base">
          <Marquee items={data.marquee} />
        </div>
      </section>

      {/* Proof points */}
      <section className="section-bg-a">
        <div className="container-base py-16 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-3">
            {[{ n: "120+", l: t("home.stats.clients") }, { n: "15%", l: t("home.stats.margin") }, { n: "8.4x", l: t("home.stats.roi") }].map(
              (k) => (
                <div key={k.l} className="card-surface p-6">
                  <div className="text-3xl font-semibold text-white">{k.n}</div>
                  <div className="mt-1 text-white/70">{k.l}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="section-bg-b">
        <div className="container-base py-12 sm:py-16">
          <div className="text-center">
            <p className="text-sm text-white/60 uppercase tracking-wider mb-6">{t("home.trust.title")}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              {["Fortune 500", "ISO 27001", "SOC 2 Type II", "GDPR Compliant", "Member PMI"].map((badge) => (
                <div key={badge} className="text-white/50 text-sm font-medium px-4 py-2 border border-white/10 rounded-lg hover:border-white/20 hover:text-white/70 transition-colors">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="container-base py-16 sm:py-24">
          <h2 className="section-title text-center">{t("home.testimonials.title")}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.testimonials.map((testimonial, i) => (
              <div key={i} className="card-surface hover-card hover-border p-6">
                <div className="text-white/90 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</div>
                <div className="mt-4 border-t border-white/10 pt-4">
                  <div className="font-medium text-sm text-white">{testimonial.author}</div>
                  <div className="text-xs text-white/60 mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-bg-a">
        <div className="container-base py-16 sm:py-24">
          <div className="flex items-end justify-between">
            <h2 className="section-title">{t("home.offerings.title")}</h2>
            <Link href="/solutions" className="hover-link text-sm text-white/70">
              {t("home.offerings.viewSolutions")}
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {data.offerings.map((offering) => (
              <div key={offering.title} className="card-surface hover-card hover-border p-6">
                <div className="text-lg font-semibold">{offering.title}</div>
                <p className="mt-2 text-white/80">{offering.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-base py-16 sm:py-24">
          <div className="card-surface px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold">{t("home.cta.title")}</h3>
                <p className="mt-1 text-white/80">
                  {t("home.cta.subtitle")}
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                {t("home.cta.button")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
