import { addItemReducer } from "../reducers/ProductReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  addItemReducer,
});

export default rootReducer;
