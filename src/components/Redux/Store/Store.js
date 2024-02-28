import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Feature/Feature"; 


const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
