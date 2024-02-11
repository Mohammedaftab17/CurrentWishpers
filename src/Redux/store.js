import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./Config";
import AuthReducer from './Authentication'


export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    Auth: AuthReducer,
  },
});

 
