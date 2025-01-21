"use client"
import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "@/components/BreadCrumb";
import Service from "@/components/Service";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import ShortSec from "@/components/ShortSec";
import { secData, type SecData } from "@/utils/dynamicpage";
import { useState } from "react";

export default function ProductDetail({
  params,
}: {
  params: { productid: string };
}) {
  const data = secData.find((item: SecData) => item.id === params.productid);
  
  // Initializing state for size, color, quantity, and cart
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("purple");
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<any[]>([]);

  // Function to handle add to cart
  const handleAddToCart = () => {
    const productToAdd = {
      ...data,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    };
    setCart([...cart, productToAdd]);
  };

  // Increment and Decrement functions
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const getImageForSizeAndColor = () => {
    
    if (selectedSize === "L" && selectedColor === "purple") {
      return "/images/large-purple-image.jpg"; 
    }
    if (selectedSize === "M" && selectedColor === "black") {
      return "/images/medium-black-image.jpg"; 
    }
    if (selectedSize === "XL" && selectedColor === "black") {
      return "/images/large-black-image.jpg"; 
    }
    
    return data?.image; // Fallback to default image
  };
  

  return (
    <div>
      <BreadCrumb title="Product Page" url="/" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full max-w-md mx-auto sm:max-w-none">
              <Image
                src={getImageForSizeAndColor()} // Dynamically change image
                alt="Product main view"
                layout="responsive"
                height={400}
                width={400}
                className="object-cover rounded-lg"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 sm:justify-center overflow-x-auto">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 border rounded-lg cursor-pointer overflow-hidden"
                >
                  <Image 
                    src={getImageForSizeAndColor()} // Dynamically change thumbnail
                    alt={`Product view ${index}`}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">{data?.title}</h1>
              <p className="text-xl text-gray-700">Rs. {data?.price}.00</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-500">(5 Customer Reviews)</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Setting the bar as one of the loudest speakers in its class, the Kilburn
              is a compact, stout-hearted hero with a well-balanced audio that boasts
              clear midrange and extended highs for a superior sound experience.
            </p>

            {/* Size Selection */}
            <div>
              <span className="block text-sm font-medium text-gray-700">Size</span>
              <div className="flex gap-2 mt-2">
                {["M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 border rounded-lg flex items-center justify-center text-sm hover:bg-gray-100 ${selectedSize === size ? 'bg-gray-300' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <span className="block text-sm font-medium text-gray-700">Color</span>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setSelectedColor("purple")}
                  className={`w-6 h-6 rounded-full bg-purple-600 ${selectedColor === 'purple' ? 'border-2 border-black' : ''}`}
                />
                <button
                  onClick={() => setSelectedColor("black")}
                  className={`w-6 h-6 rounded-full bg-black ${selectedColor === 'black' ? 'border-2 border-black' : ''}`}
                />
                <button
                  onClick={() => setSelectedColor("yellow")}
                  className={`w-6 h-6 rounded-full bg-yellow-700 ${selectedColor === 'yellow' ? 'border-2 border-black' : ''}`}
                />
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button onClick={decrementQuantity} className="px-4 py-2 border-r">-</button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-none focus:outline-none"
                />
                <button onClick={incrementQuantity} className="px-4 py-2 border-l">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                Add To Cart
              </button>
            </div>

            {/* Cart Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} className="flex justify-between py-2">
                      <span>{item.title} - {item.size} - {item.color} (x{item.quantity})</span>
                      <span>Rs. {item.price * item.quantity}.00</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <hr className="text-[#FFFFFF] w-full my-2 mb-8 " />
        <div className="my-10 text-center">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#9F9F9F]">
            <p className="text-black font-semibold cursor-pointer hover:underline">Description</p>
            <p className="cursor-pointer hover:underline">Additional Information</p>
            <p className="cursor-pointer hover:underline">Reviews [5]</p>
          </div>

          {/* Description Section */}
          <div className="grid gap-6 mt-6 text-[#9F9F9F] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] md:text-[18px] md:leading-[30px] px-4 sm:px-8 md:px-16 lg:px-24">
            <p>
              Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable
              look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound that is
              both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your
              personal preferences, while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>
          
          {/* Image Section */}
          <div className="flex flex-col md:flex-row gap-6 mt-12">
            <div className="flex-1 flex justify-center items-center bg-[#FFF9E5] p-4 rounded-lg shadow-md">
              <Image
                className="max-w-full h-auto object-contain"
                src="/cloudsofa.png"
                alt="Mayur Sofa"
                width={300}
                height={200}
                priority
              />
            </div>
            <div className="flex-1 flex justify-center items-center bg-[#FFF9E5] p-4 rounded-lg shadow-md">
              <Image
                className="max-w-full h-auto object-contain"
                src="/hersofa.png"
                alt="Mayur Sofa"
                width={300}
                height={200}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <ShortSec title="More Products" />
      <Service />
    </div>
  );
}
