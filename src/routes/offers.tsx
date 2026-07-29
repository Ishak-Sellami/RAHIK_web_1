import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, PlaceholderCard } from "@/components/SiteLayout";
import { useI18n } from "@/lib/i18n";

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
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <SiteLayout>
      <PageIntro title={t("offers.title")} text={t("offers.intro")} />
      <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7">
          {items.map((i) => (
            <PlaceholderCard
              key={i}
              label={`${t("offers.item")} ${i}`}
              description={t("offers.placeholder")}
              imageLabel={t("card.image")}
            />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
