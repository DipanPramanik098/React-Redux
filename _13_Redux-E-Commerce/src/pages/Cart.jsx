import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate Total Amount
  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + Number(curr.price), 0)
    );
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-10">
      {cart.length > 0 ? (
        <div className="mx-auto max-w-6xl">
          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Your Cart
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Review your items before checkout.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    itemIndex={index}
                  />
                );
              })}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                {/* Summary Header */}
                <div className="mb-6 border-b border-gray-200 pb-5">
                  <p className="text-sm font-medium uppercase tracking-wider text-green-500">
                    Your Cart
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-gray-800">
                    Summary
                  </h2>
                </div>

                {/* Total Items */}
                <div className="mb-4 flex items-center justify-between text-gray-600">
                  <span className="text-sm">
                    Total Items
                  </span>

                  <span className="font-semibold text-gray-800">
                    {cart.length}
                  </span>
                </div>

                {/* Subtotal */}
                <div className="mb-4 flex items-center justify-between text-gray-600">
                  <span className="text-sm">
                    Subtotal
                  </span>

                  <span className="font-semibold text-gray-800">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>

                {/* Shipping */}
                <div className="mb-5 flex items-center justify-between text-gray-600">
                  <span className="text-sm">
                    Shipping
                  </span>

                  <span className="font-semibold text-green-500">
                    FREE
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-800">
                      Total Amount
                    </span>

                    <span className="text-2xl font-bold text-green-500">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout */}
                <button
                  className="
                    mt-6
                    w-full
                    rounded-xl
                    bg-green-500
                    py-3
                    text-sm
                    font-bold
                    uppercase
                    tracking-wide
                    text-white
                    shadow-sm
                    transition-all
                    duration-200
                    hover:bg-green-600
                    hover:shadow-lg
                    active:scale-[0.98]
                    cursor-pointer
                  "
                >
                  Checkout Now
                </button>

                {/* Continue Shopping */}
                <Link to="/">
                  <button
                    className="
                      mt-3
                      w-full
                      rounded-xl
                      border
                      border-gray-300
                      bg-white
                      py-3
                      text-sm
                      font-semibold
                      text-gray-600
                      transition-all
                      duration-200
                      hover:border-gray-500
                      hover:text-gray-900
                      cursor-pointer
                    "
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Cart */
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <span className="text-4xl">🛒</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-800">
              Your Cart Is Empty!
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Looks like you haven't added anything to your cart yet.
              Start shopping and find something you love.
            </p>

            <Link to="/">
              <button
                className="
                  mt-7
                  rounded-xl
                  bg-green-500
                  px-8
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-green-600
                  hover:shadow-lg
                  active:scale-95
                  cursor-pointer
                "
              >
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;