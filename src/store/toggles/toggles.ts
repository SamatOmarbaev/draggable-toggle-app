import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TogglesState } from "./types";

const initialState: TogglesState = {
  transferByNumber: true,
  transfers: true,
  payments: true,
  autoPayments: true,
  information: true,
  order: [
    "transferByNumber",
    "transfers",
    "payments",
    "autoPayments",
    "information",
  ],
};

const togglesSlice = createSlice({
  name: "toggles",
  initialState,
  reducers: {
    setToggles(state, action: PayloadAction<TogglesState>) {
      return { ...state, ...action.payload };
    },
    setOrder(state, action: PayloadAction<string[]>) {
      state.order = action.payload;
    },
  },
});

export const { setToggles, setOrder } = togglesSlice.actions;

export const toggleReducer = togglesSlice.reducer;
