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
import { useState } from 'react';

const Navbar = () => {
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center py-3 relative">
      <Link href="/">
      <Image src={HuaXsam} alt="Website-Logo" className="w-40"></Image>
      </Link>
        <ul className={`flex flex-col gap-y-2 ${isMobileMenuOpen ? 'block' : 'hidden'} sm:flex sm:flex-row sm:gap-x-10 sm:gap-y-0 absolute top-20 lg:top-0 xl:top-0 z-50 w-[100%] bg-white lg:relative xl:relative lg:w-auto xl:w-auto items-center`}>
        <li className="">
          <div className={`p-2 w-fit relative rounded-full bg-gray-300 lg:hidden xl:hidden`}>
            <Link href="./cart">
              <ShoppingCart className="relative" />
              <span className="text-sm font-semibold absolute -top-3 right-0 h-5 w-5 text-center rounded-full bg-[#f02d34] text-white">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </li>
        <li className="text-sm lg:text-lg xl:text-lg font-semibold"><Link href="./">Home</Link></li>
        <li className="text-sm lg:text-lg xl:text-lg font-semibold"><Link href="./products/category/Huawei">Huawei</Link></li>
        <li className="text-sm lg:text-lg xl:text-lg font-semibold"><Link href="./products/category/Samsung">Samsung</Link></li>
        <li className="text-sm lg:text-lg xl:text-lg font-semibold"><Link href="./products">All</Link></li>
      </ul>
      {/* <div className={`flex gap-x-2`}>
        <Search className='bg-white rounded-l' />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r"
        />
      </div> */}
      <div className={`p-2 rounded-full bg-gray-300 ${isMobileMenuOpen ? 'hidden' : 'hidden'} lg:block xl:block`}>
        <Link href="./cart">
          <ShoppingCart className="relative" />
          <span className="absolute top-2 right-0 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
            {cartItems.length}
          </span>
        </Link>
      </div>
      <div className="sm:hidden">
        <button onClick={toggleMobileMenu}>
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 4H18V6H6V4ZM6 10H18V12H6V10ZM6 16H18V18H6V16Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
    // <nav className="flex justify-between items-center h-20">
    //   <Image src={"/HuaXsam.png"} alt="website logo" width={150} height={150} />
    //   <div>
    //     <NavigationMenu>
    //       <NavigationMenuList>
    //         <NavigationMenuItem className="space-x-10">
    //           <NavigationMenuLink> <Link href="./">Home</Link></NavigationMenuLink>
    //           <NavigationMenuLink> <Link href="./products/category/Huawei">Huawei</Link></NavigationMenuLink>
    //           <NavigationMenuLink> <Link href="./products/category/Samsung">Samsung</Link></NavigationMenuLink>
    //           <NavigationMenuLink> <Link href="./products">All</Link></NavigationMenuLink>
    //         </NavigationMenuItem>
    //       </NavigationMenuList>
    //     </NavigationMenu>
    //   </div>
    //   <div className="flex">
    //     <Search className="bg-white rounded-l" />{" "}
    //     <input
    //       type="text"
    //       placeholder="What you are looking for"
    //       className="rounded-r"
    //     ></input>
    //   </div>
    //   <div className="p-2 rounded-full bg-gray-300">
    //   <Link href="./cart">
    //     <ShoppingCart className="relative" />
    //     <span className="absolute top-2 right-20 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
    //       {cartItems.length}
    //     </span>
    //     </Link>
    //   </div>
    // </nav>
  );
};

export default Navbar;