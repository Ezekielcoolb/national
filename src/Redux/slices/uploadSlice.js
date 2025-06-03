// src/redux/slices/uploadSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const uploadImages = createAsyncThunk(
  'upload/uploadImages',
  async ({ files, folderName }, { rejectWithValue }) => {
    try {
      const uploadedUrls = [];

      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file); // not 'images[]'

        const response = await axios.post(
          `https://backoffice.rua.com.ng/api/fileupload/${folderName}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        // Assuming response returns a single URL per image upload
        uploadedUrls.push(response.data.data); // adjust if the key is different
      }

      return uploadedUrls; // all image URLs
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Upload failed');
    }
  }
);

const uploadSlice = createSlice({
  name: 'upload',
  initialState: {
    urls: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetUpload: (state) => {
      state.urls = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadImages.fulfilled, (state, action) => {
        state.loading = false;
        state.urls = action.payload;
      })
      .addCase(uploadImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetUpload } = uploadSlice.actions;

export default uploadSlice.reducer;
