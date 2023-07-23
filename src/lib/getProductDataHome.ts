import { client } from "@/lib/sanityclient";

export const getProductDataHome = async () => {
  let query;
    query = `*[_type == "product"] | order(_createdAt desc) [0..3]{
    _id,
    product_name,
    prod_desc,
    prod_price,
    prod_stock,
    "cat_name": prod_cat_id->cat_name,
    prod_image,
    prod_image_gallery
  }`;
  const res = await client.fetch(query);
  return res;
};
