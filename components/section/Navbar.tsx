'use client';
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';


const Navbar = () => {
  const { cartItems } = useCart();
  // console.log([...new Set(cartItems)]);
  return (
    <nav className="flex justify-between items-center h-20">
      <Image src={"/HuaXsam.png"} alt="website logo" width={150} height={150} />
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="space-x-10">
              {/* <NavigationMenuTrigger><Link href="./">Home</Link></NavigationMenuTrigger>
              <NavigationMenuTrigger><Link href={`./products/category/Huawei`}>Huawei</Link></NavigationMenuTrigger>
              <NavigationMenuTrigger><Link href={`./products/category/Samsung`}>Samsung</Link></NavigationMenuTrigger>
              <NavigationMenuTrigger><Link href="./products">All</Link></NavigationMenuTrigger> */}
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