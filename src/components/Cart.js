import { CARD_IMG } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeItem,
  decreaseItemCart,
  increaseItemCart,
} from "../store/cartSlice";
import { useState } from "react";
import React from "react";
const Cart = () => {
  const CartItem = useSelector((store) => store.cart.items);
  
  const dispatch = useDispatch();
 const itemCount = 1 //useSelector((store) => store.cart.items);
   const totalPrice =   useSelector((store) => store.cart.totalPrice);
   const discountPrice   =  useSelector((store) => store.cart.discountPrice);
   const deliveryFees   =  useSelector((store) => store.cart.deliveryFees);
  const finalAmount = totalPrice + deliveryFees - discountPrice
  const handleDecreaseItem = (menuItem) => {
    dispatch(decreaseItemCart({ id: menuItem.card.info.id }));
  };

  const handleIncreaseItem = (menuItem) => {
    dispatch(increaseItemCart({ id: menuItem.card.info.id }));
  };

  return (
    <div className="container-max py-8 pb-16 ">
      <h1 className="text-2xl font-bold text-black">cart</h1>
      <button
        className=" rounded-md bg-yellow-500  p-2 text-white m-2  "
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        clear
      </button>
      <div className="cart-body flex relative justify-center container-max py-8 pb-16 ">
        <div className="basis-7/12">
          <div className="w-6/12 m-auto">
            {Array.isArray(CartItem) && CartItem.length === 0 ? (
              <h1 className="text-black">Cart is empty</h1>
            ) : (
              Array.isArray(CartItem) &&
              CartItem.map((menuItem) => (
                <div key={menuItem.card && menuItem.card.info.id}>
                  <div className="basis-3/12">
                    <img
                      className="w-[164px] h-[164px]  object-cover block rounded-md aspect-square"
                      src={CARD_IMG + menuItem.card.info.imageId}
                    />
                  </div>
                  <div className="basis-9/12">
                    <span className="text-lg font-semibold">
                      {menuItem.card.info.name}
                    </span>
                    <p className="hidden md:block">
                      {menuItem.card.info.description}
                    </p>
                    <p className="font-bold mt-1 text-black opacity-70">
                      ₹
                      {menuItem.card.info.price
                        ? (menuItem.card.info.price / 100) *  itemCount
                        : (menuItem.card.info.defaultPrice / 100) * itemCount}{" "}
                      
                    </p>
                    <p>
                      {" "}
                      {menuItem.card.info.price
                        ? (menuItem.card.info.price / 100) * itemCount
                        : (menuItem.card.info.defaultPrice / 100) *  itemCount}{" "}
                       X {itemCount}{" "}
                    </p>
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <button
                          className="bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md"
                          onClick={() =>  handleDecreaseItem(menuItem)}
                        >
                          -
                        </button>
                        
                        <p className="font-bold  text-black w-8 h-8 flex justify-center items-center">
                          {menuItem.count}  
                        </p>
                        <button
                          className="bg-orange-500 text-white font-bold w-8 h-8 rounded-md"
                          onClick={() => handleIncreaseItem(menuItem)}
                        >
                          +
                        </button>
                      </div>
                      <div className="remove-btn relative">
                        {" "}
                        <button
                          className="border ml-20 border-orange-500 text-xs font-semibold text-orange-500 p-2 px-4 rounded-md
                        
                        "
                          onClick={() => {
                            dispatch(removeItem(menuItem));
                          }}
                        >
                          Remove
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="basis-5/12 h-fit sticky  p-8 rounded-md border shadow-md  -ml-[86px] w-[436px]">
          <h2 className="text-xl font-bold border-b pb-4 mb-6">
            Order Summary
          </h2>
          <div className="">
            <div className="price-item flex mb-6 justify-between">
              <p className="font-normal ">Price ( {CartItem.length} items)</p>
              <p className="font-bold text-lg"> {totalPrice } </p>
            </div>
            <div className="discount flex mb-6 justify-between">
              <p className="font-normal">Discount: </p>
              <p className="font-bold text-lg"> - ₹{discountPrice}</p>
            </div>
            <div className="delivery flex mb-6 justify-between">
              <p> Delivery charges  </p>
              <p className="font-bold text-lg">₹{deliveryFees}</p>
            </div>
            <div className="reward mb-6">
              <p className="">
                {" "}
                You'll save ₹{discountPrice} on this order 🎉{" "}
              </p>
            </div>
          </div>

          <div className="total-amt flex text-2xl font-bold justify-between mb-6 ">
            <p className=" "> Total Amount </p>
            <p className="text-orange-500 ">
              ₹{finalAmount.toFixed(2)}
            </p>
          </div>
          <div className="place-order ">
            <button className="w-full block mt-4 border-t uppercase font-bold text-lg bg-orange-600 text-white text-center p-4 rounded-md">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
