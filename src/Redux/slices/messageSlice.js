// src/redux/slices/manifestSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createMessageCricket = createAsyncThunk(
  'manifest/createMessageCricket',
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.post(
        'https://backoffice.rua.com.ng/api/user/message/create-ticket',
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
export const fetchMessageAllCricket = createAsyncThunk(
  'manifest/fetchMessageAllCricket',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.get('https://backoffice.rua.com.ng/api/user/message/tickets', {
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


export const fetchAllCricketReferences = createAsyncThunk(
  'manifest/fetchAllCricketReferences',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.get(`https://backoffice.rua.com.ng/api/user/message/tickets/${id}`, {
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

const messageSlice = createSlice({
  name: 'manifest',
  initialState: {
    loading: false,
    success: false,
    error: null,
    cricketsuccess: null,
dataMessage: null,
messageData: null,
  },
  reducers: {
    resetManifestState: (state) => {
      state.manifestsuccess = null;
      
    },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMessageCricket.pending, (state) => {
        state.loading = true;
        state.cricketsuccess = null;
        state.error = null;
      })
      .addCase(createMessageCricket.fulfilled, (state, action) => {
        state.loading = false;
        state.cricketsuccess = action.payload.status;
        state.data = action.payload;
      })
      .addCase(createMessageCricket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    

       builder
      .addCase(fetchMessageAllCricket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessageAllCricket.fulfilled, (state, action) => {
        state.loading = false;
        state.dataMessage = action.payload;
      })
      .addCase(fetchMessageAllCricket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch manifest';
      });

         builder
      .addCase(fetchAllCricketReferences.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCricketReferences.fulfilled, (state, action) => {
        state.loading = false;
        state.messageData = action.payload;
      })
      .addCase(fetchAllCricketReferences.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch manifest';
      });


        
  },
});

export const { } = messageSlice.actions;
export default messageSlice.reducer;
