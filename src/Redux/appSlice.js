import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundChange: false,
  openSideBar: false,
  dropdowVisible: false,
  dropdowVisibleTwo: false,
  itemDropdown: false,
  complainDropdown: false,
  emergencyDropdown: false,
  reportCrimeDropdown: false,
  createdRide: false,
    createdManifest: false,
  createdItem: false,
  createdComplain: false,
  createdEmergency: false,
  createdCrime: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setBackgroundChange: (state) => {
      state.backgroundChange = !state.backgroundChange;
    },
       setBackgroundChangeToOriginal: (state) => {
      state.backgroundChange = false;
    },
    setOpenSideBar: (state) => {
      state.openSideBar = !state.openSideBar;
    },
    setDropdownVisible: (state) => {
      state.dropdowVisible = !state.dropdowVisible
    },
     setDropdownVisibleTwo: (state) => {
      state.dropdowVisibleTwo = !state.dropdowVisibleTwo
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
    setCreatedManifest: (state) => {
      state.createdManifest = !state.createdManifest
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
export const { setOpenSideBar,setBackgroundChange, setBackgroundChangeToOriginal, setCreatedManifest, setDropdownVisibleTwo, setDropdownVisible, setItemVisible,
   setComplainVisible, setEmergencyVisible, setCrimeVisible, setCreatedCrime,
    setCreatedRide, setCreatedItem, setCreatedComplain, setCreatedEmergency} = appSlice.actions;
export default appSlice.reducer;

