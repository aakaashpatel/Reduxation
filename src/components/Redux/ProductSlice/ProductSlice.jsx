import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  SUCCESS: "SUCCESS",
  Error: "error",
  Loading: "LOADING",
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.SUCCESS,
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProduct, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;
