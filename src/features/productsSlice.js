import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
       items: [],
       status: null
};

export const productsFetch = createAsyncThunk(
       "products/productsFetch",
       async() => {
              const response = await axios.get("https://fakestoreapi.com/products")
              return response.data
       }
);

const productsSlice = createSlice({
       name: "products",
       initialState,
       reducers: {},
       extraReducers: (builder) => {
              builder
                     .addCase(productsFetch.pending, (state) => {
                            state.status = "pending";
                     })
                     //handle the action creators types, immer
                     .addCase(productsFetch.fulfilled, (state, action)=> {
                            state.status = "success";
                            state.items = action.payload;
                     })
                     .addCase(productsFetch.rejected, (state)=> {
                            state.status = "rejected";
                     });
       },
});
export default productsSlice.reducer