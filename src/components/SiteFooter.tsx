import { BrandName } from "@/components/BrandLogo";
import { useI18n } from "@/lib/i18n";
import { useSocialLinks } from "@/lib/social";

export function SiteFooter() {
  const { t } = useI18n();
  const socialLinks = useSocialLinks();

  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <BrandName className="text-[0.8rem]" />

        <span className="mx-auto mt-8 block h-px w-10 bg-primary/60" aria-hidden="true" />

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          {socialLinks.map(({ key, href, Icon }) => (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.72rem] font-light tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-[0.65rem] font-light tracking-[0.22em] text-muted-foreground">
          2026 RAHIQ Parfums — {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
