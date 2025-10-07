import { useContactModal } from "@/shared/ContactModalProvider";

export default function Services() {
  const { openContact } = useContactModal();
  const services = [
    {
      title: "Corporate Strategy",
      desc: "Define ambition, portfolio bets, and value creation thesis with measurable horizons.",
      bullets: [
        "North Star + strategic roadmaps",
        "M&A, divestitures, and partnerships",
        "Operating cadence and KPIs",
      ],
    },
    {
      title: "Operating Model & PMO",
      desc: "Redesign processes, governance, and PMO to deliver outcomes at speed.",
      bullets: [
        "Org and role clarity",
        "Process and control re-architecture",
        "Program governance and PMO",
      ],
    },
    {
      title: "Data, AI & Automation",
      desc: "Build AI-ready data foundations and embed analytics into decision cycles.",
      bullets: [
        "Modern data platforms",
        "Information quality and lineage",
        "Applied analytics and automation",
      ],
    },
  ];

  return (
    <div className="section-bg-b">
      <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">Services</h1>
      <p className="mt-3 max-w-2xl text-white/80">
        Engagements available as subscriptions (retainer) or outcome-linked fee models.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="card-surface hover-card hover-border p-6">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-white/80">{s.desc}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/80">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-5">
              <button className="btn-primary hover-border" onClick={() => openContact(`Service: ${s.title}`)}>Request info</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}


