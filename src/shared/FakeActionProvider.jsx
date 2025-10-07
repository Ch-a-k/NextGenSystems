import { createContext, useCallback, useContext, useMemo, useState } from "react";

const FakeActionContext = createContext({ doAction: async () => {} });

export function useFakeAction() {
  return useContext(FakeActionContext);
}

export default function FakeActionProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const [loading, setLoading] = useState(false);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const pushToast = useCallback((title, message) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, title, message }]);
    setTimeout(() => removeToast(id), 2400);
  }, [removeToast]);

  const doAction = useCallback(async ({ title = "Request sent", message = "We will follow up shortly." } = {}) => {
    if (loading) return;
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    pushToast(title, message);
  }, [loading, pushToast]);

  const value = useMemo(() => ({ doAction }), [doAction]);

  return (
    <FakeActionContext.Provider value={value}>
      {children}
      {loading && (
        <div className="pointer-events-none fixed inset-0 z-[60] flex items-start justify-center p-6">
          <div className="mt-16 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 shadow-lg backdrop-blur animate-fade-in">
            <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
            Sending...
          </div>
        </div>
      )}
      <div className="fixed bottom-4 right-4 z-[70] space-y-2">
        {toasts.map((t) => (
          <div key={t.id} className="card-surface animate-fade-in w-72 rounded-xl p-4 text-sm shadow-lg">
            <div className="font-medium">{t.title}</div>
            {t.message && <div className="mt-1 text-white/80">{t.message}</div>}
          </div>
        ))}
      </div>
    </FakeActionContext.Provider>
  );
}


