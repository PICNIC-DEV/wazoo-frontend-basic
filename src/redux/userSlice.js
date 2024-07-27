import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
  },
  reducers: {
    setInfo(state, action) {
      const { userId } = action.payload;
      state.userId = userId;
    },
  },
});

export const { setInfo } = userSlice.actions;
export default userSlice.reducer;
