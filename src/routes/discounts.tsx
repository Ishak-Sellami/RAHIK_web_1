import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro } from "@/components/SiteLayout";
import { OfferCard } from "@/components/OfferCard";
import { useI18n } from "@/lib/i18n";
import { DISCOUNTS } from "@/lib/catalog";

export const Route = createFileRoute("/discounts")({
  head: () => ({
    meta: [
      { title: "Discounts — RAHIQ Parfums | رحيق" },
      {
        name: "description",
        content: "Selected RAHIQ Parfums fragrances offered at special prices.",
      },
      { property: "og:title", content: "Discounts — RAHIQ Parfums | رحيق" },
      {
        property: "og:description",
        content: "Selected RAHIQ Parfums fragrances offered at special prices.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DiscountsPage,
});

function DiscountsPage() {
  const { t } = useI18n();

  return (
    <SiteLayout>
      <PageIntro title={t("discounts.title")} text={t("discounts.intro")} />
      <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7">
          {DISCOUNTS.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              withCountdown
            />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
