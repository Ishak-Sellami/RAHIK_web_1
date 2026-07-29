import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, PlaceholderCard } from "@/components/SiteLayout";
import { useI18n } from "@/lib/i18n";

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
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <SiteLayout>
      <PageIntro title={t("discounts.title")} text={t("discounts.intro")} />
      <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7">
          {items.map((i) => (
            <PlaceholderCard
              key={i}
              label={`${t("discounts.item")} ${i}`}
              description={t("discounts.placeholder")}
              imageLabel={t("card.image")}
            />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
