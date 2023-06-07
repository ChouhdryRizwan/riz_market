import { client } from "@/lib/sanityclient";
import imageUrlBuilder from '@sanity/image-url';
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import { getProductData } from "@/lib/getProductData";
import Heading from "../../../components/ui/heading";
// && prod_cat_id->cat_name == "Huawei"
// export const getProductData = async () => {
//     const query = `*[_type == "product"]{
//     _id,
//     product_name,
//     prod_desc,
//     prod_price,
//     prod_stock,
//     "cat_name": prod_cat_id->cat_name,
//     prod_image
//   }`;
//     const res = await client.fetch(query);
//     return res;

// };

interface Iprod {
    _id: string;
    product_name: string;
    prod_desc: string;
    prod_price: number;
    prod_stock: number;
    cat_name: string;
    prod_image: IImage;
}

// const builder = imageUrlBuilder(client);
// const urlFor = (source: string) => builder.image(source);


export default async function Products() {
    const products: Iprod[] = await getProductData();
    return (
        <>
            <div className='relative'>
                <span className='text-7xl font-bold opacity-10 text-gray-400 tracking-wide'>Brands</span>
                <span className='text-3xl font-bold absolute left-0 top-5'>All</span>
                <hr className='text-gray-500 mt-5' />
            </div>
            <div className="grid grid-cols-0 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-5">
                {products.map((data) => (
                    <Link href={`/products/${data._id}`} className="group">
                        <div key={data.product_name} className="">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image width={200} height={300} src={urlForImage(data.prod_image).url()} alt={"Product Image"} className=" max-h-[250px] h-full w-full object-contain object-center group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{data.product_name}</h3>
                            {/* <h4>{data._id}</h4> */}
                            {/* <h4>{data.prod_desc}</h4> */}
                            <p className="mt-1 text-lg font-medium text-gray-900">Rs. {data.prod_price}</p>
                            {/* <button>Add to Cart</button> */}
                            {/* <h4>{data.cat_name}</h4> */}
                            {/* <img src={urlFor(data.prod_image).width(200).url()} alt="Product Image" /> */}
                        </div>
                    </Link>
                ))
                }
            </div ></>
    );
}
