import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type React from "react";

export type Language = "ar" | "en";

export const STORAGE_KEY = "rahiq-lang";

/** The official brand name — the only bilingual text on the website. */
export const BRAND_NAME = "RAHIQ Parfums | رحيق";

type Dict = Record<string, string>;

/**
 * Manual translations only — no automatic translation.
 * Strict language isolation: the Arabic dictionary contains no inline English.
 */
const translations: Record<Language, Dict> = {
  ar: {
    "nav.home": "الرئيسية",
    "nav.perfumes": "العطور",
    "nav.offers": "العروض",
    "nav.discounts": "التخفيضات",
    "nav.contact": "تواصل",
    "lang.switch": "English",
    "lang.label": "اللغة",

    "home.intro":
      "دار عطور جزائرية تختار القليل وتقدّمه بعناية. تشكيلات محدودة، روائح صافية، وتجربة هادئة تليق بالذوق الرفيع.",
    "home.card.perfumes.title": "العطور",
    "home.card.perfumes.text": "تشكيلة مختارة من العطور الفاخرة.",
    "home.card.offers.title": "العروض",
    "home.card.offers.text": "باقات محدودة تجمع أجمل الاختيارات.",
    "home.card.discounts.title": "التخفيضات",
    "home.card.discounts.text": "اختيارات مميزة بأسعار خاصة.",
    "home.card.action": "اكتشف",

    "perfumes.title": "العطور",
    "perfumes.intro": "تشكيلة العطور قيد التحضير، وستظهر هنا قريبًا.",
    "perfumes.item": "عطر",
    "perfumes.placeholder": "وصف مختصر للعطر يُضاف لاحقًا.",

    "offers.title": "العروض",
    "offers.intro": "باقات وعروض مختارة، ستُضاف تفاصيلها لاحقًا.",
    "offers.item": "عرض",
    "offers.placeholder": "وصف مختصر للعرض يُضاف لاحقًا.",

    "discounts.title": "التخفيضات",
    "discounts.intro": "الاختيارات المخفّضة ستُعرض هنا لاحقًا.",
    "discounts.item": "تخفيض",
    "discounts.placeholder": "وصف مختصر للتخفيض يُضاف لاحقًا.",

    "card.image": "صورة",
    "card.soon": "قريبًا",

    "contact.title": "تواصل",
    "contact.intro": "نسعد بتواصلكم عبر القنوات الرسمية للدار.",
    "contact.instagram": "إنستغرام",
    "contact.whatsapp": "واتساب",
    "contact.telegram": "تيليغرام",
    "contact.facebook": "فيسبوك",
    "contact.tiktok": "تيك توك",
    "contact.email": "البريد الإلكتروني",

    "footer.rights": "جميع الحقوق محفوظة",
  },
  en: {
    "nav.home": "Home",
    "nav.perfumes": "Perfumes",
    "nav.offers": "Offers",
    "nav.discounts": "Discounts",
    "nav.contact": "Contact",
    "lang.switch": "العربية",
    "lang.label": "Language",

    "home.intro":
      "An Algerian perfume house that chooses few and presents them with care. Limited collections, clear compositions, and a calm experience.",
    "home.card.perfumes.title": "Perfumes",
    "home.card.perfumes.text": "A curated selection of refined fragrances.",
    "home.card.offers.title": "Offers",
    "home.card.offers.text": "Limited sets bringing together our finest picks.",
    "home.card.discounts.title": "Discounts",
    "home.card.discounts.text": "Selected pieces at special prices.",
    "home.card.action": "Discover",

    "perfumes.title": "Perfumes",
    "perfumes.intro": "The fragrance collection is being prepared and will appear here soon.",
    "perfumes.item": "Perfume",
    "perfumes.placeholder": "A short fragrance description will be added later.",

    "offers.title": "Offers",
    "offers.intro": "Curated sets and offers; details will be added later.",
    "offers.item": "Offer",
    "offers.placeholder": "A short offer description will be added later.",

    "discounts.title": "Discounts",
    "discounts.intro": "Discounted selections will be presented here later.",
    "discounts.item": "Discount",
    "discounts.placeholder": "A short discount description will be added later.",

    "card.image": "Image",
    "card.soon": "Soon",

    "contact.title": "Contact",
    "contact.intro": "We welcome your messages through the official channels of the house.",
    "contact.instagram": "Instagram",
    "contact.whatsapp": "WhatsApp",
    "contact.telegram": "Telegram",
    "contact.facebook": "Facebook",
    "contact.tiktok": "TikTok",
    "contact.email": "Email",

    "footer.rights": "All Rights Reserved",
  },
};

type I18nValue = {
  lang: Language;
  dir: "rtl" | "ltr";
  t: (key: string) => string;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

// Keep a single context instance across dev hot-reloads so consumers rendered by
// a not-yet-refreshed provider never see a null context.
const globalScope = globalThis as typeof globalThis & {
  __rahiqI18nContext?: React.Context<I18nValue | null>;
};
const I18nContext =
  globalScope.__rahiqI18nContext ??
  (globalScope.__rahiqI18nContext = createContext<I18nValue | null>(null));

// Safe default (Arabic) used if a consumer renders outside the provider.
const fallbackValue: I18nValue = {
  lang: "ar",
  dir: "rtl",
  t: (key: string) => translations.ar[key] ?? key,
  setLang: () => {},
  toggleLang: () => {},
};

export function I18nProvider({ children }: { children: ReactNode }) {
  // Arabic is the default language on first visit.
  const [lang, setLangState] = useState<Language>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") setLangState(stored);
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      dir,
      t: (key: string) => translations[lang][key] ?? key,
      setLang,
      toggleLang: () => setLang(lang === "ar" ? "en" : "ar"),
    }),
    [lang, dir, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  return ctx ?? fallbackValue;
}
