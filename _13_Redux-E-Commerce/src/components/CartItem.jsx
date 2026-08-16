import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed From Cart");
  };

  return (
    <div
      className="
        w-full
        rounded-xl
        border border-gray-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex gap-5">
        {/* Product Image */}
        <div
          className="
            flex
            h-32
            w-32
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-lg
            bg-gray-50
            sm:h-40
            sm:w-40
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="
              h-full
              w-full
              object-contain
              p-3
              transition-transform
              duration-300
              hover:scale-110
            "
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-1 flex-col justify-between">
          {/* Title */}
          <div>
            <h1 className="line-clamp-2 text-lg font-semibold text-gray-800 sm:text-xl">
              {item.title}
            </h1>

            {/* Description */}
            <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
              {item.description}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="mt-4 flex items-center justify-between">
            {/* Price */}
            <p className="text-xl font-bold text-green-500">
              ${Number(item.price).toFixed(2)}
            </p>

            {/* Delete */}
            <button
              onClick={removeFromCart}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-red-50
                text-red-500
                transition-all
                duration-200
                hover:bg-red-500
                hover:text-white
                hover:shadow-md
                active:scale-90
                cursor-pointer
              "
              aria-label="Remove item"
            >
              <MdDelete className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;