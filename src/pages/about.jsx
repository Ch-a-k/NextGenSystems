import { useContactModal } from "@/shared/ContactModalProvider";

export default function About() {
  const { openContact } = useContactModal();
  return (
    <div className="section-bg-a">
      <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">About NextGen Systems</h1>
      <div className="mt-4 grid gap-8 sm:grid-cols-2">
        <p className="text-white/80">
          We are an independent advisory firm focused on strategy, operations, and
          technology. Our consultants bring operator experience and a bias toward
          measurable outcomes—favoring simple, durable solutions over complex decks.
        </p>
        <p className="text-white/80">
          Engagements are structured as subscriptions or outcome-linked fees, aligning our
          incentives with your results. We're headquartered remotely with consultants across
          time zones to support global teams.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[{h:"Principled",d:"Independent advice, transparent tradeoffs, and clear ownership."},{h:"Pragmatic",d:"Right-sized solutions that your teams can run on day two."},{h:"Partnered",d:"We work shoulder-to-shoulder with your leaders and operators."}].map(x => (
          <div key={x.h} className="card-surface hover-card hover-border p-6">
            <div className="text-lg font-semibold">{x.h}</div>
            <p className="mt-2 text-white/80">{x.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className="btn-primary hover-border" onClick={() => openContact("Request capabilities deck")}>Request capabilities deck</button>
      </div>
      </div>
    </div>
  );
}


