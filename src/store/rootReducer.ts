import { combineReducers } from "@reduxjs/toolkit";
import { toggleReducer } from "./toggles/toggles";

export const rootReducer = combineReducers({
  toggles: toggleReducer,
});
