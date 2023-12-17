import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
}); 

export default appStore;
