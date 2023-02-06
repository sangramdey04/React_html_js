import countNumber from "./CountNum.jsx"
import MultNumber from "./mult.jsx";
 
import {combineReducers} from "redux" 

const rootReducer = combineReducers({
    countNumber,MultNumber
})
export default rootReducer;