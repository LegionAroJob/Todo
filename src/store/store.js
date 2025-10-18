import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./slices/itemsSlice.js";
import { blocksReducer } from "./slices/BlocksSlice.js";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    blocks: blocksReducer,
  },
});
