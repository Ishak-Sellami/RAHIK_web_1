import { useI18n } from "@/lib/i18n";
import type { BadgeKey } from "@/lib/catalog";
import { cn } from "@/lib/utils";

const BADGE_STYLES: Record<BadgeKey, string> = {
  original: "border-primary/40 bg-primary/8 text-primary",
  ordinary: "border-border bg-muted text-muted-foreground",
  fois2: "border-primary/30 bg-accent text-accent-foreground",
  fois3: "border-primary/30 bg-accent text-accent-foreground",
};

export function PerfumeBadges({ badges }: { badges: BadgeKey[] }) {
  const { t } = useI18n();

  if (badges.length === 0) return null;

  return (
    <ul className="flex flex-wrap justify-center gap-1.5">
      {badges.map((badge) => (
        <li
          key={badge}
          className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.6rem] font-light tracking-[0.14em] transition-colors",
            BADGE_STYLES[badge],
          )}
        >
          {t(`badge.${badge}`)}
        </li>
      ))}
    </ul>
  );
}
