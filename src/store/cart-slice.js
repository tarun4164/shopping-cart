import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart-slice',
    initialState: {
        items: [],
        toggle: false
    },
    reducers: {
        toggleFavItems(state){
            state.toggle= true
        },
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem=state.items.find((item=> item.id === newItem.id));
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    quantity:1,
                    description: newItem.description,
                    isAdded:true
                })
            }else {
                existingItem.quantity++;
            }
        },
        removeItemToCart(state,action){
            const id = action.payload;
            const existingItem=state.items.find((item=> item.id === id));
            if(existingItem.quantity === 1){
                state.items = state.items.filter((item)=> item.id !==id)
            } else {
                existingItem.quantity--;
            }
        }
    }
})

export const {addItemToCart,removeItemToCart,toggleFavItems } = cartSlice.actions;
export default cartSlice.reducer;