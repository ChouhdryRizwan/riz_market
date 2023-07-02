'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../sanity/lib/image';
import { getProductDataHome } from '@/lib/getProductDataHome';

interface Iprod {
    _id: string;
    product_name: string;
    prod_desc: string;
    prod_price: number;
    prod_stock: number;
    cat_name: string;
    prod_image: IImage;
}

export default function HomeProducts() {
    const [products, setProducts] = useState<Iprod[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const productsData: Iprod[] = await getProductDataHome();
            setProducts(productsData);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='text-center mt-14'>
                <h5 className='lg:text-3xl text-2xl font-bold -mb-3'>New</h5>
                <h5 className='lg:text-7xl text-3xl font-bold opacity-20 text-gray-400 tracking-wide'>DEVICES</h5>
            </div>
            <div className='grid grid-cols-0 gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-5'>
                {products.map((data) => (
                    <Link key={data._id} href={`/products/${data._id}`} className='group'>
                        <div key={data.product_name} className=''>
                            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 px-1'>
                                <Image
                                    width={200}
                                    height={300}
                                    src={urlForImage(data.prod_image).url()}
                                    alt='Product Image'
                                    className='max-h-[250px] h-28 lg:h-full xl:h-full w-full object-contain object-center group-hover:opacity-75'
                                />
                            </div>

                            <h3 className='mt-2 text-xs lg:text-md xl:text-md text-gray-700'>{data.product_name}</h3>
                            <p className='text-sm ld:text-lg xl:text-lg font-medium text-gray-900'>Rs. {data.prod_price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
