// src/redux/slices/manifestSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createParkingSpace = createAsyncThunk(
  "manifest/createParkingSpace",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.post(
        "https://backoffice.rua.com.ng/api/user/parking-space/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
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

export const editParkingSpace = createAsyncThunk(
  "manifest/editParkingSpace",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.patch(
        "https://backoffice.rua.com.ng/api/user/parking-space/edit",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
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
export const fetchMyParkingSpace = createAsyncThunk(
  "manifest/fetchMyParkingSpace",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        "https://backoffice.rua.com.ng/api/user/parking-space",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const fetchExploreParkingSpace = createAsyncThunk(
  "manifest/fetchExploreParkingSpace",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        "https://backoffice.rua.com.ng/api/user/parking-space/explore?status=available",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const bookParkSpace = createAsyncThunk(
  "manifest/bookParkSpace",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/parking-space/booking/${id}`,
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

export const fetchMyParkinSpaceDetails = createAsyncThunk(
  "manifest/fetchMyParkinSpaceDetails",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/parking-space/details/single/${id}`,
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

export const cancelBookedParkSpace = createAsyncThunk(
  "manifest/cancelBookedParkSpace",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/parking-space/booking/outgoing/cancel/${id}`,
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

export const myBookedParkingSpace = createAsyncThunk(
  "manifest/myBookedParkingSpace",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/parking-space/booking/outgoing/get`,
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

export const incomingBookedParkingSpace = createAsyncThunk(
  "manifest/incomingBookedParkingSpace",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/parking-space/booking/incoming/get`,
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

export const changeBookingStatus = createAsyncThunk(
  "booking/changeBookingStatus",
  async ({ id, changedStatus }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/parking-space/booking/incoming/change-status/${id}/${changedStatus}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "An error occurred");
    }
  }
);


export const createComplain = createAsyncThunk(
  "manifest/createComplain",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.post(
        "https://backoffice.rua.com.ng/api/user/lodge-complain/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
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

export const fetchMyComplains = createAsyncThunk(
  "manifest/fetchMyComplains",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        "https://backoffice.rua.com.ng/api/user/lodge-complain",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);


export const fetchComplainDetails = createAsyncThunk(
  "booking/fetchComplainDetails",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/lodge-complain/details/${id}}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "An error occurred");
    }
  }
);

export const createTrafficUpdate = createAsyncThunk(
  "manifest/createTrafficUpdate",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.post(
        "https://backoffice.rua.com.ng/api/user/traffic-updates/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
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

export const fetchMyTrafficUpdates = createAsyncThunk(
  "manifest/fetchMyTrafficUpdates",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        "https://backoffice.rua.com.ng/api/user/traffic-updates",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMyTrafficDetails = createAsyncThunk(
  "booking/fetchMyTrafficDetails",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/traffic-updates/details/${id}}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "An error occurred");
    }
  }
);


export const fetchExploreTrafficUpdates = createAsyncThunk(
  "manifest/fetchExploreTrafficUpdates",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        "https://backoffice.rua.com.ng/api/user/traffic-updates/explore",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllToBeFollowed = createAsyncThunk(
  "manifest/fetchAllToBeFollowed",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        "https://backoffice.rua.com.ng/api/user/follow",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);


export const followOrUnfollowAgency = createAsyncThunk(
  "booking/followOrUnfollowAgency",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/follow/follow-or-unfollow/${id}}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "An error occurred");
    }
  }
);

export const lodgeItem = createAsyncThunk(
  "lodge/lodgeItem",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.post(
        "https://backoffice.rua.com.ng/api/user/lodge-item/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
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

export const fetchLodgedItemUser = createAsyncThunk(
  "manifest/fetchLodgedItemUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        "https://backoffice.rua.com.ng/api/user/lodge-item?status=all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLodgedItemDetailsUser = createAsyncThunk(
  "booking/fetchLodgedItemDetailsUser",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/lodge-item/details/${id}}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "An error occurred");
    }
  }
);

export const flagItemNow = createAsyncThunk(
  'manifest/flagItemNow',
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.post(
        'https://backoffice.rua.com.ng/api/user/lodge-item/flag/create',
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

export const fetchCompletedLodgedItem = createAsyncThunk(
  'manifest/fetchCompletedLodgedItem',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('ruaUserToken');

      const response = await axios.get(`https://backoffice.rua.com.ng/api/user/lodge-item/complete/end/${id}`, {
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


export const fetchFlagedRideByUser = createAsyncThunk(
  "booking/fetchFlagedRideByUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/lodge-ride/flag?status=all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "An error occurred");
    }
  }
);

export const fetchFlagedItemsByUser = createAsyncThunk(
  "booking/fetchFlagedItemsByUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ruaUserToken");

      const response = await axios.get(
        `https://backoffice.rua.com.ng/api/user/lodge-item/flag?status=all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "An error occurred");
    }
  }
);

const secondUserSlice = createSlice({
  name: "manifest",
  initialState: {
    loading: false,
    success: false,
    error: null,
    myparking: null,
    myParkDetails: null,
    listOfUserFlagedRide: null,
    bookedstatusparking: null,
    bookedstatusloading: false,
    lodgeItemloading: false,
    lodgeItemsuccess: null,
    parkingloading: false,
    parkingsuccess: null,
    listOfUserFlagedItems: null,
    trafficData: null,
    flagItemloading: false,
    exploreTrafficData: null,
    exploreparking: null,
    flagItemsuccess: null,
    bookingloading: false,
    complainloading: false,
    itemCompleteLoading: false,
    trafficloading: false,
    trafficsuccess: null,
    trafficDetailsMy: null,
    editparkingsuccess: null,
    lodgedItemDetails: null,
    lodgedItemUser: null,
    complainsuccess: null,
    editparkingloading: false,
    cancelBookingloading: false,
    cancelbookingsuccess: null,
    incomingparking: null,
    bookedparking: null,
    bookparking: null,
    bookparkingsuccess: null,
  },
  reducers: {
    resetParkingState: (state) => {
      state.parkingsuccess = null;
    },
     resetTrafficState: (state) => {
      state.trafficsuccess = null;
    },
    resetFlagItemState: (state) => {
      state.flagItemsuccess = null;
    },
     resetLodgeItemState: (state) => {
      state.lodgeItemsuccess = null;
    },
     resetComplainState: (state) => {
      state.complainsuccess = null;
    },
     resetEditParkingState: (state) => {
      state.editparkingsuccess = null;
    },
    resetBookingState: (state) => {
      state.bookparkingsuccess = null;
    },
    resetCancelBookingState: (state) => {
      state.cancelbookingsuccess = null;
    },
    resetBookingStatusState: (state) => {
      state.bookedstatusparking = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createParkingSpace.pending, (state) => {
        state.parkingloading = true;
        state.parkingsuccess = null;
        state.error = null;
      })
      .addCase(createParkingSpace.fulfilled, (state, action) => {
        state.parkingloading = false;
        state.parkingsuccess = action.payload.status;
        state.data = action.payload;
      })
      .addCase(createParkingSpace.rejected, (state, action) => {
        state.parkingloading = false;
        state.error = action.payload;
      });

         builder
            .addCase(flagItemNow.pending, (state) => {
              state.flagItemloading = true;
              state.flagItemsuccess = null;
              state.error = null;
            })
            .addCase(flagItemNow.fulfilled, (state, action) => {
              state.flagItemloading = false;
              state.flagItemsuccess = action.payload.status;
              state.data = action.payload;
            })
            .addCase(flagItemNow.rejected, (state, action) => {
              state.flagItemloading = false;
              state.error = action.payload;
            });


           builder
            .addCase(fetchCompletedLodgedItem.pending, (state) => {
              state.itemCompleteLoading = true;
              state.error = null;
            })
            .addCase(fetchCompletedLodgedItem.fulfilled, (state, action) => {
              state.itemCompleteLoading = false;
              state.itemComplete = action.payload;
            })
            .addCase(fetchCompletedLodgedItem.rejected, (state, action) => {
              state.itemCompleteLoading = false;
              state.error = action.payload || 'Failed to fetch manifest';
            });


          builder
      .addCase(lodgeItem.pending, (state) => {
        state.lodgeItemloading = true;
        state.lodgeItemsuccess = null;
        state.error = null;
      })
      .addCase(lodgeItem.fulfilled, (state, action) => {
        state.lodgeItemloading = false;
        state.lodgeItemsuccess = action.payload.status;
        state.data = action.payload;
      })
      .addCase(lodgeItem.rejected, (state, action) => {
        state.lodgeItemloading = false;
        state.error = action.payload;
      });

          builder
      .addCase(fetchLodgedItemDetailsUser.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchLodgedItemDetailsUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.lodgedItemDetails = action.payload;
      })
      .addCase(fetchLodgedItemDetailsUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


           builder
      .addCase(fetchFlagedRideByUser.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchFlagedRideByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.listOfUserFlagedRide = action.payload;
      })
      .addCase(fetchFlagedRideByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      
           builder
      .addCase(fetchFlagedItemsByUser.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchFlagedItemsByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.listOfUserFlagedItems = action.payload;
      })
      .addCase(fetchFlagedItemsByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


        builder
      .addCase(fetchLodgedItemUser.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchLodgedItemUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.lodgedItemUser = action.payload;
      })
      .addCase(fetchLodgedItemUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

       builder
      .addCase(createTrafficUpdate.pending, (state) => {
        state.trafficloading = true;
        state.trafficsuccess = null;
        state.error = null;
      })
      .addCase(createTrafficUpdate.fulfilled, (state, action) => {
        state.trafficloading = false;
        state.trafficsuccess = action.payload.status;
        state.data = action.payload;
      })
      .addCase(createTrafficUpdate.rejected, (state, action) => {
        state.trafficloading = false;
        state.error = action.payload;
      });

         builder
      .addCase(createComplain.pending, (state) => {
        state.complainloading = true;
        state.complainsuccess = null;
        state.error = null;
      })
      .addCase(createComplain.fulfilled, (state, action) => {
        state.complainloading = false;
        state.complainsuccess = action.payload.status;
        state.data = action.payload;
      })
      .addCase(createComplain.rejected, (state, action) => {
        state.complainloading = false;
        state.error = action.payload;
      });

          builder
      .addCase(fetchMyComplains.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchMyComplains.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.complainData = action.payload;
      })
      .addCase(fetchMyComplains.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
 
          builder
      .addCase(fetchMyTrafficDetails.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchMyTrafficDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.trafficDetailsMy = action.payload;
      })
      .addCase(fetchMyTrafficDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      

         builder
      .addCase(fetchExploreTrafficUpdates.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchExploreTrafficUpdates.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.exploreTrafficData = action.payload;
      })
      .addCase(fetchExploreTrafficUpdates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


          builder
      .addCase(fetchMyTrafficUpdates.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchMyTrafficUpdates.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.trafficData = action.payload;
      })
      .addCase(fetchMyTrafficUpdates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

          builder
      .addCase(fetchComplainDetails.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchComplainDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.complainDetails = action.payload;
      })
      .addCase(fetchComplainDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

       builder
      .addCase(editParkingSpace.pending, (state) => {
        state.editparkingloading = true;
        state.editparkingsuccess = null;
        state.error = null;
      })
      .addCase(editParkingSpace.fulfilled, (state, action) => {
        state.editparkingloading = false;
        state.editparkingsuccess = action.payload.status;
        state.data = action.payload;
      })
      .addCase(editParkingSpace.rejected, (state, action) => {
        state.editparkingloading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchMyParkingSpace.pending, (state) => {
        state.loading = true;
        state.myparking = null;
        state.error = null;
      })
      .addCase(fetchMyParkingSpace.fulfilled, (state, action) => {
        state.loading = false;
        state.myparking = action.payload;
      })
      .addCase(fetchMyParkingSpace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchExploreParkingSpace.pending, (state) => {
        state.loading = true;
        state.exploreparking = null;
        state.error = null;
      })
      .addCase(fetchExploreParkingSpace.fulfilled, (state, action) => {
        state.loading = false;
        state.exploreparking = action.payload;
      })
      .addCase(fetchExploreParkingSpace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(myBookedParkingSpace.pending, (state) => {
        state.loading = true;
        state.bookedparking = null;
        state.error = null;
      })
      .addCase(myBookedParkingSpace.fulfilled, (state, action) => {
        state.loading = false;
        state.bookedparking = action.payload;
      })
      .addCase(myBookedParkingSpace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(changeBookingStatus.pending, (state) => {
        state.bookedstatusloading = true;
        state.bookedstatusparking = null;
        state.error = null;
      })
      .addCase(changeBookingStatus.fulfilled, (state, action) => {
        state.bookedstatusloading = false;
        state.bookedstatusparking = action.payload.status;
      })
      .addCase(changeBookingStatus.rejected, (state, action) => {
        state.bookedstatusloading = false;
        state.error = action.payload;
      });

       builder
      .addCase(fetchMyParkinSpaceDetails.pending, (state) => {
        state.loading = true;
        state.myParkDetails = null;
        state.error = null;
      })
      .addCase(fetchMyParkinSpaceDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.myParkDetails = action.payload;
      })
      .addCase(fetchMyParkinSpaceDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(incomingBookedParkingSpace.pending, (state) => {
        state.loading = true;
        state.incomingparking = null;
        state.error = null;
      })
      .addCase(incomingBookedParkingSpace.fulfilled, (state, action) => {
        state.loading = false;
        state.incomingparking = action.payload;
      })
      .addCase(incomingBookedParkingSpace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(bookParkSpace.pending, (state) => {
        state.bookingloading = true;
        state.bookparking = null;
        state.error = null;
      })
      .addCase(bookParkSpace.fulfilled, (state, action) => {
        state.bookingloading = false;
        state.bookparking = action.payload;
        state.bookparkingsuccess = action.payload.status;
      })
      .addCase(bookParkSpace.rejected, (state, action) => {
        state.bookingloading = false;
        state.error = action.payload;
      });
    builder
      .addCase(cancelBookedParkSpace.pending, (state) => {
        state.cancelBookingloading = true;
        state.cancelbookparking = null;
        state.error = null;
      })
      .addCase(cancelBookedParkSpace.fulfilled, (state, action) => {
        state.cancelBookingloading = false;
        state.cancelbookparking = action.payload;
        state.cancelbookingsuccess = action.payload.status;
      })
      .addCase(cancelBookedParkSpace.rejected, (state, action) => {
        state.cancelBookingloading = false;
        state.error = action.payload;
      });

        builder
      .addCase(followOrUnfollowAgency.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(followOrUnfollowAgency.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.allToFollowOrUnfollow = action.payload;
      })
      .addCase(followOrUnfollowAgency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

       builder
      .addCase(fetchAllToBeFollowed.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchAllToBeFollowed.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.status;
        state.allToFollow = action.payload;
      })
      .addCase(fetchAllToBeFollowed.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  resetParkingState,
  resetBookingStatusState,
  resetCancelBookingState,
  resetFlagItemState,
  resetBookingState,
  resetEditParkingState,
  resetComplainState,
  resetLodgeItemState,
  resetTrafficState,
} = secondUserSlice.actions;
export default secondUserSlice.reducer;
