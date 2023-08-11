import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",
  });

  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature")!
  // console.log("sig-----------=============-------====-=-=-", sig);
  let event: any;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    //  console.log("event ===> ", event);
    //  console.log("event type ==> ", event.type);
  } catch (err: any) {
    console.log("ERROR================>>>>>>>>>>", err)
    return NextResponse.json(`Webhook Error =======>>>>>>>>>> : ${err.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    try {
      const session = event.data.object;
      const customer: any = await stripe.customers.retrieve(session.customer)
      // console.log("customer ========>>>>>>>>>", customer);
      // console.log( 'payment success-----------------------', session );
      // console.log( 'payment success_id-----------------------', event.data.object!.id );    
      const line_Items = await stripe.checkout.sessions.listLineItems(event.data.object!.id);

      console.log("Line Items => ", line_Items);
      await SavetoDatabse(line_Items);
      // console.log("line items data ==> ", line_Items.data);
    } catch (err) {
      console.log("error ========>>>>>>>>>", err)
    }
  }
  return NextResponse.json({ message: "done" })
}


const SavetoDatabse = async (cartItems: any) => {
  try {
    const response = await fetch("https://riz-market-place-chouhdryrizwan.vercel.app/api/order", {
    // const response = await fetch("http://localhost:3000/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(cartItems),
    });
    return response;
    // const response = await axios.post("http://localhost:3000/api/order", JSON.stringify(cartItems))
  } catch (error) {
    console.log("Error:", error);
  }
}

