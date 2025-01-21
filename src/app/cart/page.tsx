"use client";
import { useState } from "react";
import Service from "@/components/Service";
import BreadCrumb from "@/components/BreadCrumb";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const [cart, setCart] = useState<any[]>([]); // Array to store cart items
  const pricePerUnit = 250000; // Static price per unit

  // Function to handle adding a product to the cart
  const handleAddToCart = (product: any, quantity: number) => {
    const newProduct = { ...product, quantity };
    setCart((prevCart) => [...prevCart, newProduct]);
  };

  // Handle quantity change for each product
  const handleQuantityChange = (index: number, event: any) => {
    const updatedCart = [...cart];
    const newQuantity = Math.max(1, parseInt(event.target.value) || 1);
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  // Calculate subtotal for each product
  const calculateSubtotal = (quantity: number) => {
    return quantity * pricePerUnit;
  };

  return (
    <div>
      <BreadCrumb title="Cart" url="cart" />
      <div className="flex justify-center items-center mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Table for Large Screens */}
            <div className="hidden sm:block lg:col-span-2 bg-white shadow-md rounded-lg">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-yellow-100">
                    <th className="text-left py-4 px-6 text-gray-600 font-medium">
                      Product
                    </th>
                    <th className="text-left py-4 px-6 text-gray-600 font-medium">
                      Price
                    </th>
                    <th className="text-left py-4 px-6 text-gray-600 font-medium">
                      Quantity
                    </th>
                    <th className="text-left py-4 px-6 text-gray-600 font-medium">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-4 px-6 flex items-center">
                        <Image
                          src={item.image || "/default-image.png"} // Assuming image property is added to cart item
                          alt={item.title}
                          width={64}
                          height={64}
                          className="rounded"
                        />
                        <span className="ml-4 text-gray-700">{item.title}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        Rs. {pricePerUnit.toLocaleString()}
                      </td>
                      <td className="py-4 px-6">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(index, e)}
                          className="w-16 border border-gray-300 rounded p-1 text-center"
                        />
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        Rs. {calculateSubtotal(item.quantity).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Cart Totals */}
            <div className="bg-morelightyellow shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 border-b pb-4 mb-4">
                Cart Totals
              </h2>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>
                  Rs.{" "}
                  {cart.reduce(
                    (total, item) => total + calculateSubtotal(item.quantity),
                    0
                  ).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-darkyellow font-bold text-lg">
                <span>Total</span>
                <span>
                  Rs.{" "}
                  {cart.reduce(
                    (total, item) => total + calculateSubtotal(item.quantity),
                    0
                  ).toLocaleString()}
                </span>
              </div>
              <Link href={"/checkout"}>
                <button className="mt-6 w-full bg-lightyellow hover:bg-darkyellow text-black py-3 px-4 rounded shadow">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Service />
    </div>
  );
}
