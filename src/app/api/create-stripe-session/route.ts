import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { useCart } from "@/lib/CartContext";

// const { cartItems } = useCart();
export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  

  const transformedItem = {
    price_data: {
      currency: "pkr",
      product_data: {
        name: "cartItems.name",
        description: "item.description",
        images: ["item.image"],
        metadata: { name: "some additional info", task: "Usm created a task" },
      },
      unit_amount: 50 * 100,
      //  unit_amount: item.price * 100,
    },
    quantity: 3,
    //    quantity: item.quantity,
  };

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://riz-market-place-chouhdryrizwan.vercel.app";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [transformedItem],
    mode: "payment",
    success_url: redirectURL + "/payment/success",
    cancel_url: redirectURL + "/payment/fail",
    metadata: {
      images: "item.image",
    },
  });
  return NextResponse.json(session?.id);
}
