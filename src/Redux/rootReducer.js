
import { combineReducers } from "redux";
import appReducer from "./appSlice"
import homeReducer from "./slices/homeSlice"


export const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer,
})