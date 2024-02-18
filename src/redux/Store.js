import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/Cradslice.jsx";
import CategorySlice from "./slices/CategorySlice.jsx";
import SearchSlice from "./slices/SearchSlice.jsx";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search:SearchSlice
  }
});

export default Store;
