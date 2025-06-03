
import { combineReducers } from "redux";
import appReducer from "./appSlice"
import homeReducer from "./slices/homeSlice"
import authReducer from "./slices/AuthSlice"
import userReducer from "./slices/userSlice"
import otherUserReducer from "./slices/secondUserSlice"
import uploadReducer from "./slices/uploadSlice"


export const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer,
    auth: authReducer,
    users: userReducer,
    otherUser: otherUserReducer,
    upload: uploadReducer,
    
})