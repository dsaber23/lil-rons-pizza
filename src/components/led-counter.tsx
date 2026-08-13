export function LedCounter({ value }: { value: number }) {
  const digits = String(Math.max(0, value)).padStart(4, "0").slice(-4);
  return (
    <div className="inline-flex items-center gap-3">
      <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-ink-faint">
        Pre-orders so far
      </span>
      <span className="led-well inline-flex items-center rounded-sm px-2.5 py-1 font-display text-xl tracking-[0.18em]">
        {digits}
      </span>
    </div>
  );
}
