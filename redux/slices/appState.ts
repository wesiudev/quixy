import { createSlice } from "@reduxjs/toolkit";
//czy chcesz galierię zdjęć
//mapa strony (google maps)
//zakładki
const initialState: any = {
  heroDialogData: {
    step: 0, //krok jest
    websiteName: "", //wizytowka / sklep / landing page jest
    languages: [], //języki jest
    target: "", //grupa docelowa jest
    blog: false, //czy chcesz bloga? jest
    blogServices: false, //czy chcesz abyśmy prowadzili bloga za ciebie? jest
    gallery: false, //czy chcesz galerię zdjęć? jest
    map: false, //czy chcesz mapę strony? jest
    contactType: "", //email phone
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
      state.heroDialogData.languages.push(action.payload);
    },
  },
});

export const { setHeroDialogData, setHeroDialogLang } = appState.actions;

export default appState.reducer;
