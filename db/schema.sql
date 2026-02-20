-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users Table
create table if not exists "User" (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  password text not null,
  "createdAt" timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Products Table
create table if not exists "Product" (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  "sellingPrice" double precision not null,
  "costPrice" double precision default 0 not null,
  "stockQuantity" integer default 0 not null,
  "trackStock" boolean default true not null,
  "createdAt" timestamp with time zone default timezone('utc'::text, now()) not null,
  "updatedAt" timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Index on Product name for faster search
create index if not exists "Product_name_idx" on "Product" (name);

-- Transactions Table
create table if not exists "Transaction" (
  id uuid default uuid_generate_v4() primary key,
  "totalAmount" double precision not null,
  "paymentMethod" text not null check ("paymentMethod" in ('CASH', 'UPI')),
  "createdAt" timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Transaction Items Table
create table if not exists "TransactionItem" (
  id uuid default uuid_generate_v4() primary key,
  "transactionId" uuid not null references "Transaction"(id) on delete cascade,
  "productId" uuid not null references "Product"(id),
  "quantity" integer not null,
  "priceAtSale" double precision not null,
  "total" double precision not null
);

-- Function to handle atomic transaction creation
create or replace function create_transaction(
  items jsonb,
  payment_method text
) returns jsonb
language plpgsql
as $$
declare
  item jsonb;
  new_transaction_id uuid;
  total_amount double precision := 0;
  product_record record;
  item_total double precision;
begin
  -- Calculate total amount and validate stock
  for item in select * from jsonb_array_elements(items)
  loop
    select * from "Product" where id = (item->>'productId')::uuid into product_record;
    
    if not found then
      raise exception 'Product % not found', item->>'productId';
    end if;

    if product_record."trackStock" and product_record."stockQuantity" < (item->>'quantity')::int then
      raise exception 'Insufficient stock for product %', product_record.name;
    end if;

    item_total := product_record."sellingPrice" * (item->>'quantity')::int;
    total_amount := total_amount + item_total;
  end loop;

  -- Create Transaction
  insert into "Transaction" ("totalAmount", "paymentMethod")
  values (total_amount, payment_method)
  returning id into new_transaction_id;

  -- Create Transaction Items and Update Stock
  for item in select * from jsonb_array_elements(items)
  loop
    select * from "Product" where id = (item->>'productId')::uuid into product_record;
    item_total := product_record."sellingPrice" * (item->>'quantity')::int;

    insert into "TransactionItem" ("transactionId", "productId", "quantity", "priceAtSale", "total")
    values (
      new_transaction_id, 
      (item->>'productId')::uuid, 
      (item->>'quantity')::int, 
      product_record."sellingPrice",
      item_total
    );

    -- Update stock if tracked
    if product_record."trackStock" then
      update "Product"
      set "stockQuantity" = "stockQuantity" - (item->>'quantity')::int
      where id = (item->>'productId')::uuid;
    end if;
  end loop;

  return jsonb_build_object('id', new_transaction_id, 'totalAmount', total_amount);
end;
$$;

-- Function to get top products
create or replace function get_top_products(
  start_date timestamp with time zone,
  end_date timestamp with time zone,
  limit_count int default 5
) returns table (
  product_name text,
  total_quantity bigint,
  total_revenue double precision
)
language plpgsql
as $$
begin
  return query
  select 
    p.name as product_name,
    sum(ti.quantity)::bigint as total_quantity,
    sum(ti.total)::double precision as total_revenue
  from "TransactionItem" ti
  join "Transaction" t on ti."transactionId" = t.id
  join "Product" p on ti."productId" = p.id
  where t."createdAt" >= start_date and t."createdAt" <= end_date
  group by p.name
  order by total_quantity desc
  limit limit_count;
end;
$$;
