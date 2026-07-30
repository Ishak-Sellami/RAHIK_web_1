import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BrandLogo, BrandName } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

export const NAV_ITEMS = [
  { to: "/", key: "nav.home" },
  { to: "/perfumes", key: "nav.perfumes" },
  { to: "/offers", key: "nav.offers" },
  { to: "/discounts", key: "nav.discounts" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function SiteHeader({ revealLogoOnScroll = false }: { revealLogoOnScroll?: boolean }) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(!revealLogoOnScroll);

  useEffect(() => {
    if (!revealLogoOnScroll) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealLogoOnScroll]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <BrandLogo
            className={`w-auto transition-all duration-500 ease-out ${
              scrolled ? "h-8 opacity-100 sm:h-9" : "h-8 opacity-0 sm:h-9"
            }`}
          />
          <BrandName className="text-xs sm:text-sm" />
        </Link>
        <LanguageSwitcher />
      </div>

      <nav className="border-t border-border/50">
        <ul className="mx-auto flex max-w-5xl items-center gap-8 overflow-x-auto px-5 py-3 sm:justify-center sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="shrink-0">
              <Link
                to={item.to}
                className="text-xs font-normal tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground sm:text-[0.82rem]"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
