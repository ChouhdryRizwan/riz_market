import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import AddtoCart from "../ui/addtoCart";
import Image from "next/image";
import Products from "@/app/products/page";

const Hero = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-[45%]">
          <span className="font-bold text-xl tracking-wide ml-2">DISCOVER THE</span>
          <h1 className="font-extrabold tracking-wide text-9xl opacity-10 -mt-5">
            Latest
          </h1>
          <span className="font-bold text-xl bg-slate-700 px-4 text-white tracking-wide ml-2">
            DEVICES
          </span>
          <button type="button" className="bg-white hover:bg-gray-800 hover:text-gray-100 text-gray-800 font-semibold py-2 px-5 border border-gray-400 rounded-lg shadow flex gap-2 ml-2 mt-5">
                Shop Now
            </button>
          <div className="flex items-center gap-5 -mt-5">
            <div>
              <Image src={"/Huawei-Logo.png"} alt="Huawei-Logo" width={150} height={150} />
            </div>
            <div>
              <Image src={"/Samsung_Logo.svg.webp"} alt="Samsung-Logo" width={150} height={150} />
            </div>
          </div>

        </div>
        <div className="w-[55%]">
          <div>
            <Image src={"/huawei-mate-x2-banner.jpeg"} alt="Samsung-Logo" width={700} height={700} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;