import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandLogo, BrandName } from "@/components/BrandLogo";
import { SiteLayout } from "@/components/SiteLayout";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RAHIQ Parfums | رحيق — Luxury Algerian Perfume House" },
      {
        name: "description",
        content:
          "RAHIQ Parfums — an Algerian luxury perfume house presenting limited fragrance collections, curated offers and selected discounts.",
      },
      { property: "og:title", content: "RAHIQ Parfums | رحيق — Luxury Algerian Perfume House" },
      {
        property: "og:description",
        content: "Limited fragrance collections from an Algerian luxury perfume house.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();

  const cards = [
    { to: "/perfumes", title: t("home.card.perfumes.title"), text: t("home.card.perfumes.text") },
    { to: "/offers", title: t("home.card.offers.title"), text: t("home.card.offers.text") },
    {
      to: "/discounts",
      title: t("home.card.discounts.title"),
      text: t("home.card.discounts.text"),
    },
  ] as const;

  return (
    <SiteLayout revealLogoOnScroll>
      <section className="mx-auto max-w-2xl px-6 pt-16 pb-14 text-center sm:pt-24">
        <BrandLogo className="fade-in-up mx-auto h-28 w-auto sm:h-36" />
        <div className="mt-8">
          <BrandName className="text-[0.8rem] sm:text-sm" />
        </div>
        <span className="mx-auto mt-9 block h-px w-10 bg-primary/60" aria-hidden="true" />
        <p className="mx-auto mt-9 max-w-md text-sm font-light leading-loose text-muted-foreground">
          {t("home.intro")}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-7">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group flex min-h-[19rem] flex-col justify-between rounded-lg border border-primary/30 bg-card p-8 text-center shadow-[0_1px_28px_-20px_oklch(0.218_0_0/0.65)] transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/70 hover:shadow-[0_14px_44px_-28px_oklch(0.218_0_0/0.7)] sm:min-h-[22rem]"
            >
              <div className="pt-8">
                <h2 className="text-base font-extralight tracking-[0.28em] text-card-foreground">
                  {card.title}
                </h2>
                <span
                  className="mx-auto mt-6 block h-px w-8 bg-primary/50 transition-all duration-500 group-hover:w-14"
                  aria-hidden="true"
                />
                <p className="mt-6 text-[0.78rem] font-light leading-loose text-muted-foreground">
                  {card.text}
                </p>
              </div>
              <span className="pb-2 text-[0.62rem] font-light tracking-[0.3em] text-primary">
                {t("home.card.action")}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
