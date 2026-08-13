import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ShopPhoto } from "@/lib/shop-photo";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [{ title: "Ron's Story · Lil Ron's Pizza" }],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <SiteShell>
      <article className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <ShopPhoto
            name="ron-mascot.jpg"
            alt="Illustrated mascot of Ron holding a folded slice"
            className="mx-auto w-56 rounded-[28px] md:w-full"
          />
          <div>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-tomato">
              The guy on the box
            </p>
            <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
              Named after Ron. Run by Ron. Argued about by Ron.
            </h1>
            <p className="mt-4 text-lg font-semibold text-ink-soft">
              Lil Ron's is a Northeast Seattle slice shop from a New
              Jersey cook who moved west and never quite got over the pizza.
            </p>
          </div>
        </div>

        <div className="prose-ron mt-10 grid max-w-2xl gap-5 text-base font-semibold leading-relaxed text-ink-soft">
          <p>
            Ron grew up on the kind of pizza that requires a fold and a paper
            plate. The kind you eat standing up because sitting down would
            imply you have patience. He left the Turnpike for the mountains,
            the water, and a city that takes coffee more seriously than most
            people take their in-laws.
          </p>
          <p>
            He is a proud PNW transplant. He will talk your ear off about the
            Olympics on a clear day. He will also tell you, with love, that
            Seattle still needed an honest fold — a thin NY / NJ pie that
            doesn't need a fork, a lecture, or a seasonal squash.
          </p>
          <p>
            So he's building it. One classic plain at a time. Limited
            hours, because the oven is small and Ron is one person. Pre-order
            pickup, because he would rather make your pie right than guess
            how many people are about to walk in out of the rain.
          </p>
          <p>
            The rest of the story is still being written — recipes, the exact
            corner, the first Friday night rush. If you want in early, get on
            the list. If you want pineapple, we can talk after coffee.
          </p>
        </div>

        <figure className="photo-frame mt-10 rounded-lg p-2.5">
          <ShopPhoto
            name="porch.jpg"
            alt="Pizza box on a wet Seattle porch"
            className="aspect-16/9 w-full rounded-md object-cover"
          />
          <figcaption className="px-1 pb-1 pt-3 text-center text-sm font-bold text-ink-faint">
            Future official photo: a box, a bungalow, and weather with a
            personality.
          </figcaption>
        </figure>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/order"
            className="gloss-btn inline-flex min-h-12 items-center rounded-pill px-6 py-3 font-extrabold no-underline"
          >
            Pre-order with Ron
          </Link>
          <Link
            to="/menu"
            className="gloss-btn gloss-btn-ghost inline-flex min-h-12 items-center rounded-pill px-6 py-3 font-extrabold no-underline"
          >
            See the pie
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}
