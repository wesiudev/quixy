import { createSlice } from "@reduxjs/toolkit";
//czy chcesz galierię zdjęć
//mapa strony (google maps)
//zakładki
const initialState: any = {
  heroDialogData: {
    step: 0, //krok
    websiteName: "", //wizytowka / sklep / landing page
    languages: [], //języki
    target: "", //branża
    audience: "", //grupa docelowa
    blog: "", //czy chcesz bloga?
    blogServices: "", //czy chcesz abyśmy prowadzili bloga za ciebie?
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
