import { useI18n } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { toggleLang, t } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t("lang.label")}
      className="inline-flex min-h-9 shrink-0 items-center rounded-sm border border-border px-3 text-[0.65rem] font-light tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
    >
      {t("lang.switch")}
    </button>
  );
}
