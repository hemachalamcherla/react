import { configureStore, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'tomato', price: 200.5 },
            { name: 'potato', price: 300.5 },
            { name: 'cucumber', price: 200.7 },
        ],
        nonveg: [
            { name: 'chicken', price: 500.0 },
            { name: 'mutton', price: 600.0 },
            { name: 'fish', price: 700.0 },
        ]
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], discount: 0 },
    reducers: {
        addTocart: (state, action) => {
            const item = state.items.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.items.find(item => item.name === action.payload.name);
            if (item) item.quantity += 1;
        },
        decrement: (state, action) => {
            const item = state.items.find(item => item.name === action.payload.name);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(i => i.name !== item.name);
                }
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload.name);
        },
        applyDiscount: (state, action) => {
            state.discount = action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;
export const { addTocart, increment, decrement, removeFromCart, applyDiscount } = cartSlice.actions;

