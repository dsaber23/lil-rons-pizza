import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink px-5 py-10 text-cream">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-gold">Lil Ron's</p>
          <p className="mt-1 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-cream/50">
            A family pie · Seattle
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
            Three generations. One classic plain. A Jersey kitchen that packed
            up and moved west. We don't do apps, QR codes, or delivery guys.
            You leave a name. You pick up a box.
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
                Big Ron, Lil Ron, the rest of us
              </Link>
            </li>
            <li>
              <Link to="/order" className="text-cream/80 no-underline hover:text-cream">
                Put your name on the list
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-gold">How to reach us</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Phone number and address drop with the first pies. Until then,
            write your name on the list. A cousin typed this website. If it
            acts up, that's on him.
          </p>
          <p className="mt-4 font-note text-xl text-gold-light">
            No DoorDash. No Instagram. Fold it yourself.
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-5xl text-center text-xs text-cream/45">
        © {new Date().getFullYear()} The family behind Lil Ron's. Recipe older
        than the website.{" "}
        <Link to="/login" className="text-cream/35 no-underline hover:text-cream/70">
          Family only
        </Link>
      </p>
    </footer>
  );
}
