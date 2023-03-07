import { createSlice } from "@reduxjs/toolkit";

export const addFavsSlice = createSlice({
  name: "addFavs",
  initialState: {
    addFavs: [],
  },
  reducers: {
    setAddFavs: (state, action) => {
      state.addFavs.push(action.payload);
    },
  },
});

export const { setAddFavs } = addFavsSlice.actions;

export const selectaddFavs = (state) => state.state.addfavs.addFavs;

export default addFavsSlice.reducer;
