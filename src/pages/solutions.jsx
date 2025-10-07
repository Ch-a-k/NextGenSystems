import { useContactModal } from "@/shared/ContactModalProvider";

export default function Solutions() {
  const { openContact } = useContactModal();
  const solutions = [
    {
      t: "Growth OS",
      d: "A connected system of strategy, KPIs, and execution rituals to scale predictably.",
      k: ["Objectives and key results", "Forecasting and reviews", "Governance and risk"],
    },
    {
      t: "Margin Engine",
      d: "End-to-end cost, pricing, and mix insights with actions to protect profitability.",
      k: ["Unit economics", "Price optimization", "Supply efficiency"],
    },
    {
      t: "AI Enablement",
      d: "Blueprints, data readiness, and pilots to move from demos to production value.",
      k: ["Use-case portfolio", "Data and model controls", "Change and adoption"],
    },
  ];

  return (
    <div className="section-bg-b">
      <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">Solutions</h1>
      <p className="mt-3 max-w-2xl text-white/80">
        Modular, outcome-focused solutions that can be adopted independently or as a system.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {solutions.map((s) => (
          <div key={s.t} className="card-surface hover-card hover-border p-6">
            <div className="text-lg font-semibold">{s.t}</div>
            <p className="mt-2 text-white/80">{s.d}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/80">
              {s.k.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
            <div className="mt-5">
              <button className="btn-primary hover-border" onClick={() => openContact(`Solution demo: ${s.t}`)}>Request demo</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}


