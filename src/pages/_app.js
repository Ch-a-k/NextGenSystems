import "@/styles/globals.css";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "../shared/Layout";
import FakeActionProvider from "../shared/FakeActionProvider";
import ContactModalProvider from "../shared/ContactModalProvider";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NextGen Systems — Business & Management Consulting</title>
        <meta
          name="description"
          content="NextGen Systems provides strategy, operations, and technology consulting for modern enterprises. Subscriptions and value-based fee models."
        />
      </Head>
      <FakeActionProvider>
        <ContactModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContactModalProvider>
      </FakeActionProvider>
    </div>
  );
}
