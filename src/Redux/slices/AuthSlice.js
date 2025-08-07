// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://backoffice.rua.com.ng/api/auth/register', formData);
      console.log(response.data);
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://backoffice.rua.com.ng/api/auth/login', formData);
      console.log(response.data);
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


export const userEmailVerfication = createAsyncThunk(
  'auth/userEmailVerfication',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://backoffice.rua.com.ng/api/auth/email-verification', formData);
      console.log(response.data);
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const userResendVerifyCode = createAsyncThunk(
  'auth/userResendVerifyCode',
  async (dataForm, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://backoffice.rua.com.ng/api/auth/resend/verification-code', dataForm);
      console.log(response.data);
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const userCompletePersonalDetails = createAsyncThunk(
  'auth/userCompletePersonalDetails',
  async (formData, { rejectWithValue }) => {
    try {
      // Get token from localStorage
      const token = localStorage.getItem('ruaUserToken');

      // Configure headers with Authorization
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Bearer token
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(
        'https://backoffice.rua.com.ng/api/user/complete-profile',
        formData,
        config
      );

      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


export const forgetPasswordUser = createAsyncThunk(
  'auth/forgetPasswordUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://backoffice.rua.com.ng/api/auth/forgot-password', formData);
      console.log(response.data);
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const userForgetPasswordEmailVerfication = createAsyncThunk(
  'auth/userForgetPasswordEmailVerfication',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://backoffice.rua.com.ng/api/auth/forgot-password/verify/email', formData);
      console.log(response.data);
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const userForgetPasswordReset = createAsyncThunk(
  'auth/userForgetPasswordReset',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://backoffice.rua.com.ng/api/auth/forgot-password/reset', formData);
      console.log(response.data);
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);



const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    verify: null,
    verifyemailerrorMessage: null,
    newVerifyErrorMessage: null,
    resetPasswordsuccessMessage: null,
    restPassword: null,
newVeryCode: null,
forgetPassword: null,
forgetPasswordMessage: null,
forgetverify: null,
profileCreationSuccessMessage: null,
userDetails: null,
    successVerifyMessage: null,
    loading: false,
    newCodeLoading: false,
    verifyloading: false,
    error: null,
    successMessage: null,
    loginErroMessage: null,
  },

  reducers: {

    resetverifyemailerrorMessage: (state) => {
    state.verifyemailerrorMessage = null;
  },
     resetUserState: (state) => {
    state.user = null;
  },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.successMessage = action.payload?.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
         builder
      .addCase(userForgetPasswordReset.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.resetPasswordsuccessMessage = null;
      })
      .addCase(userForgetPasswordReset.fulfilled, (state, action) => {
        state.loading = false;
        state.restPassword = action.payload;
        state.resetPasswordsuccessMessage = action.payload?.message;
      })
      .addCase(userForgetPasswordReset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        
      });
builder
        .addCase(forgetPasswordUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.forgetPasswordMessage = null;
      })
      .addCase(forgetPasswordUser.fulfilled, (state, action) => {
        state.loading = false;
        state.forgetPassword = action.payload;
        state.forgetPasswordMessage = action.payload?.message;
      })
      .addCase(forgetPasswordUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

       builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.successMessage = action.payload?.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
         state.loginErroMessage = action.payload.message;
      });

       builder
      .addCase(userEmailVerfication.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successVerifyMessage = null;
      })
      .addCase(userEmailVerfication.fulfilled, (state, action) => {
        state.loading = false;
        state.verify = action.payload;
        state.successVerifyMessage = action.payload?.message;
      })
      .addCase(userEmailVerfication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
         state.verifyemailerrorMessage = action.payload.message;
      });

    builder
      .addCase(userForgetPasswordEmailVerfication.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successVerifyMessage = null;
      })
      .addCase(userForgetPasswordEmailVerfication.fulfilled, (state, action) => {
        state.loading = false;
        state.forgetverify = action.payload;
        state.successVerifyMessage = action.payload?.message;
      })
      .addCase(userForgetPasswordEmailVerfication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
         state.verifyemailerrorMessage = action.payload.message;
      });

        builder
      .addCase(userCompletePersonalDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userCompletePersonalDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
        state.profileCreationSuccessMessage = action.payload.message;
        state.error = null;
      })
      .addCase(userCompletePersonalDetails.rejected, (state, action) => {
        state.loading = false;
        state.userDetails = null;
        state.success = false;
        state.error = action.payload;
      });

       builder
      .addCase(userResendVerifyCode.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.newVeryCodeMessage = null;
      })
      .addCase(userResendVerifyCode.fulfilled, (state, action) => {
        state.loading = false;
        state.newVeryCode = action.payload;
        state.newVeryCodeMessage = action.payload?.message;
      })
      .addCase(userResendVerifyCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
         state.newVerifyErrorMessage = action.payload.message;
      });
  },
});

export const {
  resetverifyemailerrorMessage,
  resetUserState,
} = authSlice.actions;

export default authSlice.reducer;
