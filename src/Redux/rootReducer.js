
import { combineReducers } from "redux";
import appReducer from "./appSlice"


export const rootReducer = combineReducers({
    app: appReducer
})