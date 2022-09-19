import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../products/productsSlice";
import cartReducer from "../products/cartSlice";

const store = configureStore({
    reducer : {
        products: productsReducer,
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const selectProducts = (state:RootState) => state;

export default store;