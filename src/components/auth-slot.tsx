import { Link } from "@tanstack/react-router";
import { SignedIn, SignedOut, UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export function AuthSlot() {
  const { isPending } = useCurrentUserState();
  if (isPending) {
    return (
      <div
        className="h-9 w-20 animate-pulse rounded-pill bg-ink/10"
        aria-hidden
      />
    );
  }
  return (
    <>
      <SignedOut>
        <Link
          to="/login"
          className="rounded-pill px-3.5 py-2 text-sm font-extrabold text-ink-faint no-underline hover:text-ink"
        >
          Staff
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
