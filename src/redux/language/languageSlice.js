import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEnglish: false,
};

const langSlice = createSlice({
  name: 'isEnglish',
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      console.log(payload);
      state.isEnglish = payload;
    },
  },
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;
