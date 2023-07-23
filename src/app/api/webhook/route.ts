import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export  async function POST(req: NextRequest, res: any){   
    try {
    const rawBody = await req.text();
    const sig = req.headers.get("stripe-signature") as string
    console.log("sig-----------=============-------====-=-=-", sig);

    const event: any = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);

   console.log("event ===> ", event);
   console.log("event type ==> ", event.type);

    if ( 'checkout.session.completed' === event.type ) {
        const session = event.data.object;

        console.log( 'payment success-----------------------', session );
        // console.log( 'payment success_id-----------------------', event.data.object!.id );    
    const line_Items  = await stripe.checkout.sessions.listLineItems(event.data.object!.id);
    console.log("Line Items => ", line_Items);
    console.log("line items data ==> ", line_Items.data);

      } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
    } catch (err: any) {
        console.log("Error in webhook----------", err);
        // res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }
   
}
