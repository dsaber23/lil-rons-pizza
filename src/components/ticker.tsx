const ITEMS = [
  "A family pie · Northeast Seattle",
  "Big Ron's dough. Lil Ron's oven.",
  "Three generations. One classic plain.",
  "No app. No QR. Leave your name.",
  "Slices or whole pies · pickup only",
  "Thin crust. Thick accent.",
  "The cousin typed this. We still prefer the phone.",
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
