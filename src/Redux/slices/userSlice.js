// src/redux/slices/manifestSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createManifest = createAsyncThunk(
  'manifest/createManifest',
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.post(
        'https://backoffice.rua.com.ng/api/user/manifest/create',
        formData,
        {
          headers: {
             'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Optional: remove if no auth required
          },
        }
      );
console.log(response.data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


// Async thunk for GET manifest with token
export const fetchManifest = createAsyncThunk(
  'manifest/fetchManifest',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.get('https://backoffice.rua.com.ng/api/user/manifest', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
// Async thunk for GET manifest with token
export const fetchManifestById = createAsyncThunk(
  'manifest/fetchManifestById',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.get(`https://backoffice.rua.com.ng/api/user/manifest/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);


export const lodgeRide = createAsyncThunk(
  'manifest/lodgeRide',
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.post(
        'https://backoffice.rua.com.ng/api/user/lodge-ride/create',
        formData,
        {
          headers: {
             'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Optional: remove if no auth required
          },
        }
      );
console.log(response.data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchLodgedRide = createAsyncThunk(
  'manifest/fetchLodgedRide',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.get('https://backoffice.rua.com.ng/api/user/lodge-ride', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLodgeRideDetails = createAsyncThunk(
  'manifest/fetchLodgeRideDetails',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.get(`https://backoffice.rua.com.ng/api/user/lodge-ride/details/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);


export const flagRideNow = createAsyncThunk(
  'manifest/flagRideNow',
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.post(
        'https://backoffice.rua.com.ng/api/user/lodge-ride/flag/create',
        formData,
        {
          headers: {
             'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Optional: remove if no auth required
          },
        }
      );
console.log(response.data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchCompletedLodgedRide = createAsyncThunk(
  'manifest/fetchCompletedLodgedRide',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.get(`https://backoffice.rua.com.ng/api/user/lodge-ride/complete/end/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'manifest',
  initialState: {
    loading: false,
    success: false,
    error: null,
    logRidesuccess: null,
    lodgdRideData: null,
    CompletedRideDetail: null,
    lodgeRideDetail: null,
    logRideloading: false,
    completeLodgeLoading: false,
    flagRidesuccess: null,
    flagRideloading: false,
    lodgeRideDetailloading: false,
    manifestByloading: false,
    manifestDatabyId: null,
    manifestData: null,
    manifestsuccess: null,
    data: null,
  },
  reducers: {
    resetManifestState: (state) => {
      state.manifestsuccess = null;
      
    },
     resetLodgeState: (state) => {
      state.logRidesuccess = null;
      
    },
     resetFlagRideState: (state) => {
      state.flagRidesuccess = null;
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createManifest.pending, (state) => {
        state.loading = true;
        state.manifestsuccess = null;
        state.error = null;
      })
      .addCase(createManifest.fulfilled, (state, action) => {
        state.loading = false;
        state.manifestsuccess = action.payload.status;
        state.data = action.payload;
      })
      .addCase(createManifest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

        builder
      .addCase(lodgeRide.pending, (state) => {
        state.logRideloading = true;
        state.logRidesuccess = null;
        state.error = null;
      })
      .addCase(lodgeRide.fulfilled, (state, action) => {
        state.logRideloading = false;
        state.logRidesuccess = action.payload.status;
        state.data = action.payload;
      })
      .addCase(lodgeRide.rejected, (state, action) => {
        state.logRideloading = false;
        state.error = action.payload;
      });

      
        builder
      .addCase(flagRideNow.pending, (state) => {
        state.flagRideloading = true;
        state.flagRidesuccess = null;
        state.error = null;
      })
      .addCase(flagRideNow.fulfilled, (state, action) => {
        state.flagRideloading = false;
        state.flagRidesuccess = action.payload.status;
        state.data = action.payload;
      })
      .addCase(flagRideNow.rejected, (state, action) => {
        state.flagRideloading = false;
        state.error = action.payload;
      });


       builder
      .addCase(fetchLodgedRide.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLodgedRide.fulfilled, (state, action) => {
        state.loading = false;
        state.lodgdRideData = action.payload;
      })
      .addCase(fetchLodgedRide.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch manifest';
      });

        builder
      .addCase(fetchManifest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchManifest.fulfilled, (state, action) => {
        state.loading = false;
        state.manifestData = action.payload;
      })
      .addCase(fetchManifest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch manifest';
      });

          builder
      .addCase(fetchManifestById.pending, (state) => {
        state.manifestByloading = true;
        state.error = null;
      })
      .addCase(fetchManifestById.fulfilled, (state, action) => {
        state.manifestByloading = false;
        state.manifestDatabyId = action.payload;
      })
      .addCase(fetchManifestById.rejected, (state, action) => {
        state.manifestByloading = false;
        state.error = action.payload || 'Failed to fetch manifest';
      });

        builder
      .addCase(fetchLodgeRideDetails.pending, (state) => {
        state.lodgeRideDetailloading = true;
        state.error = null;
      })
      .addCase(fetchLodgeRideDetails.fulfilled, (state, action) => {
        state.lodgeRideDetailloading = false;
        state.lodgeRideDetail = action.payload;
      })
      .addCase(fetchLodgeRideDetails.rejected, (state, action) => {
        state.lodgeRideDetailloading = false;
        state.error = action.payload || 'Failed to fetch manifest';
      });

         builder
      .addCase(fetchCompletedLodgedRide.pending, (state) => {
        state.completeLodgeLoading = true;
        state.error = null;
      })
      .addCase(fetchCompletedLodgedRide.fulfilled, (state, action) => {
        state.completeLodgeLoading = false;
        state.CompletedRideDetail = action.payload;
      })
      .addCase(fetchCompletedLodgedRide.rejected, (state, action) => {
        state.completeLodgeLoading = false;
        state.error = action.payload || 'Failed to fetch manifest';
      });
  },
});

export const {resetFlagRideState, resetManifestState, resetLodgeState } = userSlice.actions;
export default userSlice.reducer;
