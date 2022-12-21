import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
    authReducer
})

export default rootreducer;