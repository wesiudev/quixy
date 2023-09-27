import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  heroDialogData: {
    step: 0,
    websiteName: "",
    languages: [],
    theme: [],
    about: "",
    seo: "",
    seoTarget: "",
    social: "",
    audience: "",
    blog: "",
    blogServices: "",
  },
};

export const appState = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setHeroDialogData: (state, action) => {
      state.heroDialogData = action.payload;
    },
    setHeroDialogLang: (state, action) => {
      state.heroDialogData.languages = action.payload;
    },
  },
});

export const { setHeroDialogData, setHeroDialogLang } = appState.actions;

export default appState.reducer;
