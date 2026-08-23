import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Polaroid } from "@/components/polaroid";
import { ShopPhoto } from "@/lib/shop-photo";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [{ title: "The Classic Plain · Lil Ron's Pizza" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <SiteShell>
      <article className="px-5 py-10 sm:px-8 sm:py-14">
        <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-tomato">
          The family menu · short on purpose
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          The Classic Plain
        </h1>
        <p className="mt-3 max-w-xl text-lg font-semibold text-ink-soft">
          Grandma's crushed tomato. Low-moisture mozzarella. A little leopard
          char. The pie this family would eat standing up in a parking lot.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <figure className="photo-frame rounded-lg p-2.5">
            <ShopPhoto
              name="oven.jpg"
              alt="A cheese pizza coming out of a glowing deck oven"
              className="aspect-3/2 w-full rounded-md object-cover"
            />
          </figure>
          <figure className="photo-frame rounded-lg p-2.5">
            <ShopPhoto
              name="slice-fold.jpg"
              alt="Folded New York slice"
              className="aspect-3/2 w-full rounded-md object-cover"
            />
          </figure>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="bevel-card rounded-lg p-5">
            <p className="font-display text-2xl text-tomato">A slice</p>
            <p className="mt-2 font-semibold text-ink-soft">
              One triangle. Extra hot if you ask. Folded whether you like it
              or not — that's how we were raised.
            </p>
            <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.16em] text-ink-faint">
              Price later · leave a name now
            </p>
          </div>
          <div className="bevel-card rounded-lg p-5">
            <p className="font-display text-2xl text-tomato">A whole pie</p>
            <p className="mt-2 font-semibold text-ink-soft">
              Classic plain, cut in eights. Feeds the house, the neighbors,
              and whoever followed the smell up the walk.
            </p>
            <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.16em] text-ink-faint">
              Price later · leave a name now
            </p>
          </div>
        </div>

        <div className="mt-10 grid items-center gap-6 rounded-lg border border-dashed border-ink/20 bg-cream-dark/50 p-5 md:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="font-display text-xl text-ink">Coming later</p>
            <p className="mt-2 font-semibold text-ink-soft">
              A pepperoni that actually cups. Maybe a white pie if Grandma
              is in a mood. The list stays short until the plain is
              undeniable. We are not adding a smoothie.
            </p>
          </div>
          <Polaroid caption="Don't lose the card." tilt="1.5deg">
            <ShopPhoto
              name="recipe.jpg"
              alt="Handwritten family recipe card"
              className="aspect-4/3 w-full object-cover"
            />
          </Polaroid>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/order"
            className="gloss-btn inline-flex min-h-12 items-center rounded-pill px-6 py-3 font-extrabold no-underline"
          >
            Put a slice or pie on the list
          </Link>
          <Link
            to="/"
            className="gloss-btn gloss-btn-ghost inline-flex min-h-12 items-center rounded-pill px-6 py-3 font-extrabold no-underline"
          >
            Back home
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}
