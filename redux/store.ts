import { configureStore } from "@reduxjs/toolkit";
import appState from "./slices/appState";

export const store = configureStore({
  reducer: {
    appState: appState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
