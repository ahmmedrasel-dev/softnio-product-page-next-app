import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Softnio Product Page",
  description: "Softnio Product Details Page with modal add to cart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto}`}>{children}</body>
    </html>
  );
}
