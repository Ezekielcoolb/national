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

  
  export const fetchEventDetails = createAsyncThunk(
  "fetchServiceDetails/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://backoffice.rua.com.ng/api/request/blog/details/${id}`);
      return response.data?.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

  export const fetchProjectDetails = createAsyncThunk(
  "fetchProjectDetails/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://backoffice.rua.com.ng/api/request/project/details/${id}`);
      return response.data?.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


  export const fetctGeneralSetting= createAsyncThunk(
    "content/fetctGeneralSetting",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("https://backoffice.rua.com.ng/api/request/general-settings");
        console.log("Event response:", response.data);
        
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

    export const fetctGeneralAllAgency= createAsyncThunk(
    "content/fetctGeneralAllAgency",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("https://backoffice.rua.com.ng/api/request/agencies");
        console.log(response.data);
        
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

      export const TermsAndPrivacy= createAsyncThunk(
    "content/TermsAndPrivacy",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("https://backoffice.rua.com.ng/api/request/web-pages");
        console.log(response.data);
        
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

export const submitContactForm = createAsyncThunk(
  'contact/submit',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://backoffice.rua.com.ng/api/request/contact-us',
        formData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


const homeSlice = createSlice({
  name: "features",
  initialState: {
    data: null,
    homeObject: null,
    memberObject: null,
    eventDetail: null,
    agencyList: null,
    projectDetail: null,
    generalObject: null,
    successContact: null,
    errorContactMessage: null,
    projectDetailloading: false,
    newsObject: null,
    mediaObject: null,
    eventObject: null,
    submitloading: false,
    projectObject: null,
    eventDetailloading: false,
    eventloading: false,
    medialoading: false,
    newsloading: false,
    aboutloading: false,
    memberloading: false,
    aboutObject: null,
    privacyTerms: null,
    loading: false,
    error: null,
  },
  reducers: {

     resetMessageContact: (state) => {
      state.successContact = null;
      state.errorContactMessage = null;
    }
  }, // No synchronous reducers
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
      .addCase(submitContactForm.pending, (state) => {
        state.submitloading = true;
        state.success = false;
        state.errorContactMessage = null;
         state.successContact = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.submitloading = false;
        state.success = true;
        state.successContact = action.payload.data
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.submitloading = false;
        state.errorContactMessage = action.payload.message || 'Something went wrong';
      });


      builder
      // Fetch Home Data
      .addCase(fetctGeneralAllAgency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetctGeneralAllAgency.fulfilled, (state, action) => {
        state.loading = false;
        state.agencyList = action.payload;
      })
      .addCase(fetctGeneralAllAgency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      builder
      // Fetch Home Data
      .addCase(TermsAndPrivacy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(TermsAndPrivacy.fulfilled, (state, action) => {
        state.loading = false;
        state.privacyTerms = action.payload;
      })
      .addCase(TermsAndPrivacy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      builder
      // Fetch Home Data
      .addCase(fetchAboutpage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAboutpage.fulfilled, (state, action) => {
        state.loading = false;
        state.aboutObject = action.payload;
      })
      .addCase(fetchAboutpage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

          builder
      // Fetch Home Data
      .addCase(fetchEventDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEventDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.eventDetail = action.payload;
      })
      .addCase(fetchEventDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

              builder
      // Fetch Home Data
      .addCase(fetctGeneralSetting.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetctGeneralSetting.fulfilled, (state, action) => {
        state.loading = false;
        state.generalObject = action.payload;
      })
      .addCase(fetctGeneralSetting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

   builder
      // Fetch Home Data
      .addCase(fetchProjectDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.projectDetail = action.payload;
      })
      .addCase(fetchProjectDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      
      builder
      // Fetch Home Data
      .addCase(fetctEventpage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetctEventpage.fulfilled, (state, action) => {
        state.loading = false;
        state.eventObject = action.payload;
      })
      .addCase(fetctEventpage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
        
      builder
      // Fetch Home Data
      .addCase(fetctProjectpage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetctProjectpage.fulfilled, (state, action) => {
        state.loading = false;
        state.projectObject = action.payload;
      })
      .addCase(fetctProjectpage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

       builder
      // Fetch Home Data
      .addCase(fetctNewspage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetctNewspage.fulfilled, (state, action) => {
        state.loading = false;
        state.newsObject = action.payload;
      })
      .addCase(fetctNewspage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

        builder
      // Fetch Home Data
      .addCase(fetctMediapage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetctMediapage.fulfilled, (state, action) => {
        state.loading = false;
        state.mediaObject = action.payload;
      })
      .addCase(fetctMediapage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

 
      builder
      // Fetch Home Data
      .addCase(fetctMemberpage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetctMemberpage.fulfilled, (state, action) => {
        state.loading = false;
        state.memberObject = action.payload;
      })
      .addCase(fetctMemberpage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});
export const {resetMessageContact } = homeSlice.actions;
export default homeSlice.reducer;
