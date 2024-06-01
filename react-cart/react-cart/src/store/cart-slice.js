import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name: 'cart',
    initialState: {
        item: [],
        totalQuantity: 0,
        totalAmount: 0,
    },
    reducers:{
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.item.find(item => item.id === newItem.id)
            if(!existingItem) {
                state.item.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }else{
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        
        },
        removeItemFromCart() {}
    }
})