// src/redux/slices/manifestSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// Fetch flagged rides with pagination
export const fetchAdminFlagRides = createAsyncThunk(
  "manifest/fetchAdminFlagRides",
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/lodge-ride/flag/agency?status=all&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);




export const adminListOfComplain = createAsyncThunk(
  "manifest/adminListOfComplain",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/lodge-complain/agency`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAdminFlagedItems = createAsyncThunk(
  "manifest/fetchAdminFlagedItems",
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/lodge-item/agency?status=all&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);


const adminSlice = createSlice({
  name: "manifest",
  initialState: {
    loading: false,
    success: false,
    currentPage: 1,
    totalPages: 1,
    flagItemData: null,
     meta: null, 
    error: null,
    flagData: null,
    adminComplainData: null,
  
  },
  reducers: {
    resetParkingState: (state) => {
      state.parkingsuccess = null;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminFlagRides.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchAdminFlagRides.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.flagData = action.payload;
        state.currentPage = action.payload.current_page;
        state.totalPages = action.payload.last_page;
      })
      .addCase(fetchAdminFlagRides.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

        builder
      .addCase(fetchAdminFlagedItems.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchAdminFlagedItems.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.flagItemData = action.payload;
        state.currentPage = action.payload.current_page;
        state.totalPages = action.payload.last_page;
      })
      .addCase(fetchAdminFlagedItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

         builder
      .addCase(adminListOfComplain.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(adminListOfComplain.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.adminComplainData = action.payload;
        state.currentPage = action.payload.current_page;
        state.totalPages = action.payload.last_page;
      })
      .addCase(adminListOfComplain.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });




  },
});

export const {
 
} = adminSlice.actions;
export default adminSlice.reducer;
