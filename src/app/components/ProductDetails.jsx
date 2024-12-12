"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import ColorVarient from "./ColorVarient";
import SizeVarient from "./SizeVarient";

const ProductDetails = ({ product }) => {
  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(product.thumbnail);
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (colorId) => {
    const selectedColor = product.colors.find((color) => color.id === colorId);
    if (selectedColor) {
      setSelectedThumbnail(selectedColor.thumbnail);
      setSelectedColor(selectedColor.name);
    }
  };

  const handleSizeChange = (sizeId) => {
    const selectedSize = product.sizes.find((size) => size.id === sizeId);
    if (selectedSize) {
      setSelectedSize(selectedSize.label);
    }
  };

  return (
    <section className="py-5">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col gap-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="thumbnail-wraper">
              <Image
                id="productThumbnail"
                src={selectedThumbnail}
                width={500}
                height={500}
                alt="Main Thumbnail"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{product.title}</h1>

              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </div>
                <p className="text-sm">(2 Review)</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="line-through text-gray-500">
                  ${product.regularPrice}
                </span>
                <h3 className="text-xl font-semibold">
                  ${product.discountPrice}
                </h3>
              </div>

              <p className="text-gray-600">{product.summary}</p>

              <div className="flex gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Type</p>
                  <strong>Watch</strong>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Model Number</p>
                  <strong>Forerunner 290XT</strong>
                </div>
              </div>

              <div className="space-y-2">
                <ColorVarient
                  color={product.colors}
                  onColorChange={handleColorChange}
                />
              </div>

              <div className="space-y-2">
                <SizeVarient
                  sizes={product.sizes}
                  onSizeChange={handleSizeChange}
                />
              </div>

              <p className="text-lg">
                Total Price:{" "}
                <span id="totalPrice" className="font-semibold">
                  $69
                </span>
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded">
                  <button
                    className="px-4 py-2 border-r"
                    type="button"
                    id="decrement"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="w-12 text-center border-none focus:ring-0"
                    value="1"
                    id="quantity"
                    readOnly
                  />
                  <button
                    className="px-4 py-2 border-l"
                    type="button"
                    id="increment"
                  >
                    +
                  </button>
                </div>

                <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Add to Cart
                </button>

                <a
                  className="flex items-center justify-center w-10 h-10 border rounded-full text-gray-500 hover:text-red-500"
                  href="#"
                >
                  <FaRegHeart />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <button className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">
            Check Out{" "}
            <span id="total_item" className="ml-2">
              0
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
