import { useI18n } from "@/lib/i18n";
import { formatPrice } from "@/lib/currency";
import { cn } from "@/lib/utils";

/**
 * Displays a price, optionally with a struck-through old price beside it.
 */
export function PriceTag({
  price,
  oldPrice,
  className,
  priceClassName,
}: {
  price: number;
  oldPrice?: number;
  className?: string;
  priceClassName?: string;
}) {
  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span className={cn("text-sm font-light tracking-wide text-foreground", priceClassName)}>
        {formatPrice(price)}
      </span>
      {oldPrice != null && oldPrice > price && (
        <span className="text-[0.72rem] font-light text-muted-foreground line-through">
          {formatPrice(oldPrice)}
        </span>
      )}
    </div>
  );
}
