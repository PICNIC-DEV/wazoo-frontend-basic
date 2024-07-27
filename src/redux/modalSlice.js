import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isVisible: false,
    modalType: null,
    item: null,
  },
  reducers: {
    showModal(state, action) {
      const { modalType, item } = action.payload;
      state.isVisible = true;
      state.modalType = modalType;
      state.item = item;
    },
    hideModal(state) {
      state.isVisible = false;
      state.modalType = null;
      state.item = null;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
