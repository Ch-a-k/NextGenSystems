import { createContext, useContext, useState, useCallback } from "react";

const PaymentModalContext = createContext({ open: () => {}, close: () => {} });

export function usePaymentModal() {
  return useContext(PaymentModalContext);
}

export default function PaymentModalProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const open = useCallback(() => setVisible(true), []);
  const close = useCallback(() => setVisible(false), []);

  return (
    <PaymentModalContext.Provider value={{ open, close }}>
      {children}
      {visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={close} />
          <div className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-[#0f1320] p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">Billing Portal</div>
              <button onClick={close} className="text-white/70 hover:text-white">✕</button>
            </div>
            <p className="mt-2 text-sm text-white/80">
              This is a placeholder for the future payment window. Integrate your
              provider here (Stripe/Adyen/etc) via API for subscriptions or fee-based
              engagements.
            </p>
            <form className="mt-6 grid gap-4">
              <input className="rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Email" />
              <input className="rounded-md border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Company" />
              <button type="button" className="btn-primary">Proceed to Payment</button>
            </form>
          </div>
        </div>
      )}
    </PaymentModalContext.Provider>
  );
}


