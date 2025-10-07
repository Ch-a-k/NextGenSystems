import { useContactModal } from "@/shared/ContactModalProvider";

export default function Industries() {
  const { openContact } = useContactModal();
  const sectors = [
    {
      t: "SaaS & Platforms",
      d: "Product-led growth, enterprise sales motions, usage-based pricing, and expansion."
    },
    { t: "Financial Services", d: "Risk, compliance, operating efficiency, and digital journeys." },
    { t: "Retail & E‑commerce", d: "Omnichannel experience, supply chain, and margin management." },
    { t: "Healthcare", d: "Patient access, payer/provider collaboration, and data interoperability." },
    { t: "Manufacturing", d: "Lean operations, connected factory, and quality systems." },
    { t: "Public Sector", d: "Service modernization, procurement agility, and data transparency." },
  ];

  return (
    <div className="section-bg-a">
      <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">Industries</h1>
      <p className="mt-3 max-w-2xl text-white/80">
        We combine domain expertise with proven playbooks tailored to each sector's constraints.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {sectors.map((s) => (
          <div key={s.t} className="card-surface hover-card hover-border p-6">
            <div className="text-lg font-semibold">{s.t}</div>
            <p className="mt-2 text-white/80">{s.d}</p>
            <div className="mt-5">
              <button className="btn-secondary hover-border" onClick={() => openContact(`Sector brief: ${s.t}`)}>Get sector brief</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}


