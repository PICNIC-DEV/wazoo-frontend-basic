import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    userId: null,
    item: null,
  },
  reducers: {
    setInfo(state, action) {
      const { userId } = action.payload;
      state.userId = userId;
    },
  },
});

export const { showModal, hideModal } = searchSlice.actions;
export default searchSlice.reducer;
