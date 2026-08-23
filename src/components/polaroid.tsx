import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Polaroid({
  children,
  caption,
  tilt = "-1.5deg",
  className,
}: {
  children: ReactNode;
  caption?: string;
  tilt?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn("polaroid", className)}
      style={{ transform: `rotate(${tilt})` }}
    >
      {children}
      {caption ? (
        <figcaption className="font-note pt-2 text-center text-lg text-ink-soft">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
