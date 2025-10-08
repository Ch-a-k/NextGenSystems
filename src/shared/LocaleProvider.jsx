import { createContext, useContext, useState, useCallback, useMemo } from "react";

const LocaleContext = createContext({ locale: "en", setLocale: () => {}, t: () => "" });

export function useLocale() {
  return useContext(LocaleContext);
}

export default function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState("ur");

  const setLocale = useCallback((newLocale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
      document.documentElement.lang = newLocale;
      document.documentElement.dir = newLocale === "ur" ? "rtl" : "ltr";
    }
  }, []);

  // Initialize from localStorage on mount
  useMemo(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("locale");
      if (saved && (saved === "en" || saved === "ur")) {
        setLocale(saved);
      } else {
        // Set initial direction for Urdu
        document.documentElement.lang = "ur";
        document.documentElement.dir = "rtl";
      }
    }
  }, [setLocale]);

  const t = useCallback((key) => {
    return translations[locale]?.[key] || key;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

// Translations
const translations = {
  en: {
    // Header
    "nav.services": "Services",
    "nav.industries": "Industries",
    "nav.solutions": "Solutions",
    "nav.about": "About",
    "nav.careers": "Careers",
    "nav.contact": "Contact",
    "header.workWithUs": "Work with us",
    "header.getStarted": "Get Started",
    "header.menu": "Menu",
    
    // Home
    "home.hero.title": "Transform Strategy into Measurable Outcomes",
    "home.hero.subtitle": "NextGen Systems is a management consulting partner for growth-stage and enterprise organizations. We align strategy, operating models, and technology to accelerate value creation.",
    "home.hero.exploreServices": "Explore Services",
    "home.hero.talkToExpert": "Talk to an Expert",
    "home.stats.clients": "Clients served",
    "home.stats.margin": "Avg. margin uplift",
    "home.stats.roi": "ROI on programs",
    "home.trust.title": "Trusted by industry leaders",
    "home.testimonials.title": "What clients say",
    "home.offerings.title": "What we deliver",
    "home.offerings.viewSolutions": "View solutions →",
    "home.cta.title": "Subscription Consulting",
    "home.cta.subtitle": "Flexible retainer-based engagements or outcome-linked fee models tailored to your roadmap.",
    "home.cta.button": "Get proposal",
    
    // Services
    "services.title": "Services",
    "services.subtitle": "Engagements available as subscriptions (retainer) or outcome-linked fee models.",
    "services.requestInfo": "Request info",
    
    // Industries
    "industries.title": "Industries",
    "industries.subtitle": "We combine domain expertise with proven playbooks tailored to each sector's constraints.",
    "industries.getSectorBrief": "Get sector brief",
    
    // Solutions
    "solutions.title": "Solutions",
    "solutions.subtitle": "Modular, outcome-focused solutions that can be adopted independently or as a system.",
    "solutions.requestDemo": "Request demo",
    
    // About
    "about.title": "About NextGen Systems",
    "about.para1": "We are an independent advisory firm focused on strategy, operations, and technology. Our consultants bring operator experience and a bias toward measurable outcomes—favoring simple, durable solutions over complex decks.",
    "about.para2": "Engagements are structured as subscriptions or outcome-linked fees, aligning our incentives with your results. We're headquartered remotely with consultants across time zones to support global teams.",
    "about.principle1.title": "Principled",
    "about.principle1.desc": "Independent advice, transparent tradeoffs, and clear ownership.",
    "about.principle2.title": "Pragmatic",
    "about.principle2.desc": "Right-sized solutions that your teams can run on day two.",
    "about.principle3.title": "Partnered",
    "about.principle3.desc": "We work shoulder-to-shoulder with your leaders and operators.",
    "about.requestDeck": "Request capabilities deck",
    
    // Careers
    "careers.title": "Careers",
    "careers.subtitle": "We hire pragmatic builders who thrive in ambiguity and drive measurable outcomes.",
    "careers.apply": "Apply",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Tell us about your goals. We'll reply within one business day.",
    "contact.firstName": "First name",
    "contact.lastName": "Last name",
    "contact.email": "Work email",
    "contact.company": "Company",
    "contact.message": "How can we help?",
    "contact.submit": "Request consultation",
    "contact.noSpam": "No spam. Cancel anytime.",
    "contact.info": "Email: info@nextgensystems.com • Mon–Fri 9:00–18:00",
    
    // Footer
    "footer.tagline": "Strategy, operations, and technology consulting with subscriptions and value-based fee models.",
    "footer.company": "Company",
    "footer.expertise": "Expertise",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.rights": "All rights reserved.",
    "footer.category": "Category: 7020 – Business & Management Consulting",
  },
  ur: {
    // Header - Urdu
    "nav.services": "خدمات",
    "nav.industries": "صنعتیں",
    "nav.solutions": "حل",
    "nav.about": "ہمارے بارے میں",
    "nav.careers": "کیریئر",
    "nav.contact": "رابطہ",
    "header.workWithUs": "ہمارے ساتھ کام کریں",
    "header.getStarted": "شروع کریں",
    "header.menu": "مینو",
    
    // Home - Urdu
    "home.hero.title": "حکمت عملی کو قابل پیمائش نتائج میں تبدیل کریں",
    "home.hero.subtitle": "NextGen Systems ترقی پذیر اور انٹرپرائز تنظیموں کے لیے ایک مینجمنٹ کنسلٹنگ پارٹنر ہے۔ ہم قدر کی تخلیق کو تیز کرنے کے لیے حکمت عملی، آپریٹنگ ماڈلز اور ٹیکنالوجی کو ہم آہنگ کرتے ہیں۔",
    "home.hero.exploreServices": "خدمات دیکھیں",
    "home.hero.talkToExpert": "ماہر سے بات کریں",
    "home.stats.clients": "کلائنٹس کی خدمت کی",
    "home.stats.margin": "اوسط مارجن میں اضافہ",
    "home.stats.roi": "پروگراموں پر ROI",
    "home.trust.title": "صنعت کے رہنماؤں کا اعتماد",
    "home.testimonials.title": "کلائنٹس کیا کہتے ہیں",
    "home.offerings.title": "ہم کیا فراہم کرتے ہیں",
    "home.offerings.viewSolutions": "حل دیکھیں ←",
    "home.cta.title": "سبسکرپشن کنسلٹنگ",
    "home.cta.subtitle": "لچکدار ریٹینر پر مبنی مصروفیات یا نتائج سے منسلک فیس ماڈلز آپ کے روڈ میپ کے مطابق۔",
    "home.cta.button": "تجویز حاصل کریں",
    
    // Services - Urdu
    "services.title": "خدمات",
    "services.subtitle": "سبسکرپشنز (ریٹینر) یا نتائج سے منسلک فیس ماڈلز کے طور پر دستیاب۔",
    "services.requestInfo": "معلومات کی درخواست کریں",
    
    // Industries - Urdu
    "industries.title": "صنعتیں",
    "industries.subtitle": "ہم ہر شعبے کی رکاوٹوں کے مطابق ڈومین مہارت اور ثابت شدہ پلے بکس کو یکجا کرتے ہیں۔",
    "industries.getSectorBrief": "سیکٹر بریف حاصل کریں",
    
    // Solutions - Urdu
    "solutions.title": "حل",
    "solutions.subtitle": "ماڈیولر، نتیجہ پر مبنی حل جنہیں آزادانہ طور پر یا نظام کے طور پر اپنایا جا سکتا ہے۔",
    "solutions.requestDemo": "ڈیمو کی درخواست کریں",
    
    // About - Urdu
    "about.title": "NextGen Systems کے بارے میں",
    "about.para1": "ہم ایک آزاد مشاورتی فرم ہیں جو حکمت عملی، آپریشنز اور ٹیکنالوجی پر مرکوز ہے۔ ہمارے کنسلٹنٹس آپریٹر کا تجربہ رکھتے ہیں اور قابل پیمائش نتائج کی طرف جھکاؤ رکھتے ہیں—پیچیدہ ڈیکس پر سادہ، پائیدار حل کو ترجیح دیتے ہیں۔",
    "about.para2": "مصروفیات کو سبسکرپشنز یا نتائج سے منسلک فیسوں کے طور پر ترتیب دیا جاتا ہے، جو آپ کے نتائج کے ساتھ ہماری ترغیبات کو ہم آہنگ کرتا ہے۔ ہم دور دراز سے ہیڈکوارٹر ہیں اور عالمی ٹیموں کی مدد کے لیے ٹائم زونز میں کنسلٹنٹس ہیں۔",
    "about.principle1.title": "اصولی",
    "about.principle1.desc": "آزاد مشورہ، شفاف تبادلے، اور واضح ملکیت۔",
    "about.principle2.title": "عملی",
    "about.principle2.desc": "صحیح سائز کے حل جو آپ کی ٹیمیں دوسرے دن چلا سکتی ہیں۔",
    "about.principle3.title": "شراکت دار",
    "about.principle3.desc": "ہم آپ کے رہنماؤں اور آپریٹرز کے ساتھ کندھے سے کندھا ملا کر کام کرتے ہیں۔",
    "about.requestDeck": "صلاحیتوں کی ڈیک کی درخواست کریں",
    
    // Careers - Urdu
    "careers.title": "کیریئر",
    "careers.subtitle": "ہم عملی تعمیر کاروں کی خدمات حاصل کرتے ہیں جو ابہام میں ترقی کرتے ہیں اور قابل پیمائش نتائج حاصل کرتے ہیں۔",
    "careers.apply": "درخواست دیں",
    
    // Contact - Urdu
    "contact.title": "رابطہ",
    "contact.subtitle": "ہمیں اپنے اہداف کے بارے میں بتائیں۔ ہم ایک کاروباری دن کے اندر جواب دیں گے۔",
    "contact.firstName": "پہلا نام",
    "contact.lastName": "آخری نام",
    "contact.email": "کام کی ای میل",
    "contact.company": "کمپنی",
    "contact.message": "ہم کیسے مدد کر سکتے ہیں؟",
    "contact.submit": "مشاورت کی درخواست کریں",
    "contact.noSpam": "کوئی سپیم نہیں۔ کسی بھی وقت منسوخ کریں۔",
    "contact.info": "ای میل: info@nextgensystems.com • پیر–جمعہ 9:00–18:00",
    
    // Footer - Urdu
    "footer.tagline": "سبسکرپشنز اور ویلیو پر مبنی فیس ماڈلز کے ساتھ حکمت عملی، آپریشنز اور ٹیکنالوجی کنسلٹنگ۔",
    "footer.company": "کمپنی",
    "footer.expertise": "مہارت",
    "footer.legal": "قانونی",
    "footer.privacy": "رازداری",
    "footer.terms": "شرائط",
    "footer.rights": "تمام حقوق محفوظ ہیں۔",
    "footer.category": "زمرہ: 7020 – بزنس اور مینجمنٹ کنسلٹنگ",
  },
};
