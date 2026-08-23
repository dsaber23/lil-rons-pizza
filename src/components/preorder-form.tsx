import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { submitPreorder } from "@/lib/preorders";
import { cn } from "@/lib/utils";

type Item = "slice" | "pie";

export function PreorderForm({
  onSuccess,
}: {
  onSuccess?: (item: Item, quantity: number) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [item, setItem] = useState<Item>("slice");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await submitPreorder({
        data: {
          name,
          email,
          phone: phone || undefined,
          item,
          quantity,
          notes: notes || undefined,
        },
      });
      toast.success("You're on the pad. We'll call a pickup window.");
      onSuccess?.(item, quantity);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Could not save that order.";
      setError(message);
      toast.error("That didn't go through. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Choice
          selected={item === "slice"}
          onSelect={() => setItem("slice")}
          title="A slice"
          copy="The walk-home fold. One triangle. That's how the family eats it."
        />
        <Choice
          selected={item === "pie"}
          onSelect={() => setItem("pie")}
          title="A whole pie"
          copy="Classic plain. Feeds the house and whoever followed the smell."
        />
      </div>

      <label className="grid gap-1.5 text-sm font-extrabold text-ink-soft">
        How many
        <select
          className="field h-12 rounded-md px-3 text-base font-semibold"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1.5 text-sm font-extrabold text-ink-soft">
        Your name
        <input
          required
          minLength={2}
          className="field h-12 rounded-md px-3 text-base font-semibold"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </label>

      <label className="grid gap-1.5 text-sm font-extrabold text-ink-soft">
        Email{" "}
        <span className="font-semibold text-ink-faint">
          (if the phone misses us)
        </span>
        <input
          required
          type="email"
          className="field h-12 rounded-md px-3 text-base font-semibold"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </label>

      <label className="grid gap-1.5 text-sm font-extrabold text-ink-soft">
        Phone — we'll call when the pie is ready
        <input
          type="tel"
          required
          className="field h-12 rounded-md px-3 text-base font-semibold"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
        />
      </label>

      <label className="grid gap-1.5 text-sm font-extrabold text-ink-soft">
        Notes for the family{" "}
        <span className="font-semibold text-ink-faint">
          (well done? extra hot? feeding the cousins?)
        </span>
        <textarea
          className="field min-h-24 rounded-md px-3 py-2 text-base font-semibold"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          maxLength={400}
        />
      </label>

      {error ? (
        <p className="rounded-md bg-tomato/10 px-3 py-2 text-sm font-bold text-tomato-dark">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={busy}
        className="gloss-btn min-h-12 rounded-pill px-6 py-3.5 text-lg font-extrabold disabled:opacity-70"
      >
        {busy ? "Writing it down…" : "Add us to the list"}
      </button>
      <p className="text-center text-xs font-semibold text-ink-faint">
        No payment today. No delivery. No app. Pickup only, when the family
        lights the oven.
      </p>
    </form>
  );
}

function Choice({
  selected,
  onSelect,
  title,
  copy,
}: {
  selected: boolean;
  onSelect: () => void;
  title: string;
  copy: string;
}) {
  return (
    <button
      type="button"
      data-selected={selected}
      onClick={onSelect}
      className={cn(
        "choice-card bevel-card rounded-lg px-4 py-4 text-left",
        "min-h-24 transition-[box-shadow,border-color] duration-150",
      )}
    >
      <span className="block font-display text-lg text-tomato">{title}</span>
      <span className="mt-1 block text-sm font-semibold text-ink-soft">
        {copy}
      </span>
    </button>
  );
}
