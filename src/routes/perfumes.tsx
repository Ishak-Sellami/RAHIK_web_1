import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, PlaceholderCard } from "@/components/SiteLayout";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/perfumes")({
  head: () => ({
    meta: [
      { title: "Perfumes — RAHIQ Parfums | رحيق" },
      {
        name: "description",
        content: "The RAHIQ Parfums fragrance collection: limited, carefully curated perfumes.",
      },
      { property: "og:title", content: "Perfumes — RAHIQ Parfums | رحيق" },
      {
        property: "og:description",
        content: "The RAHIQ Parfums fragrance collection: limited, carefully curated perfumes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PerfumesPage,
});

function PerfumesPage() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <SiteLayout>
      <PageIntro title={t("perfumes.title")} text={t("perfumes.intro")} />
      <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7">
          {items.map((i) => (
            <PlaceholderCard
              key={i}
              label={`${t("perfumes.item")} ${i}`}
              description={t("perfumes.placeholder")}
              imageLabel={t("card.image")}
            />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
