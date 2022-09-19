import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface CartState {
    items: { [id: string]: number}
}

const initialState: CartState = {
    items: {}
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<string>) {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id]++;
            } else {
                state.items[id] = 1;
            }
        },
        updateQuantity(state, action: PayloadAction<{ id: string, quantity: number}>) {
            const { id, quantity } = action.payload;
            state.items[id] = quantity;
        }
    }
})

export const { addItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer

export const getMemoizedNumitems = createSelector(
    (state: RootState) => state.cart.items,
    (items) => {
        console.log("Calling the items");
        let numOfItems = 0;
        for (let id in items) {
            numOfItems += items[id];
        }
        return numOfItems;
    }
)

export const getTotalPrice = createSelector(
    (state: RootState) => state.cart.items,
    (state: RootState) => state.products.products,
    (items, products) => {
        let total = 0;
        for (let id in items) {
            total += products[id].price * items[id];
        }
        return total
    }
)