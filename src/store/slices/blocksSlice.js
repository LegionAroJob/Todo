import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blocks: [],
};
export const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    addBlock: (state, action) => {
      state.blocks.push(action.payload);
    },
    removeBlock: (state, action) => {
      state.blocks = state.blocks.filter(
        (block) => block.id !== action.payload.id
      );
    },
    editTitleBlock: (state, action) => {
      const block = state.blocks.find(
        (block) => block.id === action.payload.id
      );
      if (block) {
        block.title = action.payload.title;
      }
    },
  },
});

export const blocksReducer = blocksSlice.reducer;
export const { addBlock, removeBlock, editTitleBlock } = blocksSlice.actions;
