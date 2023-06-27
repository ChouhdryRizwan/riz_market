import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  uniqueIndex,
  integer,
} from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const OrderTable = pgTable("tbl_order", {
  id: serial("id").primaryKey(),
  prod_id: varchar("prod_id").notNull(),
  prod_quantity: integer("prod_quantity").notNull(),
  price: integer("price").notNull(),
});

export type tbl_order = InferModel<typeof OrderTable>;
export type Neworder = InferModel<typeof OrderTable, "insert">;

export const db = drizzle(sql);
