import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    isFormVisible: false, 
  },
  reducers: {
    showForm: state => {
      state.isFormVisible = true; 
    },
    hideForm: state => {
      state.isFormVisible = false; 
    },
  },
});

export const { showForm, hideForm } = formSlice.actions;

export default formSlice.reducer;
