export function HandTally({ value }: { value: number }) {
  const n = Math.max(0, value);
  return (
    <div className="tally-pad inline-flex items-center gap-3 px-3 py-2">
      <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-ink-faint">
        Names on the pad
      </span>
      <span className="font-note text-3xl leading-none text-tomato-dark">
        {n}
      </span>
    </div>
  );
}
