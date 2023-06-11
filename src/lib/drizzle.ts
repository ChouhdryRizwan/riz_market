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
  price: integer("prod_quantity").notNull(),
});

export type tbl_order = InferModel<typeof OrderTable>;
export type Neworder = InferModel<typeof OrderTable, "insert">;

export const db = drizzle(sql);

// export const CategoryTable = pgTable("tbl_category", {
//   cat_id: serial("cat_id").primaryKey(),
//   cat_name: varchar("cat_name").notNull(),
// });

// export type tbl_category = InferModel<typeof CategoryTable>;
// export type Newcategory = InferModel<typeof CategoryTable, "insert">;

// export const ProductTable = pgTable("tbl_product", {
//   prod_id: serial("prod_id").primaryKey(),
//   prod_name: varchar("prod_name").notNull(),
//   prod_cat_id: integer("prod_cat_id").notNull(),
//   prod_price: integer("prod_price").notNull(),
//   prod_desc: text("prod_desc").notNull(),
//   prod_stock: integer("prod_stock").notNull(),
// });

// export type tbl_product = InferModel<typeof ProductTable>;
// export type Newproduct = InferModel<typeof ProductTable, "insert">;

// export const ImagesTable = pgTable("tbl_images", {
//   prod_id: serial("prod_id").primaryKey(),
//   prod_name: varchar("prod_name").notNull(),
//   prod_cat_id: integer("prod_cat_id").notNull(),
//   prod_price: integer("prod_price").notNull(),
//   prod_desc: text("prod_desc").notNull(),
//   prod_stock: integer("prod_stock").notNull(),
// });

// export type tbl_images = InferModel<typeof ImagesTable>;
// export type NewImages = InferModel<typeof ImagesTable, "insert">;


// export const ImagesTable = pgTable("tbl_images", {
//   prod_id: serial("image_id").primaryKey(),
//   prod_name: varchar("image_link").notNull(),
//   prod_cat_id: integer("prod_cat_id").notNull(),
//   prod_price: integer("prod_price").notNull(),
//   prod_desc: text("prod_desc").notNull(),
//   prod_stock: integer("prod_stock").notNull(),
// });
