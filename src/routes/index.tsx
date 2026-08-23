import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { HandTally } from "@/components/hand-tally";
import { Polaroid } from "@/components/polaroid";
import { countPreorders } from "@/lib/preorders";
import { ShopPhoto } from "@/lib/shop-photo";

export const Route = createFileRoute("/")({
  loader: () => countPreorders(),
  component: Home,
});

function Home() {
  const names = Route.useLoaderData();

  return (
    <SiteShell>
      <section className="relative px-5 pb-10 pt-8 sm:px-8 sm:pt-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-tomato">
              A family slice shop · Northeast Seattle
            </p>
            <h1 className="mt-3 max-w-xl font-display text-[2.6rem] leading-[0.95] text-ink sm:text-6xl">
              Thin crust.
              <br />
              Thick accent.
            </h1>
            <p className="mt-4 max-w-lg text-lg font-semibold text-ink-soft">
              Lil Ron's is the family pie — Big Ron's dough, Grandma's sauce,
              the same classic plain they folded in Jersey. Coming soon to
              Northeast Seattle. Slices or whole pies. You leave a name. You
              pick up a box.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/order"
                className="gloss-btn inline-flex min-h-12 items-center rounded-pill px-6 py-3 text-base font-extrabold no-underline"
              >
                Put your name down
              </Link>
              <Link
                to="/story"
                className="gloss-btn gloss-btn-ghost inline-flex min-h-12 items-center rounded-pill px-6 py-3 text-base font-extrabold no-underline"
              >
                Meet the family
              </Link>
            </div>
            <div className="mt-6">
              <HandTally value={names} />
            </div>
          </div>
          <div className="order-first mx-auto sm:order-none sm:mx-0">
            <div className="window-sign">
              <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-tomato">
                Northeast Seattle
              </p>
              <p className="font-note mt-1 text-[1.85rem] leading-none text-ink">
                Opening soon
              </p>
              <p className="mt-2 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-ink-faint">
                Leave a name
              </p>
            </div>
          </div>
        </div>

        <figure className="photo-frame mt-8 rounded-lg p-2.5 sm:p-3">
          <ShopPhoto
            name="pie-hero.jpg"
            alt="A classic New York cheese pizza on a metal peel, leopard-spotted crust and melted mozzarella"
            className="aspect-4/3 w-full rounded-md object-cover"
          />
        </figure>
        <p className="font-note mt-3 text-center text-xl text-ink-soft">
          Same pie Grandpa taught standing on a milk crate.
        </p>
      </section>

      <section className="grid gap-3 px-5 pb-10 sm:grid-cols-3 sm:px-8">
        <Feature
          kicker="The fold"
          title="NY / NJ style"
          copy="Thin enough to fold, sturdy enough for a Seattle drizzle. No fork. That's how the family eats it."
        />
        <Feature
          kicker="The menu"
          title="Classic plain"
          copy="Grandma's crushed tomato, low-moisture mozzarella, a little char. We start with the one that matters."
        />
        <Feature
          kicker="The deal"
          title="Leave a name"
          copy="No app. No QR. Limited hours. You write it down, we call when the oven's hot, you walk out with a box."
        />
      </section>

      <section className="grid items-center gap-8 border-t border-ink/10 bg-cream-dark/40 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <Polaroid caption="The family, Jersey kitchen, sometime in the '90s." tilt="-2deg">
          <ShopPhoto
            name="family.jpg"
            alt="Three generations of the family around a cheese pizza in a warm pizzeria kitchen"
            className="aspect-4/3 w-full object-cover"
          />
        </Polaroid>
        <div>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-tomato">
            Three generations
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Named after Lil Ron. Run by the whole crew.
          </h2>
          <p className="mt-3 font-semibold text-ink-soft">
            Big Ron had the slice window. Grandma had the sauce. Lil Ron
            packed the recipe west so Seattle could have an honest fold.
            Kids on the stool. Cousins on the counter. Nobody here is
            building an app.
          </p>
          <Link
            to="/story"
            className="mt-4 inline-block font-extrabold text-tomato no-underline hover:underline"
          >
            Read the family story →
          </Link>
        </div>
      </section>

      <section className="grid items-center gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-tomato">
            The only pie on purpose
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            One classic. The way we learned it.
          </h2>
          <p className="mt-3 font-semibold text-ink-soft">
            If this family only does one thing in this town, it's the plain
            slice we grew up folding on a paper plate. More pies later —
            when Grandma says so.
          </p>
          <Link
            to="/menu"
            className="gloss-btn gloss-btn-basil mt-5 inline-flex min-h-12 items-center rounded-pill px-5 py-3 text-sm font-extrabold no-underline"
          >
            See the pie
          </Link>
        </div>
        <figure className="photo-frame rounded-lg p-2.5">
          <ShopPhoto
            name="slice-fold.jpg"
            alt="A New York slice folded in a hand over a paper plate"
            className="aspect-4/3 w-full rounded-md object-cover"
          />
        </figure>
      </section>

      <section className="px-5 pb-10 sm:px-8">
        <aside className="paper-note mx-auto max-w-xl px-5 py-4">
          <p className="font-note text-2xl leading-snug text-ink">
            A cousin put this on the computer because none of us wanted to
            learn it. If you need us, leave a name. We still prefer the
            phone — once we have one on the wall.
          </p>
          <p className="mt-2 text-right font-note text-xl text-ink-soft">
            — the family
          </p>
        </aside>
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
            purpose. Leave a name, pick up, walk home in the drizzle.
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
