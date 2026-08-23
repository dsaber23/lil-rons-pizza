import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { PizzaLogo } from "@/components/pizza-logo";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <div className="grid min-h-dvh place-items-center px-4 py-10">
      <div className="stage w-full max-w-md overflow-hidden rounded-xl">
        <div className="gloss-bar px-5 py-2 text-center text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-cream">
          Staff entrance · wipe your feet
        </div>
        <div className="px-6 py-8">
          <PizzaLogo />
          <h1 className="mt-6 font-display text-3xl text-ink">
            Family only
          </h1>
          <p className="mt-2 text-sm font-semibold text-ink-soft">
            For the people who actually have to slice the pies. Everybody
            else can{" "}
            <Link to="/order" className="font-extrabold text-tomato">
              leave a name out front
            </Link>
            .
          </p>

          <div className="mt-6 grid gap-3">
            {authEnabled ? (
              GROK_PROVIDERS.map((p) => (
                <button
                  key={p.providerId}
                  type="button"
                  onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                  className="gloss-btn gloss-btn-ghost min-h-12 rounded-pill px-4 py-3 font-extrabold"
                >
                  Continue with {p.label}
                </button>
              ))
            ) : (
              <p className="text-sm font-semibold text-ink-faint">
                Sign-in is disabled.
              </p>
            )}
          </div>

          <Link
            to="/"
            className="mt-6 inline-block text-sm font-extrabold text-ink-faint no-underline hover:text-ink"
          >
            ← Back to the shop
          </Link>
        </div>
      </div>
    </div>
  );
}
