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
        state.items.push({ card: action.payload.card, count: 1 });
      }
      state.totalPrice +=
        action.payload.card.info.price / 100 ||
        action.payload.card.info.defaultPrice / 100;
      state.discountPrice = (state.totalPrice * 10) / 100;
      state.deliveryFees = (state.totalPrice * 5) / 100;
      localStorage.setItem("cart", JSON.stringify(state));
      localStorage.setItem("cart", JSON.stringify(state.totalPrice));

    },

    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.card.info.id;
      const itemToRemove = state.items.find(
        (item) => item.card.info.id === itemIdToRemove
      );

      if (itemToRemove) {
        
        state.totalPrice -=
          itemToRemove.card.info.price / 100 ||
          itemToRemove.card.info.defaultPrice / 100;
        state.discountPrice = (state.totalPrice * 10) / 100;
        state.deliveryFees = (state.totalPrice * 5) / 100;
        state.items = state.items.filter(
          (item) => item.card.info.id !== itemIdToRemove
        );
       localStorage.setItem("cart", JSON.stringify({ items: state.items }));
       //localStorage.setItem("cart" ,  JSON.stringify({ totalPrice :  state.totalPrice}));
        // localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.deliveryFees = 0;
      state.totalPrice = 0;
      state.discountPrice = 0;
    },
    // cartSlice.js
    decreaseItemCart: (state, action) => {
      const { id } = action.payload;
      const itemToDecrease = state.items.find(
        (item) => item.card.info.id === id
      );

      if (itemToDecrease && itemToDecrease.count > 1) {
        itemToDecrease.count -= 1;
        state.totalPrice -=
          itemToDecrease.card.info.price / 100 ||
          itemToDecrease.card.info.defaultPrice / 100;
        state.discountPrice = (state.totalPrice * 10) / 100;
        state.deliveryFees = (state.totalPrice * 5) / 100;
      }
     
    },

    increaseItemCart: (state, action) => {
      const { id } = action.payload;
      const itemToIncrease = state.items.find(
        (item) => item.card.info.id === id
      );

      if (itemToIncrease) {
        itemToIncrease.count += 1;
        state.totalPrice +=
          itemToIncrease.card.info.price / 100 ||
          itemToIncrease.card.info.defaultPrice / 100;
        state.discountPrice = (state.totalPrice * 10) / 100;
        state.deliveryFees = (state.totalPrice * 5) / 100;
      }
   
    },
  },
});

export default cartSlice.reducer;

export const {
  addItem,
  removeItem,
  clearCart,
  decreaseItemCart,
  increaseItemCart,
} = cartSlice.actions;
