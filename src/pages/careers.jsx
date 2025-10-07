import { useContactModal } from "@/shared/ContactModalProvider";

export default function Careers() {
  const { openContact } = useContactModal();
  const roles = [
    { t: "Senior Consultant (Operations)", l: "Remote, EMEA" },
    { t: "Engagement Manager (Strategy)", l: "Remote, US" },
    { t: "Data Analyst (AI Enablement)", l: "Remote, LATAM" },
  ];

  return (
    <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">Careers</h1>
      <p className="mt-3 max-w-2xl text-white/80">
        We hire pragmatic builders who thrive in ambiguity and drive measurable outcomes.
      </p>
      <div className="mt-8 grid gap-4">
        {roles.map((r) => (
          <div key={r.t} className="card-surface hover-card hover-border flex items-center justify-between p-6">
            <div>
              <div className="font-semibold">{r.t}</div>
              <div className="text-sm text-white/70">{r.l}</div>
            </div>
            <button className="btn-primary hover-border" onClick={() => openContact(`Apply: ${r.t}`)}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}


