import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro } from "@/components/SiteLayout";
import { useI18n } from "@/lib/i18n";
import { SOCIAL_LINKS } from "@/lib/social";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RAHIQ Parfums | رحيق" },
      {
        name: "description",
        content: "Reach RAHIQ Parfums through the official channels of the house.",
      },
      { property: "og:title", content: "Contact — RAHIQ Parfums | رحيق" },
      {
        property: "og:description",
        content: "Reach RAHIQ Parfums through the official channels of the house.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();

  return (
    <SiteLayout>
      <PageIntro title={t("contact.title")} text={t("contact.intro")} />
      <section className="mx-auto max-w-xl px-6 pb-24 sm:pb-32">
        <ul className="divide-y divide-border/70 border-y border-border/70">
          {SOCIAL_LINKS.map(({ key, href, Icon }) => (
            <li key={key}>
              <a
                href={href}
                className="group flex items-center gap-4 py-5 transition-colors hover:bg-muted/50"
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
                <span className="text-[0.8rem] font-light tracking-[0.16em] text-foreground">
                  {t(key)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
