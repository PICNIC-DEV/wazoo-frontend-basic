import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    item: [],
  },
  reducers: {
    setInfo(state, action) {
      const { item } = action.payload;
      state.item = item;
    },
  },
});

export const { setInfo } = searchSlice.actions;
export default searchSlice.reducer;
