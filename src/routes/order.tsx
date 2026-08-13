import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { PreorderForm } from "@/components/preorder-form";
import { LedCounter } from "@/components/led-counter";
import { countPreorders } from "@/lib/preorders";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [{ title: "Pre-Order · Lil Ron's Pizza" }],
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
            Get in line before the oven is even here.
          </h1>
          <p className="mt-3 max-w-lg font-semibold text-ink-soft">
            No payment today. Tell us slice or pie, we'll email a pickup
            window when Lil Ron's lights up in Northeast Seattle.
            Limited hours. First pies go to people on this list.
          </p>
          <div className="mt-5">
            <LedCounter value={count} />
          </div>
          <figure className="photo-frame mt-8 rounded-lg p-2.5">
            <img
              src="/images/oven.jpg"
              alt="Cheese pizza pulled from a deck oven"
              className="aspect-3/2 w-full rounded-md object-cover"
            />
          </figure>
        </div>

        <div className="bevel-card rounded-xl p-5 sm:p-6">
          {done ? (
            <div className="grid place-items-center py-10 text-center">
              <div
                aria-hidden
                className="starburst mb-4 grid size-24 place-items-center"
              >
                <span className="font-display text-xs">You're in</span>
              </div>
              <h2 className="font-display text-3xl text-ink">
                Ticket punched.
              </h2>
              <p className="mt-3 max-w-sm font-semibold text-ink-soft">
                Ron will email a pickup window when the shop opens. Until
                then, practice your fold.
              </p>
              <button
                type="button"
                className="gloss-btn gloss-btn-ghost mt-6 min-h-12 rounded-pill px-5 py-3 font-extrabold"
                onClick={() => setDone(false)}
              >
                Place another
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-display text-2xl text-ink">Pre-order</h2>
              <p className="mb-5 mt-1 text-sm font-semibold text-ink-faint">
                Slices or pies. We'll confirm the rest.
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
    </SiteShell>
  );
}
