import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="grid min-h-dvh place-items-center px-6 text-center">
      <div className="stage max-w-md rounded-xl px-6 py-10">
        <span className="inline-flex text-tomato" aria-hidden>
          <TriangleAlert className="size-10" strokeWidth={2} />
        </span>
        <h1 className="mt-3 font-display text-2xl text-ink">
          The oven went out
        </h1>
        <p className="mt-2 text-sm font-semibold break-words text-ink-soft">
          {error.message || "An unexpected error occurred. Try reloading the page."}
        </p>
      </div>
    </main>
  );
}
