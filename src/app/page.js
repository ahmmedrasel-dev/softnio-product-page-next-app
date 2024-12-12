import ProductDetails from "./components/ProductDetails";

export default function Home() {
  const product = {
    title: "Classy Modern Smart Watch",
    thumbnail: "/assets/band_color_violet.png",
    summary:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born, and I will give you acomplete account of the system, and expound the actual teaching.",
    colors: [
      {
        id: 1,
        name: "Black",
        thumbnail: "/assets/band_color_black.png",
      },
      {
        id: 2,
        name: "Blue",
        thumbnail: "/assets/band_color_blue.png",
      },
      {
        id: 3,
        name: "Violet",
        thumbnail: "/assets/band_color_violet.png",
      },
      {
        id: 4,
        name: "Cyan",
        thumbnail: "/assets/band_color_cyan.png",
      },
    ],
    sizes: [
      { id: "SSize", label: "S", price: 69 },
      { id: "MSize", label: "M", price: 79 },
      { id: "LSize", label: "L", price: 89 },
      { id: "XLSize", label: "XL", price: 99 },
    ],
    regularPrice: 99.0,
    discountPrice: 79.99,
  };

  return (
    <main>
      <ProductDetails product={product} />
    </main>
  );
}
