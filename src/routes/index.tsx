import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { LedCounter } from "@/components/led-counter";
import { countPreorders } from "@/lib/preorders";
import { ShopPhoto } from "@/lib/shop-photo";

export const Route = createFileRoute("/")({
  loader: () => countPreorders(),
  component: Home,
});

function Home() {
  const preorders = Route.useLoaderData();

  return (
    <SiteShell>
      <section className="relative px-5 pb-10 pt-8 sm:px-8 sm:pt-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-tomato">
              A new slice shop · Northeast Seattle
            </p>
            <h1 className="mt-3 max-w-xl font-display text-[2.6rem] leading-[0.95] text-ink sm:text-6xl">
              Thin crust.
              <br />
              Thick accent.
            </h1>
            <p className="mt-4 max-w-lg text-lg font-semibold text-ink-soft">
              Lil Ron's is a NY / NJ pie landing in the Pacific Northwest.
              Classic plain. Slices or whole pies. Pre-order pickup when the oven
              is hot.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/order"
                className="gloss-btn inline-flex min-h-12 items-center rounded-pill px-6 py-3 text-base font-extrabold no-underline"
              >
                Pre-order pickup
              </Link>
              <Link
                to="/story"
                className="gloss-btn gloss-btn-ghost inline-flex min-h-12 items-center rounded-pill px-6 py-3 text-base font-extrabold no-underline"
              >
                Meet Ron
              </Link>
            </div>
            <div className="mt-6">
              <LedCounter value={preorders} />
            </div>
          </div>
          <div
            aria-hidden
            className="starburst order-first mx-auto grid size-28 shrink-0 place-items-center sm:order-none sm:mx-0 sm:size-32"
          >
            <span className="max-w-20 text-center font-display text-[0.7rem] leading-tight sm:text-xs">
              Coming Soon
            </span>
          </div>
        </div>

        <figure className="photo-frame mt-8 rounded-lg p-2.5 sm:p-3">
          <ShopPhoto
            name="pie-hero.jpg"
            alt="A classic New York cheese pizza on a metal peel, leopard-spotted crust and melted mozzarella"
            className="aspect-4/3 w-full rounded-md object-cover"
          />
        </figure>
      </section>

      <section className="grid gap-3 px-5 pb-10 sm:grid-cols-3 sm:px-8">
        <Feature
          kicker="The fold"
          title="NY / NJ style"
          copy="Thin enough to fold, sturdy enough to survive a Seattle drizzle. No fork. No therapy."
        />
        <Feature
          kicker="The menu"
          title="Classic plain"
          copy="Crushed tomato, low-moisture mozzarella, a little char. Ron is starting with the one that matters."
        />
        <Feature
          kicker="The deal"
          title="Pre-order pickup"
          copy="Limited hours. You order ahead. We email a window. You walk out with a box still ticking."
        />
      </section>

      <section className="grid items-center gap-8 border-t border-ink/10 bg-cream-dark/40 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <figure className="photo-frame rounded-lg p-2.5">
          <ShopPhoto
            name="slice-fold.jpg"
            alt="A New York slice folded in a hand over a paper plate"
            className="aspect-4/3 w-full rounded-md object-cover"
          />
        </figure>
        <div>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-tomato">
            The only pie on purpose
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            One classic. Done right.
          </h2>
          <p className="mt-3 font-semibold text-ink-soft">
            If Ron only does one thing in this town, it's the plain slice
            he grew up folding on a paper plate. More pies later — when he
            feels like it.
          </p>
          <Link
            to="/menu"
            className="gloss-btn gloss-btn-basil mt-5 inline-flex min-h-12 items-center rounded-pill px-5 py-3 text-sm font-extrabold no-underline"
          >
            See the pie
          </Link>
        </div>
      </section>

      <section className="grid items-center gap-8 px-5 py-12 sm:grid-cols-[0.9fr_1.1fr] sm:px-8">
        <ShopPhoto
          name="ron-mascot.jpg"
          alt="Illustrated mascot of Ron, a mustached pizza cook holding a folded slice"
          className="mx-auto w-56 rounded-[28px] sm:w-64"
        />
        <div>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-tomato">
            Jersey soul · PNW transplant
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Ron left the Turnpike. The cheese came with him.
          </h2>
          <p className="mt-3 font-semibold text-ink-soft">
            He moved for the mountains. He stayed because Seattle still
            deserved an honest fold. Proud of both coasts. Unreasonable about
            crust.
          </p>
          <Link
            to="/story"
            className="mt-4 inline-block font-extrabold text-tomato no-underline hover:underline"
          >
            Read the whole bit →
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <ShopPhoto
          name="porch.jpg"
          alt="A pizza box on a rainy Northeast Seattle porch at dusk"
          className="aspect-16/9 w-full object-cover sm:aspect-21/9"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="font-display text-2xl text-cream sm:text-3xl">
            Northeast Seattle.
            <br />
            Rain or shine, we fold ours.
          </p>
          <p className="mt-2 max-w-md text-sm font-semibold text-cream/80">
            Exact address drops with the first pies. Hours stay limited on
            purpose. Pre-order, pick up, walk home in the drizzle.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

function Feature({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <article className="bevel-card rounded-lg px-4 py-5">
      <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-tomato">
        {kicker}
      </p>
      <h2 className="mt-1 font-display text-xl text-ink">{title}</h2>
      <p className="mt-2 text-sm font-semibold text-ink-soft">{copy}</p>
    </article>
  );
}
