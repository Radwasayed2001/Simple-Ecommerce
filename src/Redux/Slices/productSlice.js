import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        cart:[]
    },
    reducers:{
        
    addToCart: (state, action)=>{
        state.cart.push(action.payload);
    },
    removeFromCart: (state,action)=>{
        state.cart.splice(action.payload,1);
    }
}
})
export const {addToCart,removeFromCart} = productSlice.actions;
export default productSlice.reducer;