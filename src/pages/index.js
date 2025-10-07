import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import { useContactModal } from "@/shared/ContactModalProvider";

export default function Home() {
  const { openContact } = useContactModal();
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero">
        <div className="container-base py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Transform Strategy into Measurable Outcomes
            </h1>
            <p className="mt-5 text-lg text-white/80">
              NextGen Systems is a management consulting partner for growth-stage
              and enterprise organizations. We align strategy, operating models,
              and technology to accelerate value creation.
            </p>
            <div className="mt-8 flex gap-3">
              <button className="btn-primary" onClick={() => openContact("Explore Services") }>
                Explore Services
              </button>
              <button className="btn-secondary" onClick={() => openContact("Talk to an Expert") }>
                Talk to an Expert
              </button>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                "Strategy",
                "Operations",
                "Data & AI",
                "Transformation",
              ].map((item) => (
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
          <Marquee items={[
            "Operating Model Redesign",
            "Revenue Acceleration",
            "AI-Ready Data",
            "Transformation PMO",
            "Margin Engine",
            "Growth OS",
            "Change & Adoption",
          ]} />
        </div>
      </section>

      {/* Proof points */}
      <section className="section-bg-a">
        <div className="container-base py-16 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-3">
            {[{ n: "120+", l: "Clients served" }, { n: "15%", l: "Avg. margin uplift" }, { n: "8.4x", l: "ROI on programs" }].map(
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
            <p className="text-sm text-white/60 uppercase tracking-wider mb-6">Trusted by industry leaders</p>
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
          <h2 className="section-title text-center">What clients say</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { q: "NextGen transformed our operating model in 6 months. ROI was evident within the first quarter.", a: "Sarah Chen", r: "COO, TechVentures Inc" },
              { q: "Their AI readiness assessment saved us 18 months and $2M in false starts.", a: "Marcus Rodriguez", r: "CTO, DataFlow Systems" },
              { q: "Pragmatic, data-driven, and accountable. They deliver what they promise.", a: "Emily Watson", r: "VP Strategy, GlobalRetail Co" },
            ].map((t, i) => (
              <div key={i} className="card-surface hover-card hover-border p-6">
                <div className="text-white/90 leading-relaxed">&ldquo;{t.q}&rdquo;</div>
                <div className="mt-4 border-t border-white/10 pt-4">
                  <div className="font-medium text-sm text-white">{t.a}</div>
                  <div className="text-xs text-white/60 mt-1">{t.r}</div>
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
            <h2 className="section-title">What we deliver</h2>
            <Link href="/solutions" className="hover-link text-sm text-white/70">
              View solutions →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                t: "Operating Model Redesign",
                d: "Re-architect roles, processes, and governance to scale sustainably.",
              },
              {
                t: "Revenue Acceleration",
                d: "Segmented GTM motions, pricing strategies, and post-sale expansion.",
              },
              {
                t: "AI-Ready Data Foundations",
                d: "Modern data platforms, quality controls, and applied analytics.",
              },
            ].map((c) => (
              <div key={c.t} className="card-surface hover-card hover-border p-6">
                <div className="text-lg font-semibold">{c.t}</div>
                <p className="mt-2 text-white/80">{c.d}</p>
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
                <h3 className="text-xl font-semibold">Subscription Consulting</h3>
                <p className="mt-1 text-white/80">
                  Flexible retainer-based engagements or outcome-linked fee models tailored
                  to your roadmap.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Get proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
