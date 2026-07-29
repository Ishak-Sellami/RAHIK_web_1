import logoAsset from "@/assets/rahiq-logo.png.asset.json";
import { BRAND_NAME } from "@/lib/i18n";

export function BrandLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt={BRAND_NAME}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}

/**
 * The official brand name. Always rendered exactly as provided, on one line,
 * with a single shared type size for both scripts.
 */
export function BrandName({ className = "" }: { className?: string }) {
  return (
    <span
      dir="ltr"
      className={`whitespace-nowrap font-light tracking-[0.18em] text-foreground ${className}`}
    >
      {BRAND_NAME}
    </span>
  );
}
