import { NextRequest, NextResponse } from "next/server";
import { db, OrderTable } from "@/lib/drizzle";
import { useCart } from "@/lib/CartContext";

export async function POST(request: NextRequest) {
  const { cartItems } = useCart();
  // const cartItems = getCartItems();

  // Extract the relevant data from the cartItems
  const orderData = cartItems.map((item) => ({
    prod_id: item.product._id,
    prod_quantity: item.quantity,
    price: item.product.prod_price, 
  }));

  try {
    await db.transaction(async () => {
      for (const orderItem of orderData) {
        await db.insert(OrderTable).values(orderItem);
      }
    });

    return new NextResponse("Data saved successfully.", { status: 200 });
    return new NextResponse("Data saved successfully.");
  } catch (error) {
    console.error(error);
    return new NextResponse("An error occurred while saving the data.", {
      status: 500,
    });
  }
}
