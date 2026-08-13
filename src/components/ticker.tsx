const ITEMS = [
  "Coming soon to Northeast Seattle",
  "NY / NJ thin crust",
  "Slices or whole pies",
  "Pre-order pickup only",
  "Fold it. Don't fight it.",
  "Limited hours. Unlimited opinions.",
  "Ron left the Turnpike. The cheese came with him.",
];

export function Ticker() {
  const line = ITEMS.join("   ·   ") + "   ·   ";
  return (
    <div className="overflow-hidden border-b border-ink/15 bg-gold-light text-ink">
      <div className="ticker-track flex w-max py-1.5 text-[0.72rem] font-extrabold uppercase tracking-[0.16em]">
        <span className="px-6">{line}</span>
        <span className="px-6" aria-hidden>
          {line}
        </span>
      </div>
    </div>
  );
}
