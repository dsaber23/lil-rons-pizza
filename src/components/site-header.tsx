import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PizzaLogo } from "@/components/pizza-logo";
import { AuthSlot } from "@/components/auth-slot";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "The Pie" },
  { to: "/story", label: "Ron" },
  { to: "/order", label: "Pre-Order" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="gloss-bar shine-sweep px-4 py-1.5 text-center text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-cream">
        Est. 2026 · Northeast Seattle · NY / NJ Slice
      </div>
      <div className="stage-nav flex items-center justify-between gap-3 border-b border-ink/10 px-4 py-3 sm:px-6">
        <PizzaLogo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-pill px-3.5 py-2 text-sm font-extrabold no-underline transition-colors duration-150",
                  active
                    ? "bg-tomato text-cream shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
                    : "text-ink-soft hover:bg-cream-dark hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <AuthSlot />
        </nav>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-md bg-cream-dark text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="grid gap-1 border-b border-ink/10 bg-cream px-3 py-3 md:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-extrabold no-underline text-ink hover:bg-cream-dark"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-3 py-2">
            <AuthSlot />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
