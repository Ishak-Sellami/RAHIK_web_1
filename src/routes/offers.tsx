import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro } from "@/components/SiteLayout";
import { OfferCard } from "@/components/OfferCard";
import { useI18n } from "@/lib/i18n";
import { useAdmin } from "@/lib/admin-store";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers — RAHIQ Parfums | رحيق" },
      {
        name: "description",
        content: "Curated fragrance sets and limited offers from RAHIQ Parfums.",
      },
      { property: "og:title", content: "Offers — RAHIQ Parfums | رحيق" },
      {
        property: "og:description",
        content: "Curated fragrance sets and limited offers from RAHIQ Parfums.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  const { t } = useI18n();
  const { state } = useAdmin();

  return (
    <SiteLayout>
      <PageIntro title={t("offers.title")} text={t("offers.intro")} />
      <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7">
          {state.offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
