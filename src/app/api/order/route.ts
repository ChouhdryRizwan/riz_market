import { NextRequest, NextResponse } from "next/server";
import { db, OrderTable } from "@/lib/drizzle";
import { useCart } from "@/lib/CartContext";

export async function POST(request: NextRequest) {
  const { cartItems } = useCart();
  return new NextResponse("An error occurred while saving the data.");


  //     const res = await db.insert(OrderTable).values({
  //       prod_id: product._id,
  //       prod_quantity: quantity,
  //       price: product.price,
  //     });
  //     return NextResponse.json({ res });
  //   }
  // } catch (error) {
  //   console.error("Error saving data to the database:", error);
  //   return new NextResponse("An error occurred while saving the data.");
  // }
}
