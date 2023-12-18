import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || {};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: savedCart.items || [],
    totalPrice: savedCart.totalPrice || 0,
    discountPrice: savedCart.discountPrice || 0,
    deliveryFees: savedCart.deliveryFees || 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].count += 1; // increaseItemCart
        state.items[existingItemIndex].count -= 1; // decreaseItemCart
      } else {
        state.items.push({ card: action.payload.card, count: 1});
      }
      state.totalPrice += action.payload.card.info.price / 100 ||  action.payload.card.info.defaultPrice / 100 ;
      state.discountPrice = (state.totalPrice * 10) / 100;
      state.deliveryFees = (state.totalPrice * 5) / 100;
      localStorage.setItem("cart", JSON.stringify(state));
    },

   

    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.card.info.id;
      const itemIndexToRemove = state.items.findIndex(
        (item) => item.card.info.id === itemIdToRemove
      );

      if (itemIndexToRemove !== -1) {
        state.items.splice(itemIndexToRemove, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    // cartSlice.js
    decreaseItemCart: (state, action) => {
      const { id } = action.payload;
      const itemToDecrease = state.items.find((item) => item.card.info.id === id);
    
      if (itemToDecrease && itemToDecrease.count > 1) {
        itemToDecrease.count -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    
    },
    
    increaseItemCart: (state, action) => {
      const { id } = action.payload;
      const itemToIncrease = state.items.find((item) => item.card.info.id === id);
    
      if (itemToIncrease) {
        itemToIncrease.count += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    

  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart, decreaseItemCart, increaseItemCart } = cartSlice.actions;
