import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "@/lib/db";

const preorderSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email(),
  phone: z.string().trim().max(30).optional(),
  item: z.enum(["slice", "pie"]),
  quantity: z.number().int().min(1).max(12),
  notes: z.string().trim().max(400).optional(),
});

export type PreorderInput = z.infer<typeof preorderSchema>;

export const submitPreorder = createServerFn({ method: "POST" })
  .validator((input: unknown) => preorderSchema.parse(input))
  .handler(async ({ data }) => {
    const sql = await getSql();
    const id = crypto.randomUUID();
    const phone = data.phone?.trim() ? data.phone.trim() : null;
    const notes = data.notes?.trim() ? data.notes.trim() : null;
    await sql`
      insert into preorders (id, name, email, phone, item, quantity, notes)
      values (
        ${id},
        ${data.name},
        ${data.email},
        ${phone},
        ${data.item},
        ${data.quantity},
        ${notes}
      )
    `;
    return { ok: true as const, id };
  });

export const countPreorders = createServerFn({ method: "GET" }).handler(
  async () => {
    const sql = await getSql();
    const rows = await sql<{ n: number }>`
      select count(*)::int as n from preorders
    `;
    return rows[0]?.n ?? 0;
  },
);
