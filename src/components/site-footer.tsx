import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink px-5 py-10 text-cream">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-gold">Lil Ron's</p>
          <p className="mt-1 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-cream/50">
            Pizza · Seattle
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
            Thin crust. Thick accent. A Jersey pie landing in Northeast Seattle
            — slices, whole pies, pre-order pickup only.
          </p>
        </div>
        <div>
          <p className="font-display text-gold">The shop</p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link to="/menu" className="text-cream/80 no-underline hover:text-cream">
                The Classic Plain
              </Link>
            </li>
            <li>
              <Link to="/story" className="text-cream/80 no-underline hover:text-cream">
                Why Ron left the Turnpike
              </Link>
            </li>
            <li>
              <Link to="/order" className="text-cream/80 no-underline hover:text-cream">
                Pre-order pickup
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-gold">Fine print</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Hours are limited and a little chaotic. Address drops with the
            first pies. Instagram is coming, like everything else.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-cream/45">
            Best viewed at any size, folded once
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-5xl text-center text-xs text-cream/45">
        © {new Date().getFullYear()} Lil Ron's Pizza. Fold responsibly.
        No deep dish. No pineapple negotiations before coffee.
      </p>
    </footer>
  );
}
