// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching Home data
export const fetchHomepage = createAsyncThunk(
  "content/fetchFeatures",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://backoffice.rua.com.ng/api/request/home-page");
      return response.data;
    } catch (error) {
      console.error("Error fetching Home data:", error);
      return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
    }
  }
);

export const fetchAboutpage = createAsyncThunk(
    "content/fetchAboutpage",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("https://backoffice.rua.com.ng/api/request/about-us");
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );


  export const fetctMemberpage = createAsyncThunk(
    "content/fetctMemberpage",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("https://backoffice.rua.com.ng/api/request/members-page");
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

    export const fetctNewspage = createAsyncThunk(
    "content/fetctNewspage",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("https://backoffice.rua.com.ng/api/request/blog");
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

  
    export const fetctMediapage = createAsyncThunk(
    "content/fetctMediapage",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("https://backoffice.rua.com.ng/api/request/media-files");
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

     export const fetctEventpage = createAsyncThunk(
    "content/fetctEventpage",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("https://backoffice.rua.com.ng/api/request/event");
        console.log("Event response:", response.data);
        
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

     export const fetctProjectpage = createAsyncThunk(
    "content/fetctProjectpage",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("https://backoffice.rua.com.ng/api/request/event");
        console.log("Event response:", response.data);
        
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );




const homeSlice = createSlice({
  name: "features",
  initialState: {
    data: null,
    homeObject: null,
    memberObject: null,
    newsObject: null,
    mediaObject: null,
    eventObject: null,
    projectObject: null,
    
    eventloading: false,
    medialoading: false,
    newsloading: false,
    aboutloading: false,
    memberloading: false,
    aboutObject: null,
    
    loading: false,
    error: null,
  },
  reducers: {}, // No synchronous reducers
  extraReducers: (builder) => {
    builder
      // Fetch Home Data
      .addCase(fetchHomepage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomepage.fulfilled, (state, action) => {
        state.loading = false;
        state.homeObject = action.payload;
      })
      .addCase(fetchHomepage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


      builder
      // Fetch Home Data
      .addCase(fetchAboutpage.pending, (state) => {
        state.aboutloading = true;
        state.error = null;
      })
      .addCase(fetchAboutpage.fulfilled, (state, action) => {
        state.aboutloading = false;
        state.aboutObject = action.payload;
      })
      .addCase(fetchAboutpage.rejected, (state, action) => {
        state.aboutloading = false;
        state.error = action.payload;
      });

      
      builder
      // Fetch Home Data
      .addCase(fetctEventpage.pending, (state) => {
        state.eventloading = true;
        state.error = null;
      })
      .addCase(fetctEventpage.fulfilled, (state, action) => {
        state.eventloading = false;
        state.eventObject = action.payload;
      })
      .addCase(fetctEventpage.rejected, (state, action) => {
        state.eventloading = false;
        state.error = action.payload;
      });
        
      builder
      // Fetch Home Data
      .addCase(fetctProjectpage.pending, (state) => {
        state.projectloading = true;
        state.error = null;
      })
      .addCase(fetctProjectpage.fulfilled, (state, action) => {
        state.projectloading = false;
        state.projectObject = action.payload;
      })
      .addCase(fetctProjectpage.rejected, (state, action) => {
        state.projectloading = false;
        state.error = action.payload;
      });

       builder
      // Fetch Home Data
      .addCase(fetctNewspage.pending, (state) => {
        state.newsloading = true;
        state.error = null;
      })
      .addCase(fetctNewspage.fulfilled, (state, action) => {
        state.newsloading = false;
        state.newsObject = action.payload;
      })
      .addCase(fetctNewspage.rejected, (state, action) => {
        state.newsloading = false;
        state.error = action.payload;
      });

        builder
      // Fetch Home Data
      .addCase(fetctMediapage.pending, (state) => {
        state.medialoading = true;
        state.error = null;
      })
      .addCase(fetctMediapage.fulfilled, (state, action) => {
        state.medialoading = false;
        state.mediaObject = action.payload;
      })
      .addCase(fetctMediapage.rejected, (state, action) => {
        state.medialoading = false;
        state.error = action.payload;
      });

 
      builder
      // Fetch Home Data
      .addCase(fetctMemberpage.pending, (state) => {
        state.memberloading = true;
        state.error = null;
      })
      .addCase(fetctMemberpage.fulfilled, (state, action) => {
        state.memberloading = false;
        state.memberObject = action.payload;
      })
      .addCase(fetctMemberpage.rejected, (state, action) => {
        state.memberloading = false;
        state.error = action.payload;
      });

  },
});

export default homeSlice.reducer;
