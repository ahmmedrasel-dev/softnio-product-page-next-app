import ProductDetails from "@/app/components/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const product = {
    id: crypto.randomUUID(),
    title: "Classy Modern Smart Watch",
    thumbnail: "/assets/band_color_violet.png",
    summary:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born, and I will give you acomplete account of the system, and expound the actual teaching.",
    colors: [
      {
        id: crypto.randomUUID(),
        name: "Black",
        thumbnail: "/assets/band_color_black.png",
      },
      {
        id: crypto.randomUUID(),
        name: "Blue",
        thumbnail: "/assets/band_color_blue.png",
      },
      {
        id: crypto.randomUUID(),
        name: "Violet",
        thumbnail: "/assets/band_color_violet.png",
      },
      {
        id: crypto.randomUUID(),
        name: "Cyan",
        thumbnail: "/assets/band_color_cyan.png",
      },
    ],
    sizes: [
      { id: crypto.randomUUID(), label: "S", price: 69 },
      { id: crypto.randomUUID(), label: "M", price: 79 },
      { id: crypto.randomUUID(), label: "L", price: 89 },
      { id: crypto.randomUUID(), label: "XL", price: 99 },
    ],
    regularPrice: 99.0,
    discountPrice: 79.99,
  };

  return (
    <main>
      <ProductDetails product={product} />
      <ToastContainer />
    </main>
  );
}
