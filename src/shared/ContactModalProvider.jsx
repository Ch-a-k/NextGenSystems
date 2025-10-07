import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useFakeAction } from "./FakeActionProvider";

const ContactModalContext = createContext({ openContact: () => {}, closeContact: () => {} });

export function useContactModal() {
  return useContext(ContactModalContext);
}

export default function ContactModalProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [topic, setTopic] = useState("");
  const { doAction } = useFakeAction();

  const openContact = useCallback((initialTopic = "") => {
    setTopic(initialTopic);
    setVisible(true);
  }, []);
  const closeContact = useCallback(() => setVisible(false), []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await doAction({ title: "Request submitted", message: "Thank you for reaching out." });
      setVisible(false);
    },
    [doAction]
  );

  const value = useMemo(() => ({ openContact, closeContact }), [openContact, closeContact]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      {visible && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={closeContact} />
          <div className="relative z-10 w-full max-w-xl rounded-2xl border border-white/10 bg-[#0f1320] p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">Contact us</div>
              <button onClick={closeContact} className="text-white/70 hover:text-white">✕</button>
            </div>
            <p className="mt-1 text-sm text-white/80">We typically reply within one business day.</p>
            <form className="mt-5 grid gap-4" onSubmit={onSubmit}>
              {!!topic && (
                <input
                  className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white/90 outline-none"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Topic"
                />
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" placeholder="First name" />
                <input className="rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Last name" />
              </div>
              <input className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Work email" />
              <input className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Company" />
              <textarea rows="5" className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" placeholder="How can we help?" />
              <div className="flex items-center justify-between gap-3">
                <button type="submit" className="btn-primary">Send request</button>
                <div className="text-xs text-white/70">Email: info@nextgensystems.com • Mon–Fri 9:00–18:00</div>
              </div>
            </form>
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
}


