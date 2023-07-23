'use client'
import { useCart } from "@/lib/CartContext";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function CheckoutSuccess() {
    const router = useRouter();
    const { cartItems, clearCart } = useCart();
    
    const createCheckOutSession = async () => {
        try {
            const response = await fetch("/api/order/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                cache: "no-cache",
                body: JSON.stringify(cartItems),
            });
            // console.log("Response:", response);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        createCheckOutSession();
        clearCart();
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }, []);

    return (
        <div>Checkout Successfully</div>
    );
}
