 import { applyMiddleware,createStore } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import rootreducer from "./reducers/index1"

const middlewareEnhancer =  composeWithDevTools(applyMiddleware(thunk))
const store = createStore(rootreducer,middlewareEnhancer)
store.subscribe (()=>console.log(store.getState()));

export default store;


