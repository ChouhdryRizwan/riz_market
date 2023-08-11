"use client";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Quantity from "../../../components/ui/quantity";
import { useCart } from "@/lib/CartContext";
import type { CartItem as TCartItem } from "@/lib/CartContext";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { urlForImage } from "../../../sanity/lib/image";
import { Item } from "@radix-ui/react-menubar";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import getStipePromise from "@/lib/stripe";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
const stripePromise = loadStripe(publishableKey);

export default function CartPage() {
  const { cartItems, removeFromCart, addToCart, ReducefromCart } = useCart();
  const prodTotalPrice = () => {
    let totalPrice: number = 0;
    cartItems.map(
      (item) => (totalPrice += Number(item.product.prod_price * item.quantity))
    );
    return Number(totalPrice);
  };
  prodTotalPrice();
  return (
    <>
      <div>
        <div className="relative">
          <span className="xl:text-7xl lg:text-7xl text-4xl font-bold opacity-10 text-gray-400 tracking-wide">
            Shopping
          </span>
          <span className="xl:text-3xl lg:text-3xl text-md font-bold absolute left-0 top-2 lg:top-5 xl:top-5">
            Cart
          </span>
          <hr className="text-gray-500 xl:mt-5 mt-2" />
        </div>
        {/* <hr className='text-gray-500 mt-5' /> */}
        <div className="grid place-items-center justify-center w-[100%]">
          <div className={`${cartItems.length < 1 ? "mx-auto" : " "}'`}>
            <div className="">
              {cartItems.length < 1 && (
                <div className="flex flex-col justify-center items-center">
                  <AiOutlineShopping size={150} />
                  <h1 className="text-lg lg:text-2xl xl:text-2xl font-bold text-gray-500">
                    Your shopping bag is empty
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col mt-3 lg:items-start xl:items-start gap-x-5">
          <div className="lg:w-3/4 xl:w-3/4">
            <table className="w-[100%]">
              <tbody className="">
                {cartItems.map((item) => (
                  <>
                    <tr className="bg-gray-100">
                      <td className="p-5">
                        <div className="flex gap-x-7 flex-col lg:flex-row xl:flex-row">
                          <div className="bg-gray-200 w-auto h-[180px] lg:h-[170px] xl:h-[170px] lg:w-[40%] xl:w-[40%] rounded-xl p-5">
                            <Image
                              className="h-[100%] w-[100%] object-contain mx-auto"
                              src={urlForImage(item.product.prod_image).url()}
                              alt="Cart Images"
                              width={150}
                              height={150}
                            />
                          </div>

                          <div className="lg:w-[40%] xl:w-[40%] lg:ml-4 xl:ml-4 mt-2">
                            <div className="">
                              <span className="text-lg lg:text-xl xl:text-xl font-bold">
                                {item.product.product_name}
                              </span>
                            </div>
                            <div>
                              <span className="inline-flex items-center rounded-md bg-gray-50 px-3 py-1 font-medium text-blue-600 ring-1 ring-inset ring-blue-500/10 mt-1">
                                {item.product.cat_name}
                              </span>
                            </div>
                            <div className="mt-3">
                              <span className="text-lg font-bold text-gray-400">
                                Delivery Estimation
                              </span>
                              <div>
                                <span className="text-lg">5 Working Days</span>
                              </div>
                            </div>
                            <span className="text-md font-bold">
                              Rs. {item.product.prod_price}
                            </span>
                          </div>
                          <div className="lg:w-96 xl:w-96 lg:text-end xl:text-end">
                            <div className="lg:inline-block xl:inline-block lg:align-middle xl:align-middle lg:space-y-24 xl:space-y-24">
                              <div className="lg:text-end xl:text-end">
                                <span
                                  className="text-base lg:text-lg xl:text-lg text-red-600 cursor-pointer"
                                  onClick={() =>
                                    removeFromCart(item.product._id)
                                  }
                                >
                                  Delete
                                </span>
                              </div>
                              <div className="space-x-3 lg:mt-0 xl:mt-0 mt-2">
                                <span
                                  onClick={() => ReducefromCart(item.product)}
                                  className="bg-gray-200 px-3 py-2 font-bold rounded-full cursor-pointer"
                                >
                                  -
                                </span>
                                <span className="border-b-2 border-gray-200 p-4">
                                  {item.quantity}
                                </span>
                                <span
                                  onClick={() => addToCart(item.product)}
                                  className="bg-gray-200 px-3 py-2 font-bold rounded-full cursor-pointer"
                                >
                                  +
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <hr className="mt-2" />
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-100 w-[100%] lg:w-1/3 xl:w-1/3">
            {cartItems.length >= 1 && (
              <div className="space-y-4 lg:p-5 xl:p-5 px-2 py-3">
                <div>
                  <span className="text-base lg:text-xl xl:text-xl font-bold">
                    Order Summary
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm lg:text-xl xl:text-xl font-bold lg:font-semibold xl:font-semibold">
                    Quantity
                  </span>
                  <span className="text-sm font-semibold">
                    {cartItems.length} Product
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm lg:text-xl xl:text-xl font-bold lg:font-semibold xl:font-semibold">
                    Sub Total
                  </span>
                  <span className="text-sm font-semibold">
                    Rs. {prodTotalPrice()}
                  </span>
                </div>
                <div className="grid justify-items-center">
                  <button
                    onClick={() => {
                      createCheckOutSession(cartItems);
                    }}
                    type="submit"
                    className="bg-white hover:bg-gray-800 hover:text-gray-100 text-gray-800 font-semibold lg:font-bold xl:font-bold text-sm lg:text-lg xl:text-lg py-1 px-1 lg:py-2 xl:py-2 lg:px-16 xl:px-16 border border-gray-400 rounded-lg shadow flex gap-2"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const createCheckOutSession = async (items: TCartItem[]) => {
  const stripe = await getStipePromise();
  const response = await fetch("/api/create-stripe-session/", {
    // const response = await fetch("/api/order/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
    body: JSON.stringify(items),
  });
  const data = await response.json();
  if (data.session) {
    stripe?.redirectToCheckout({ sessionId: data.session.id });
  }
};
