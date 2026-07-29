import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ImageGallery } from "@/components/ImageGallery";
import { PriceTag } from "@/components/PriceTag";
import { useLocalized } from "@/lib/use-localized";
import { useI18n } from "@/lib/i18n";
import { findOffer } from "@/lib/catalog";

export const Route = createFileRoute("/offers/$offerId")({
  head: () => ({
    meta: [
      { title: "Offer Details — RAHIQ Parfums | رحيق" },
      {
        name: "description",
        content: "Details of a curated fragrance set from RAHIQ Parfums.",
      },
      { property: "og:title", content: "Offer Details — RAHIQ Parfums | رحيق" },
      {
        property: "og:description",
        content: "Details of a curated fragrance set from RAHIQ Parfums.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: ({ params }) => {
    const offer = findOffer(params.offerId);
    if (!offer) {
      throw notFound();
    }
    return { offer };
  },
  component: OfferDetailsPage,
});

function OfferDetailsPage() {
  const { offer } = Route.useRouteContext();
  const localize = useLocalized();
  const { t } = useI18n();

  const name = localize(offer.name);
  const description = localize(offer.description);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 pt-10 pb-6 sm:pt-16">
        <Link
          to="/offers"
          className="text-[0.62rem] font-light tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
        >
          {t("offerDetails.backToOffers")}
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-10">
        <ImageGallery images={offer.images} alt={name} />
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-10 text-center">
        <h1 className="text-2xl font-extralight tracking-[0.2em] text-foreground sm:text-3xl">
          {name}
        </h1>
        <span className="mx-auto mt-6 block h-px w-10 bg-primary/60" aria-hidden="true" />
        <div className="mt-6">
          <PriceTag
            price={offer.price}
            oldPrice={offer.oldPrice}
            className="justify-center"
            priceClassName="text-base tracking-[0.1em]"
          />
        </div>
        <p className="mx-auto mt-6 max-w-md text-sm font-light leading-loose text-muted-foreground">
          {description}
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-12">
        <div className="rounded-xl border border-primary/25 bg-card p-7 shadow-[0_1px_24px_-18px_oklch(0.218_0_0/0.6)] sm:p-9">
          <h2 className="text-center text-[0.68rem] font-light tracking-[0.22em] text-muted-foreground">
            {t("offerDetails.included")}
          </h2>
          <span className="mx-auto mt-5 block h-px w-8 bg-primary/40" aria-hidden="true" />
          <ul className="mt-6 space-y-3.5">
            {offer.includes.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-[0.78rem] font-light text-card-foreground"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                {localize(item)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-8 text-center text-[0.68rem] font-light tracking-[0.22em] text-muted-foreground">
          {t("offerDetails.perfumes")}
        </h2>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-8">
          {offer.perfumes.map((perfume, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-lg border border-primary/25 bg-card shadow-[0_1px_24px_-18px_oklch(0.218_0_0/0.6)] transition-all duration-500 hover:border-primary/60 hover:shadow-[0_10px_40px_-26px_oklch(0.218_0_0/0.7)]"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={perfume.image}
                  alt={localize(perfume.name)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-5 pb-6 pt-5 text-center">
                <h3 className="text-[0.82rem] font-light tracking-[0.16em] text-card-foreground">
                  {localize(perfume.name)}
                </h3>
                <span className="mx-auto mt-4 block h-px w-8 bg-primary/40" aria-hidden="true" />
                <p className="mt-4 text-[0.72rem] font-light leading-relaxed text-muted-foreground">
                  {localize(perfume.description)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24 sm:pb-32">
        <h2 className="mb-6 text-center text-[0.68rem] font-light tracking-[0.22em] text-muted-foreground">
          {t("offerDetails.orderForm")}
        </h2>
        <div className="flex min-h-[12rem] items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-6 py-10 text-center">
          <p className="text-[0.72rem] font-light leading-loose text-muted-foreground">
            {t("offerDetails.orderFormPlaceholder")}
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
