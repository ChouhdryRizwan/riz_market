import { Toaster } from "react-hot-toast";
import Navbar from "../../components/section/Navbar";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";


export const metadata = {
  title: "Rizwan Mobiles",
  description: "Live for People",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-20">
        <CartProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}