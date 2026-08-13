import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Ticker } from "@/components/ticker";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh px-3 py-3 sm:px-5 sm:py-6">
      <div className="stage mx-auto max-w-5xl overflow-hidden rounded-xl">
        <Ticker />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
