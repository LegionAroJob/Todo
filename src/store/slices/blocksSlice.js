import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blocks: [{ id: Date.now(), title: "New Tasks" }],
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
  },
});

export const blocksReducer = blocksSlice.reducer;
export const { addBlock, removeBlock } = blocksSlice.actions;
