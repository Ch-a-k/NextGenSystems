import Header from "./Header";
import Footer from "./Footer";
import PaymentModalProvider from "./PaymentModalProvider";

export default function Layout({ children }) {
  return (
    <PaymentModalProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </PaymentModalProvider>
  );
}


