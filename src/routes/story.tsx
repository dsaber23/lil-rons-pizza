import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Polaroid } from "@/components/polaroid";
import { ShopPhoto } from "@/lib/shop-photo";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [{ title: "The Family · Lil Ron's Pizza" }],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <SiteShell>
      <article className="px-5 py-10 sm:px-8 sm:py-14">
        <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-tomato">
          Three generations · one kitchen
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-5xl">
          Big Ron had the window. Lil Ron packed the peel west.
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-semibold text-ink-soft">
          This is a family shop. Named after Lil Ron because his father was
          Big Ron. Run by whoever's on the shift. Nobody here is good at
          computers, and we are not about to get good at them.
        </p>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          <Polaroid caption="Jersey. The whole crew. Flour everywhere." tilt="-1.8deg">
            <ShopPhoto
              name="family.jpg"
              alt="Three generations of the family around a pizza in the old kitchen"
              className="aspect-4/3 w-full object-cover"
            />
          </Polaroid>
          <Polaroid caption="Big Ron. The oven still listens to him." tilt="2deg">
            <ShopPhoto
              name="grandpa.jpg"
              alt="Grandfather sliding a cheese pie into a deck oven"
              className="aspect-square w-full object-cover"
            />
          </Polaroid>
        </div>

        <div className="prose-ron mt-12 grid max-w-2xl gap-5 text-base font-semibold leading-relaxed text-ink-soft">
          <p>
            Big Ron ran a slice window in Jersey — the kind of place where
            you eat standing up because sitting down would imply you have
            patience. Grandma kept the sauce. Aunts argued about the cheese.
            Lil Ron learned the fold standing on a milk crate, getting flour
            in his hair and opinions in his ear.
          </p>
          <p>
            Years later he moved west for the mountains and the water. The
            family came with him in pieces: the recipe card, the peel, a
            couple of cousins, and the understanding that Seattle still
            needed an honest fold. Not a lecture. Not a seasonal squash.
            A thin NY / NJ pie you can eat in the rain.
          </p>
          <p>
            So the family is building it. One classic plain at a time.
            Limited hours, because the oven is small and we are regular
            people. Pickup only, because we would rather make your pie right
            than guess how many folks are about to walk in.
          </p>
          <p>
            There is no app. There will not be a QR code taped to the
            counter. A cousin typed this website after Sunday gravy because
            none of us wanted to learn the computer. You leave a name on
            the list, we call when the oven's hot, you take a box home to
            whoever's waiting at the table.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <Polaroid caption="Grandma's card. Don't lose it." tilt="-1deg">
            <ShopPhoto
              name="recipe.jpg"
              alt="A stained handwritten family pizza recipe card on a checkered tablecloth"
              className="aspect-4/3 w-full object-cover"
            />
          </Polaroid>
          <div className="paper-note px-5 py-4">
            <p className="font-note text-2xl leading-snug text-ink">
              If you want pineapple we can talk after coffee. If you want
              DoorDash, that's a different family.
            </p>
            <p className="mt-2 text-right font-note text-xl text-ink-soft">
              — Lil Ron, on behalf of everybody
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/order"
            className="gloss-btn inline-flex min-h-12 items-center rounded-pill px-6 py-3 font-extrabold no-underline"
          >
            Put your name on the list
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
