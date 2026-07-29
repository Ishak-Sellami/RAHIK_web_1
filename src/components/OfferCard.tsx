import { Link } from "@tanstack/react-router";
import type { Offer } from "@/lib/catalog";
import { useLocalized } from "@/lib/use-localized";
import { PriceTag } from "@/components/PriceTag";
import { cn } from "@/lib/utils";

/**
 * A clickable offer/discount card: image, name, short description, and price.
 * The whole card links to the Offer Details page.
 * For discounts, an oldPrice is shown struck-through and a countdown
 * placeholder slot is rendered below the price.
 */
export function OfferCard({
  offer,
  withCountdown = false,
}: {
  offer: Offer;
  withCountdown?: boolean;
}) {
  const localize = useLocalized();
  const name = localize(offer.name);
  const description = localize(offer.description);
  const offerId = offer.id.replace(/-promo$/, "");

  return (
    <Link
      to="/offers/$offerId"
      params={{ offerId }}
      className="group flex flex-col overflow-hidden rounded-lg border border-primary/25 bg-card shadow-[0_1px_24px_-18px_oklch(0.218_0_0/0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_10px_40px_-26px_oklch(0.218_0_0/0.7)]"
    >
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={offer.images[0]}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-5 text-center">
        <h2 className="text-[0.85rem] font-light tracking-[0.16em] text-card-foreground">
          {name}
        </h2>

        <span
          className={cn(
            "mx-auto mt-4 block h-px w-8 bg-primary/40 transition-all duration-500 group-hover:w-14",
          )}
          aria-hidden="true"
        />

        <p className="mt-4 flex-1 text-[0.74rem] font-light leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-5">
          <PriceTag price={offer.price} oldPrice={offer.oldPrice} className="justify-center" />
        </div>

        {withCountdown && (
          <div className="mt-4 rounded-md border border-dashed border-border/80 bg-muted/40 px-3 py-2.5">
            <span className="block text-[0.58rem] font-light tracking-[0.2em] text-muted-foreground">
              00 : 00 : 00
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
