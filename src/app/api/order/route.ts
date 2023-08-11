import { NextRequest, NextResponse } from "next/server";
import { db, OrderTable } from "@/lib/drizzle";

export async function POST(request: NextRequest) {
  let req = await request.json();

  const orderData = req.data.map((item: any) => ({
    prod_id: item.id,
    prod_quantity: item.quantity,
    price: item.price.unit_amount,
  }));
  try {
    await db.transaction(async () => {
      for (const orderItem of orderData) {
        await db.insert(OrderTable).values(orderItem);
      }
    });
    return new NextResponse("Data saved successfully.", { status: 200 });
//    
  } catch (error) {
    console.error(error);
    return new NextResponse("An error occurred while saving the data.", {
      status: 500,
    });
  }
}
