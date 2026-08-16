import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const Product = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast.success("Item Added To Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item Removed From");
  };

  return (
    <div
      className="
        w-full
        max-w-[270px]
        min-h-[430px]
        bg-white
        rounded-lg
        border border-gray-100
        p-4
        flex flex-col
        justify-between
        shadow-sm
        transition-all
        duration-300
        ease-in-out
        hover:shadow-xl
        hover:-translate-y-2
      "
    >
      {/* Product Title */}
      <div className="mb-2">
        <p
          className="
            text-[17px]
            font-semibold
            text-gray-800
            truncate
          "
          title={product.title}
        >
          {product.title}
        </p>
      </div>

      {/* Description */}
      <div className="mb-3 h-[42px]">
        <p className="text-[12px] leading-5 text-gray-400">
          {product.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      {/* Image */}
      <div
        className="
          h-[230px]
          w-full
          flex
          items-center
          justify-center
          overflow-hidden
          mb-4
        "
      >
        <img
          src={product.image}
          alt={product.title}
          className="
            h-full
            w-full
            object-contain
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between gap-3 mt-auto">
        {/* Price */}
        <p className="text-lg font-bold text-green-500">
          ${product.price}
        </p>

        {/* Cart Button */}
        {cart.some((p) => p.id === product.id) ? (
          <button
            onClick={removeFromCart}
            className="
              px-4
              py-2
              rounded-full
              border
              border-gray-400
              bg-white
              text-gray-700
              text-[11px]
              font-semibold
              uppercase
              tracking-wide
              hover:bg-gray-800
              hover:text-white
              hover:border-gray-800
              transition-all
              duration-200
              cursor-pointer
            "
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="
              px-4
              py-2
              rounded-full
              border
              border-gray-400
              bg-white
              text-gray-700
              text-[11px]
              font-semibold
              uppercase
              tracking-wide
              hover:bg-green-500
              hover:text-white
              hover:border-green-500
              transition-all
              duration-200
              cursor-pointer
            "
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;