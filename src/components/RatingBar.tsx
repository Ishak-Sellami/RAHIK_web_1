import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type RatingEntry = { key: string; value: number };

/**
 * A single elegant horizontal progress bar with a label and percentage.
 * The fill animates from 0 to its value on mount via a CSS transition.
 */
export function RatingBar({ entry, delay = 0 }: { entry: RatingEntry; delay?: number }) {
  const { t } = useI18n();

  return (
    <div className="flex items-center gap-4">
      <span className="w-16 shrink-0 text-[0.7rem] font-light tracking-[0.12em] text-muted-foreground sm:w-20">
        {t(entry.key)}
      </span>
      <div className="relative h-px flex-1 overflow-hidden bg-border/60">
        <div
          className="absolute inset-y-0 start-0 bg-primary/70 transition-[width] duration-1000 ease-out"
          style={{ width: `${entry.value}%`, transitionDelay: `${delay}ms` }}
        />
      </div>
      <span className="w-9 shrink-0 text-end text-[0.68rem] font-light tabular-nums text-foreground">
        {entry.value}%
      </span>
    </div>
  );
}

/**
 * A titled group of horizontal rating bars.
 */
export function RatingGroup({
  title,
  entries,
  titleClassName,
}: {
  title: string;
  entries: RatingEntry[];
  titleClassName?: string;
}) {
  return (
    <div className="space-y-3">
      <h3
        className={cn(
          "text-[0.68rem] font-light tracking-[0.22em] text-muted-foreground",
          titleClassName,
        )}
      >
        {title}
      </h3>
      <div className="space-y-2.5">
        {entries.map((entry, i) => (
          <RatingBar key={entry.key} entry={entry} delay={i * 80} />
        ))}
      </div>
    </div>
  );
}
