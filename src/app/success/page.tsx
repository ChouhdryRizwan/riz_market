"use client";
import { useCart } from "@/lib/CartContext";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CheckoutSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { cartItems, clearCart } = useCart();
  const success = searchParams.get("success");

  if (!success) {
    router.push("/");
  } else {
    clearCart();
  }

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return <div>Checkout Successfully</div>;
}
