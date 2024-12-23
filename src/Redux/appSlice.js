import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSideBar: false,
  dropdowVisible: false,
  itemDropdown: false,
  complainDropdown: false,
  emergencyDropdown: false,
  reportCrimeDropdown: false,
  createdRide: false,
  createdItem: false,
  createdComplain: false,
  createdEmergency: false,
  createdCrime: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOpenSideBar: (state) => {
      state.openSideBar = !state.openSideBar;
    },
    setDropdownVisible: (state) => {
      state.dropdowVisible = !state.dropdowVisible
    },
    setItemVisible: (state) => {
      state.itemDropdown = !state.itemDropdown
    },
    setComplainVisible: (state) => {
      state.complainDropdown = !state.complainDropdown
    },
    setEmergencyVisible: (state) => {
      state.emergencyDropdown = !state.emergencyDropdown
    },
    setCrimeVisible: (state) => {
      state.reportCrimeDropdown = !state.reportCrimeDropdown
    },
    setCreatedRide: (state) => {
      state.createdRide = !state.createdRide
    },
    setCreatedItem: (state) => {
      state.createdItem = !state.createdItem
    },
    setCreatedComplain: (state) => {
      state.createdComplain = !state.createdComplain
    },
    setCreatedEmergency: (state) => {
      state.createdEmergency = !state.createdEmergency
    },
    setCreatedCrime: (state) => {
      state.createdCrime = !state.createdCrime
    },
  },
});
export const { setOpenSideBar,  setDropdownVisible, setItemVisible,
   setComplainVisible, setEmergencyVisible, setCrimeVisible, setCreatedCrime,
    setCreatedRide, setCreatedItem, setCreatedComplain, setCreatedEmergency} = appSlice.actions;
export default appSlice.reducer;

