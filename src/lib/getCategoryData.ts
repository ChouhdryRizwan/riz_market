import { client } from "@/lib/sanityclient";

export const getCategoryData = async (category: string) => {
  let query;
  query = `*[_type == "product" && prod_cat_id->cat_name == "${category}"] | order(_createdAt desc){
    _id,
    product_name,
    prod_desc,
    prod_price,
    prod_stock,
    "cat_name": prod_cat_id->cat_name,
    prod_image,
    prod_image_gallery
  }`
  const res = await client.fetch(query);
  return res;
};
