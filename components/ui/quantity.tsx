"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Image as IImage } from "sanity";
import { useCart } from "@/lib/CartContext";

interface IQty {
  minQuantity: number;
}

export default function Quantity({ product }: any) {
  const { addToCart, ReducefromCart } = useCart();
  let [currentQuatity, setCurrentQuantity] = useState(1);
  const inc = () => {
      if (currentQuatity > product.prod_stock) {
      toast.error(`Quantity can't exceed than ${product.prod_stock}`);
      setCurrentQuantity(product.prod_stock);
    } else {
        setCurrentQuantity(currentQuatity++);
        // addToCart(product);
    }
  };
  const dec = () => {
    if (currentQuatity == 1) {
      toast.error("Quantity can't be less than 01.");
      setCurrentQuantity(1);
    } else {
      setCurrentQuantity(currentQuatity--);
    //   ReducefromCart(product);
    }
  };
  return (
    <div className="flex lg:flex-row xl:flex-row flex-col gap-x-6 lg:items-center xl:items-center mt-4">
      <h2 className="text-sm font-bold text-gray-900 mb-4 lg:mb-0 xl:mb-0">
        QUANTITY:{" "}
      </h2>
      <div className="space-x-3">
        <span
          className="bg-gray-200 px-3 py-2 font-bold rounded-full cursor-pointer"
          onClick={() => dec()}
        >
          {" "}
          -
        </span>
        <span className="border-b-2 border-gray-200 px-4">
          {currentQuatity}
        </span>
        <span
          className="bg-gray-200 px-3 py-2 font-bold rounded-full cursor-pointer"
          onClick={() => inc()}
        >
          +
        </span>
      </div>
    </div>
  );
}
