import { createSlice } from "@reduxjs/toolkit";

type IProducts = {
  value: {
    id: number;
    imageUrl: string;
    title: string;
    like: boolean;
    active: boolean;
  }[];
};

const initialState: IProducts = {
  value: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.value = action.payload;
    },
    setLike(state, action) {
      const getItem = action.payload;
      const exist = state.value.find((Item) => Item.id === getItem.id);
      if (exist) {
        exist.like = getItem.like;
      }
    },
    changeActive(state, action) {
      const getItem = action.payload;
      const exist = state.value.find((Item) => Item.id === getItem.id);
      if (exist) {
        exist.active = getItem.active;
      }
    },
  },
});

export const { addProducts, setLike, changeActive } = productsSlice.actions;
export default productsSlice.reducer;
