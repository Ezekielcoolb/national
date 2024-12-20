import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSideBar: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOpenSideBar: (state) => {
      state.openSideBar = !state.openSideBar;
    },
  },
});
export const { setOpenSideBar } = appSlice.actions;
export default appSlice.reducer;
