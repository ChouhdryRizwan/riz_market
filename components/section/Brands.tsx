import Image from "next/image";
export default function Brands() {
    return (
        <>

            <div>
                <div className='text-center mt-8'>
                    <h5 className='lg:text-3xl xl:text-3xl text-2xl font-bold -mb-3'>Famous</h5>
                    <h5 className='lg:text-7xl xl:text-7xl text-3xl font-bold opacity-20 text-gray-400 tracking-wide'>BRANDS</h5>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-[50%] p-2">
                        <div className="overflow-hidden rounded-2xl shadow-xl">
                            <Image width={500} height={500} src={"/s22-ultra-from-the-back.webp"} alt={"Samsung Image"} className="h-[200px] w-[100%] object-cover object-top hover:opacity-90" />
                        </div>
                        <div className="overflow-hidden rounded-2xl shadow-xl mt-3">
                            <Image width={500} height={500} src={"/huawei-nova-9-3.jpg"} alt={"Huawei Image"} className="h-[200px] w-[100%] object-cover object-center hover:opacity-90" />
                        </div>
                    </div>
                    <div className="lg:w-[50%] flex p-2">
                        <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-200 lg:w-[50%] md:w-[50%] lg:h-[100%]">
                            <Image width={500} height={200} src={"/p40-pro.png"} alt={"Samsung Image"} className="h-[100%] w-[100%] object-cover object-center hover:opacity-90" />
                        </div>
                        <div className="overflow-hidden rounded-2xl shadow-xl ml-3 md:w-[50%] lg:w-[50%] lg:h-[100%]">
                            <Image width={500} height={500} src={"/sb-2122-m0014-m007-m050-asym-m008-m022-samsung-mobiles-brandshop-1189274.jpg"} alt={"Huawei Image"} className="h-[100%] w-[100%] object-cover object-center hover:opacity-90" />
                        </div>
                    </div>
                </div>
            </div>

        </>
        )
}