import { createSlice } from '@reduxjs/toolkit';
    
    const initialState = {
        products:[],
    }

    const cartSlice = createSlice({
        name: 'Product Cart',
        initialState,
        reducers:{
            addToCart:(state, action)=>{
                state.products.push(action.payload);
            },
        },
    });

    export const { addToCart } = cartSlice.actions;
    export default cartSlice.reducer;