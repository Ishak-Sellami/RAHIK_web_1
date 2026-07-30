import { Link } from "@tanstack/react-router";
import type { AdminOffer } from "@/lib/admin-store";
import { effectivePrice, oldPrice } from "@/lib/admin-store";
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
  offer: AdminOffer;
  withCountdown?: boolean;
}) {
  const localize = useLocalized();
  const name = localize(offer.name);
  const description = localize(offer.description);

  return (
    <Link
      to="/offers/$offerId"
      params={{ offerId: offer.id }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-[0_2px_24px_-18px_oklch(0.145_0_0/0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_40px_-26px_oklch(0.145_0_0/0.6)]"
    >
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={offer.images[0]}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-5 text-center">
        <h2 className="text-base font-normal tracking-[0.1em] text-card-foreground">
          {name}
        </h2>

        <span
          className={cn(
            "mx-auto mt-3 block h-px w-8 bg-primary/40 transition-all duration-500 group-hover:w-14",
          )}
          aria-hidden="true"
        />

        <p className="mt-3 flex-1 text-sm font-normal leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-4">
          <PriceTag
            price={effectivePrice(offer)}
            oldPrice={oldPrice(offer)}
            className="justify-center"
          />
        </div>

        {withCountdown && (
          <div className="mt-4 rounded-lg border border-dashed border-border/80 bg-muted/40 px-3 py-2.5">
            <span className="block text-xs font-normal tracking-[0.16em] text-muted-foreground">
              00 : 00 : 00
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
