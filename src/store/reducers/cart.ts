import { createSlice } from "@reduxjs/toolkit";

type ICard = {
  value: {
    id: number;
    title: string;
    image: string;
  }[];
};

const initialState: ICard = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const getItem = action.payload;
      const exist = state.value.find((Item) => Item.id === getItem.id);
      if (!exist) {
        state.value.push({ ...getItem });
      }
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
