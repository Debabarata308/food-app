import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCard, setActiveCard] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed right-0 top-0 lg:w-[20vw] w-full h-full p-5 bg-white mb-3
      ${activeCard ? "translate-x-0" : "translate-x-full"}
      transition-all duration-500 z-50
      `}
      >
        <div className="flex justify-between my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCard(!activeCard)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text--gray-800">
            Your Cart Is Empty
          </h2>
        )}
        <div className="absolute bottom-0">
          <h3 className="font-semibold">Items : {totalQty}</h3>
          <h3 className="font-semibold">Total Amount: {totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            Chechout
          </button>
        </div>
      </div>
      <HiMiniShoppingCart
        onClick={() => setActiveCard(!activeCard)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
