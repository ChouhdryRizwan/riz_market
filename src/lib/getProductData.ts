import { client } from "@/lib/sanityclient";

export const getProductData = async (_id?: string) => {
  let query;
  if (_id) {
    query = `*[_type == "product" && _id == "${_id}"]{
    _id,
    product_name,
    prod_desc,
    prod_price,
    prod_stock,
    "cat_name": prod_cat_id->cat_name,
    prod_image,
    prod_image_gallery
  }`;
  } else {
    query = `*[_type == "product"] | order(_createdAt desc){
        _id,
        product_name,
        prod_desc,
        prod_price,
        prod_stock,
        "cat_name": prod_cat_id->cat_name,
        prod_image
      }`;
  }
  
  const res = await client.fetch(query);
  return res;
};
