import { createSlice } from "@reduxjs/toolkit";
// content to generate ui-slice

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, actions) {
      state.notification = {
        status: actions.payload.status,
        title: actions.payload.title,
        message: actions.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
