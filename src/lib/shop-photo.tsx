import type { ImgHTMLAttributes } from "react";

/** Hosted stand-ins if the decoded pizza photos are not on disk yet. */
const FALLBACK: Record<string, string> = {
  "pie-hero.jpg":
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=70",
  "slice-fold.jpg":
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=70",
  "oven.jpg":
    "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=70",
  "porch.jpg":
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=70",
  "ron-mascot.jpg":
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=70",
  "family.jpg":
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=70",
  "recipe.jpg":
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=70",
  "grandpa.jpg":
    "https://images.unsplash.com/photo-1571997478779-2adcb19ea23c?auto=format&fit=crop&w=700&q=70",
};

type ShopPhotoName = keyof typeof FALLBACK;

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  name: ShopPhotoName;
};

export function ShopPhoto({ name, alt, onError, ...rest }: Props) {
  return (
    <img
      src={`/images/${name}`}
      alt={alt}
      onError={(event) => {
        const el = event.currentTarget;
        const next = FALLBACK[name];
        if (next && el.src !== next) el.src = next;
        onError?.(event);
      }}
      {...rest}
    />
  );
}
