import { useFakeAction } from "@/shared/FakeActionProvider";

export default function Contact() {
  const { doAction } = useFakeAction();
  function onSubmit(e) {
    e.preventDefault();
    doAction({ title: "Request submitted", message: "Thank you for reaching out." });
  }
  return (
    <div className="container-base py-16 sm:py-24">
      <h1 className="section-title">Contact</h1>
      <p className="mt-3 max-w-2xl text-white/80">
        Tell us about your goals. We'll reply within one business day.
      </p>
      <form className="mt-8 max-w-xl space-y-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 transition-colors hover:border-white/25" placeholder="First name" />
          <input className="rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 transition-colors hover:border-white/25" placeholder="Last name" />
        </div>
        <input className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 transition-colors hover:border-white/25" placeholder="Work email" />
        <input className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 transition-colors hover:border-white/25" placeholder="Company" />
        <textarea rows="5" className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 transition-colors hover:border-white/25" placeholder="How can we help?" />
        <div className="flex items-center gap-3">
          <button type="submit" className="btn-primary hover-border">Request consultation</button>
          <span className="text-sm text-white/60">No spam. Cancel anytime.</span>
        </div>
        <div className="mt-3 text-sm text-white/70">Email: info@nextgensystems.com • Mon–Fri 9:00–18:00</div>
      </form>
    </div>
  );
}


