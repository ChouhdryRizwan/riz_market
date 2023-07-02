import { Toaster } from "react-hot-toast";
import Navbar from "../../components/section/Navbar";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import Footer from "../../components/section/Footer";

export const metadata = {
  title: "Hua-X-Sam",
  description: "Live the Brands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="lg:px-20 xl:px-20 px-10">
        <CartProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <Navbar />
          {children}
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}