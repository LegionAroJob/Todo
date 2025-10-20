import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./slices/itemsSlice.js";
import { blocksReducer } from "./slices/blocksSlice.js";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    blocks: blocksReducer,
  },
});
