import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    removeItemsByBlockId: (state, action) => {
      state.items = state.items.filter(
        (item) => item.blockId !== action.payload.blockId
      );
    },
    editTitleItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.title = action.payload.title;
      }
    },
    isCompletedItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.completed = !item.completed;
      }
    },
  },
});

export const itemsReducer = itemsSlice.reducer;
export const {
  addItem,
  removeItem,
  editTitleItem,
  isCompletedItem,
  removeItemsByBlockId,
} = itemsSlice.actions;
