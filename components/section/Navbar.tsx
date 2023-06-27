'use client';
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import HuaXsam from "/public/HuaXsam.png";


const Navbar = () => {
  const { cartItems } = useCart();
  return (
    // <div className="flex justify-between items-center py-3">
    //   <Image src={HuaXsam} alt="Website-Logo" className="w-40"></Image>
    //   <ul className="flex gap-x-10">
    //     <li className="text-lg"><Link href="./">Home</Link></li>
    //     <li className="text-lg"><Link href="./products/category/Huawei">Huawei</Link></li>
    //     <li className="text-lg"><Link href="./products/category/Samsung">Samsung</Link></li>
    //     <li className="text-lg"><Link href="./products">All</Link></li>
    //   </ul>
    //   <div className="flex gap-x-2">
    //     <Search className="bg-white rounded-l" />{" "}
    //     <input
    //       type="text"
    //       placeholder="What you are looking for"
    //       className="rounded-r">

    //     </input>
    //   </div>
    //   <div className="p-2 rounded-full bg-gray-300">
    //     <Link href="./cart">
    //       <ShoppingCart className="relative" />
    //       <span className="absolute top-2 right-20 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
    //         {cartItems.length}
    //       </span>
    //     </Link>
    //   </div>
    // </div>
    <nav className="flex justify-between items-center h-20">
      <Image src={"/HuaXsam.png"} alt="website logo" width={150} height={150} />
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="space-x-10">
              <NavigationMenuLink> <Link href="./">Home</Link></NavigationMenuLink>
              <NavigationMenuLink> <Link href="./products/category/Huawei">Huawei</Link></NavigationMenuLink>
              <NavigationMenuLink> <Link href="./products/category/Samsung">Samsung</Link></NavigationMenuLink>
              <NavigationMenuLink> <Link href="./products">All</Link></NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex">
        <Search className="bg-white rounded-l" />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r"
        ></input>
      </div>
      <div className="p-2 rounded-full bg-gray-300">
      <Link href="./cart">
        <ShoppingCart className="relative" />
        <span className="absolute top-2 right-20 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          {cartItems.length}
        </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;