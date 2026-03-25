import { combineReducers, createStore } from "redux";

import counterReducer from "./counter.reducer";
var store = createStore(
  combineReducers({ countR:counterReducer}),
);
export default store;