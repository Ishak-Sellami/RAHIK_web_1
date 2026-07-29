import { useState } from "react";
import type { Perfume } from "@/lib/catalog";
import { useLocalized } from "@/lib/use-localized";
import { useI18n } from "@/lib/i18n";
import { PerfumeBadges } from "@/components/PerfumeBadges";
import { RatingGroup } from "@/components/RatingBar";

/**
 * A discovery-only perfume card: image, name, availability badges, and the
 * community rating section with horizontal progress bars.
 */
export function PerfumeCard({ perfume }: { perfume: Perfume }) {
  const localize = useLocalized();
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);

  const name = localize(perfume.name);

  return (
    <article className="group overflow-hidden rounded-lg border border-primary/25 bg-card shadow-[0_1px_24px_-18px_oklch(0.218_0_0/0.6)] transition-all duration-500 hover:border-primary/60 hover:shadow-[0_10px_40px_-26px_oklch(0.218_0_0/0.7)]">
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={perfume.image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="px-5 pb-7 pt-5 text-center">
        <h2 className="text-[0.85rem] font-light tracking-[0.16em] text-card-foreground">
          {name}
        </h2>

        <div className="mt-3">
          <PerfumeBadges badges={perfume.badges} />
        </div>

        <span className="mx-auto mt-6 block h-px w-8 bg-primary/40" aria-hidden="true" />

        <div className="mt-6">
          <h3 className="text-[0.68rem] font-light tracking-[0.22em] text-muted-foreground">
            {t("rating.title")}
          </h3>

          <div className="mt-5 space-y-5 text-start">
            <RatingGroup
              title={t("rating.seasons")}
              entries={[
                { key: "rating.spring", value: perfume.ratings.seasons.spring },
                { key: "rating.summer", value: perfume.ratings.seasons.summer },
                { key: "rating.autumn", value: perfume.ratings.seasons.autumn },
                { key: "rating.winter", value: perfume.ratings.seasons.winter },
              ]}
            />
            <RatingGroup
              title={t("rating.time")}
              entries={[
                { key: "rating.day", value: perfume.ratings.time.day },
                { key: "rating.night", value: perfume.ratings.time.night },
              ]}
            />
            <RatingGroup
              title={t("rating.community")}
              entries={[{ key: "rating.community", value: perfume.ratings.community }]}
            />
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-5 text-[0.62rem] font-light tracking-[0.24em] text-primary transition-colors hover:text-primary/70"
            aria-expanded={expanded}
          >
            {t("home.card.action")}
          </button>
        </div>
      </div>
    </article>
  );
}
