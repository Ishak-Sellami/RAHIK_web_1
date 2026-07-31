import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ImageGallery } from "@/components/ImageGallery";
import { PriceTag } from "@/components/PriceTag";
import { OrderForm } from "@/components/OrderForm";
import { useLocalized } from "@/lib/use-localized";
import { useI18n } from "@/lib/i18n";
import { useAdmin, effectivePrice, oldPrice, type AdminOffer } from "@/lib/admin-store";

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
  beforeLoad: ({ params, context }) => {
    void context;
    void params;
  },
  component: OfferDetailsPage,
});

function OfferDetailsPage() {
  const { offerId } = Route.useParams();
  const { state } = useAdmin();
  const localize = useLocalized();
  const { t } = useI18n();

  const offer = state.offers.find((o) => o.id === offerId);
  if (!offer) {
    throw notFound();
  }

  return <OfferDetailsContent offer={offer} localize={localize} t={t} />;
}

function OfferDetailsContent({
  offer,
  localize,
  t,
}: {
  offer: AdminOffer;
  localize: (v: { ar: string; en: string }) => string;
  t: (k: string) => string;
}) {
  const name = localize(offer.name);
  const description = localize(offer.description);
  const price = effectivePrice(offer);
  const oldP = oldPrice(offer);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 pt-10 pb-6 sm:pt-16">
        <Link
          to="/offers"
          className="text-xs font-normal tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
        >
          {t("offerDetails.backToOffers")}
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-10">
        <ImageGallery images={offer.images} alt={name} />
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-10 text-center">
        <h1 className="text-3xl font-bold tracking-[0.1em] text-foreground sm:text-5xl">
          {name}
        </h1>
        <span className="mx-auto mt-6 block h-px w-12 bg-primary/60" aria-hidden="true" />
        <div className="mt-6">
          <PriceTag
            price={price}
            oldPrice={oldP}
            className="justify-center"
            priceClassName="text-2xl font-bold tracking-[0.06em]"
          />
        </div>
        <p className="mx-auto mt-6 max-w-md text-lg font-normal leading-relaxed text-muted-foreground">
          {description}
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-12">
        <div className="rounded-2xl border border-primary/20 bg-card p-7 shadow-[0_2px_24px_-18px_oklch(0.145_0_0/0.5)] sm:p-9">
          <h2 className="text-center text-base font-bold tracking-[0.14em] text-muted-foreground">
            {t("offerDetails.included")}
          </h2>
          <span className="mx-auto mt-5 block h-px w-10 bg-primary/50" aria-hidden="true" />
          <ul className="mt-6 space-y-4">
            {offer.includes.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-base font-normal text-card-foreground"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
                {localize(item)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-8 text-center text-base font-bold tracking-[0.14em] text-muted-foreground">
          {t("offerDetails.perfumes")}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-7">
          {offer.perfumes.map((perfume, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-[0_2px_24px_-18px_oklch(0.145_0_0/0.5)] transition-all duration-500 hover:border-primary/50 hover:shadow-[0_10px_40px_-26px_oklch(0.145_0_0/0.6)]"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={perfume.image}
                  alt={localize(perfume.name)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-5 pb-6 pt-5 text-center">
                <h3 className="text-lg font-bold tracking-[0.08em] text-card-foreground">
                  {localize(perfume.name)}
                </h3>
                <span className="mx-auto mt-3 block h-px w-8 bg-primary/40" aria-hidden="true" />
                <p className="mt-3 text-sm font-normal leading-relaxed text-muted-foreground">
                  {localize(perfume.description)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Order Form (Phase 4) ─── */}
      <section className="mx-auto max-w-2xl px-6 pb-24 sm:pb-32">
        <h2 className="mb-8 text-center text-base font-bold tracking-[0.14em] text-muted-foreground">
          {t("offerDetails.orderForm")}
        </h2>
        <OrderForm offer={offer} />
      </section>
    </SiteLayout>
  );
}
