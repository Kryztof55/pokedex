import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import addFavsReducer from "./favs";

const reducers = combineReducers({
  addfavs: addFavsReducer,
});

export default configureStore({
  reducer: {
    state: reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools:
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "staging",
});
