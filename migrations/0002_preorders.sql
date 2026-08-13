create table if not exists preorders (
  id text primary key,
  name text not null,
  email text not null,
  phone text,
  item text not null,
  quantity integer not null default 1,
  notes text,
  created_at timestamptz default CURRENT_TIMESTAMP not null
);

create index if not exists preorders_created_at_idx on preorders (created_at desc);
