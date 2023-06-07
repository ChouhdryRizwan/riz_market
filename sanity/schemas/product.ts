import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "product_name",
      title: "Product",
      type: "string",
    }),
    defineField({
      name: "prod_cat_id",
      title: "Category",
      type: "reference",
      to: [{ type: "product_category" }],
    }),
    defineField({
      name: "prod_price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "prod_desc",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "prod_stock",
      title: "Stock",
      type: "number",
    }),
    defineField({
      name: "prod_image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "prod_image_gallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
