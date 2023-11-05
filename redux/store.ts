import { configureStore } from "@reduxjs/toolkit";
import appState from "./slices/appState";
import posts from "./slices/posts";

export const store = configureStore({
  reducer: {
    appState: appState,
    posts: posts,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
