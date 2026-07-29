import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function SiteLayout({
  children,
  revealLogoOnScroll = false,
}: {
  children: ReactNode;
  revealLogoOnScroll?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader revealLogoOnScroll={revealLogoOnScroll} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

/** Shared page heading for inner pages. */
export function PageIntro({ title, text }: { title: string; text: string }) {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-16 pb-10 text-center sm:pt-24 sm:pb-14">
      <h1 className="text-2xl font-extralight tracking-[0.2em] text-foreground sm:text-3xl">
        {title}
      </h1>
      <span className="mx-auto mt-6 block h-px w-10 bg-primary/60" aria-hidden="true" />
      <p className="mt-6 text-sm font-light leading-loose text-muted-foreground">{text}</p>
    </section>
  );
}

/** Placeholder product-style card used across Perfumes / Offers / Discounts. */
export function PlaceholderCard({
  label,
  description,
  imageLabel,
}: {
  label: string;
  description: string;
  imageLabel: string;
}) {
  return (
    <article className="group rounded-lg border border-primary/25 bg-card p-4 shadow-[0_1px_24px_-18px_oklch(0.218_0_0/0.6)] transition-all duration-500 hover:border-primary/60 hover:shadow-[0_10px_40px_-26px_oklch(0.218_0_0/0.7)]">
      <div className="flex aspect-[3/4] items-center justify-center rounded-md bg-muted">
        <span className="text-[0.6rem] font-light tracking-[0.28em] text-muted-foreground">
          {imageLabel}
        </span>
      </div>
      <h2 className="mt-5 text-[0.85rem] font-light tracking-[0.16em] text-card-foreground">
        {label}
      </h2>
      <p className="mt-2 text-[0.72rem] font-light leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
