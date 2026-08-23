import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { PreorderForm } from "@/components/preorder-form";
import { HandTally } from "@/components/hand-tally";
import { countPreorders } from "@/lib/preorders";
import { ShopPhoto } from "@/lib/shop-photo";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [{ title: "The List · Lil Ron's Pizza" }],
  }),
  loader: () => countPreorders(),
  component: OrderPage,
});

function OrderPage() {
  const initial = Route.useLoaderData();
  const [count, setCount] = useState(initial);
  const [done, setDone] = useState(false);

  return (
    <SiteShell>
      <div className="grid gap-8 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start sm:px-8 sm:py-14">
        <div>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-tomato">
            Pickup only · coming soon
          </p>
          <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
            Write your name. We'll call.
          </h1>
          <p className="mt-3 max-w-lg font-semibold text-ink-soft">
            No payment on the computer. No delivery. Tell us slice or pie,
            leave a number, and the family will call a pickup window when
            the oven lights up in Northeast Seattle. First pies go to people
            on this pad.
          </p>
          <div className="mt-5">
            <HandTally value={count} />
          </div>
          <figure className="photo-frame mt-8 rounded-lg p-2.5">
            <ShopPhoto
              name="oven.jpg"
              alt="Cheese pizza pulled from a deck oven"
              className="aspect-3/2 w-full rounded-md object-cover"
            />
          </figure>
          <p className="font-note mt-3 text-lg text-ink-soft">
            This is not an app. It's a list. Like the bakery used to keep.
          </p>
        </div>

        <div className="guest-check overflow-hidden rounded-xl">
          <div className="guest-check-head px-5 py-2 text-center text-[0.68rem] font-extrabold uppercase">
            Guest check · Lil Ron's · no carbon copy, sorry
          </div>
          <div className="p-5 sm:p-6">
            {done ? (
              <div className="grid place-items-center py-10 text-center">
                <div
                  aria-hidden
                  className="starburst mb-4 grid size-24 place-items-center"
                >
                  <span className="font-display text-xs">On the pad</span>
                </div>
                <h2 className="font-display text-3xl text-ink">
                  We got your name.
                </h2>
                <p className="mt-3 max-w-sm font-semibold text-ink-soft">
                  Someone in the family will call a pickup window when the
                  shop opens. Until then, practice your fold.
                </p>
                <button
                  type="button"
                  className="gloss-btn gloss-btn-ghost mt-6 min-h-12 rounded-pill px-5 py-3 font-extrabold"
                  onClick={() => setDone(false)}
                >
                  Add another name
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl text-ink">The list</h2>
                <p className="mb-5 mt-1 text-sm font-semibold text-ink-faint">
                  Slices or pies. We'll confirm the rest by phone.
                </p>
                <PreorderForm
                  onSuccess={() => {
                    setCount((n) => n + 1);
                    setDone(true);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
