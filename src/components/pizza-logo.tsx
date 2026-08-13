import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function PizzaLogo({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-2.5 no-underline text-ink",
        className,
      )}
    >
      <span
        aria-hidden
        className="relative grid size-11 shrink-0 place-items-center rounded-[12px] bg-linear-to-b from-tomato-mid to-tomato-dark shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_3px_0_var(--color-tomato-deep)]"
      >
        <svg viewBox="0 0 48 48" className="size-8">
          <path
            d="M8 38 L24 8 L40 38 Z"
            fill="#f4c56a"
            stroke="#2a160e"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M13 36.5 L24 14.5 L35 36.5 Z" fill="#c51f2a" />
          <circle cx="21" cy="28" r="2.1" fill="#f4c56a" />
          <circle cx="27" cy="31" r="1.7" fill="#f4c56a" />
          <circle cx="24" cy="23.5" r="1.5" fill="#f4c56a" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] tracking-tight text-tomato drop-shadow-[0_1px_0_rgba(255,255,255,0.65)]">
          Lil Ron's
        </span>
        {!compact ? (
          <span className="mt-0.5 block text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-ink-faint">
            Pizza · Seattle
          </span>
        ) : null}
      </span>
    </Link>
  );
}
