import logoAsset from "@/assets/rahiq-logo.png.asset.json";
import { useAdmin } from "@/lib/admin-store";

export function BrandLogo({ className = "h-10 w-auto" }: { className?: string }) {
  const { state } = useAdmin();
  const src = state.brand.logoUrl || logoAsset.url;

  return (
    <img
      src={src}
      alt={state.brand.brandName}
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
  const { state } = useAdmin();

  return (
    <span
      dir="ltr"
      className={`whitespace-nowrap font-normal tracking-[0.14em] text-foreground ${className}`}
    >
      {state.brand.brandName}
    </span>
  );
}
