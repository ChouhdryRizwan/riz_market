import { client } from "@/lib/sanityclient";
import imageUrlBuilder from '@sanity/image-url';
import { Image as IImage } from "sanity";
import Image from "next/image";
import Link from "next/link";
import { getCategoryData } from "@/lib/getCategoryData";
import { urlForImage } from "../../../../../sanity/lib/image";

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

export default async function Category({ params }: {
    params: { category: string }
}) {
    const products: Iprod[] = await getCategoryData(params.category);
    return (
        <>
            <div className='relative'>
                <span className='xl:text-7xl lg:text-7xl text-4xl font-bold opacity-10 text-gray-400 tracking-wide'>Devices</span>
                <span className='xl:text-3xl lg:text-3xl text-md font-bold absolute left-0 top-2 lg:top-5 xl:top-5'>{params.category}</span>
                <hr className='text-gray-500 lg:mt-5 xl:mt-5 mt-2' />
            </div>
            <div className="grid grid-cols-0 gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-5 px-1 lg:px-0 xl:px-0">
                {products.map((data) => (
                    <Link key={data._id} href={`/products/${data._id}`} className="group">
                        <div key={data.product_name} className="">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image width={200} height={300} src={urlForImage(data.prod_image).url()} alt={"Product Image"} className="max-h-[250px] lg:h-full xl:h-full h-28 w-full object-contain object-center group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-xs lg:text-md xl:text-md text-gray-700">{data.product_name}</h3>
                            <p className=" mt-1 text-sm ld:text-lg xl:text-lg font-medium text-gray-900">Rs. {data.prod_price}</p>
                        </div>
                    </Link>
                ))
                }
            </div >
            </>
    );
}
