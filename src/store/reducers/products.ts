import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.value = action.payload;
      console.log(state.value);
    },
    setLike(state, action) {
      const getItem = action.payload;
      const exist = state.value.find((Item) => Item.id === getItem.id);
      if (exist) {
        exist.like = getItem.like;
      }
      console.log(exist.like);
    },
  },
});

export const { addProducts, setLike } = productsSlice.actions;
export default productsSlice.reducer;
