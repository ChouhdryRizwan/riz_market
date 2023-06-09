import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="mt-14 border-t-[1px] border-gray-800 py-10">
                <div className="flex gap-7">
                    <div className="w-[40%]">
                        <div className="justify-center items-center">
                            <Image className="h-[30%]" src={"/HuaXsam.png"} alt="Website Logo" width={200} height={200} />
                        </div>
                        <div className="py-2">We are a leading online retailer dedicated to providing the latest Huawei and Samsung mobile phones at competitive prices. Our goal is to offer a seamless shopping experience and exceptional customer service.</div>
                        <div className="flex">
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                        </div>
                    </div>
                    <div className="w-[20%]">
                        <span className="font-bold text-2xl text-gray-400">Company</span>
                        <ul className="font-lg text-gray-500 space-y-2 mt-3">
                            <li className="cursor-pointer">About Us</li>
                            <li className="cursor-pointer">Contact Us</li>
                            <li className="cursor-pointer">Privacy Policy</li>
                            <li className="cursor-pointer">Terms of Use</li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                        <span className="font-bold text-2xl text-gray-400">Support</span>
                        <ul className="font-lg text-gray-500 space-y-2 mt-3">
                            <li className="cursor-pointer">Support Center</li>
                            <li className="cursor-pointer">24/7 Service</li>
                            <li className="cursor-pointer">Customer Support</li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                        <span className="font-bold text-2xl text-gray-400">Contact</span>
                        <ul className="font-lg text-gray-500 space-y-2 mt-3">
                            <li className="cursor-pointer">WhatsApp</li>
                            <li className="cursor-pointer">Support 24hr</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t-[1px] border-gray-800 flex justify-center py-2">
                <a href="https://github.com/ChouhdryRizwan"><span className="text-md font-bold text-gray-600">Code By : </span>  <span className="text-md font-bold text-gray-900">Chouhdry Rizwan</span></a>
            </div>
        </>
    );
}