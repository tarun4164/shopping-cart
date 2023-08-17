import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productlist",
  initialState: {
    isLoading: false,
    products: [],
  },
  reducers: {
    getFetchProducts(state) {
      state.isLoading = true;
    },
    getProductsDataSuccessfully(state, action) {
      console.log(action);
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getFetchProducts, getProductsDataSuccessfully } =
  productSlice.actions;

export default productSlice.reducer;
