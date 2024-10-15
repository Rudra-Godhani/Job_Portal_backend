/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import jobReduer from "./slices/jobSlice";
import userReducer from "./slices/userSlice";
import applicationReducer from "./slices/applicationSlice";
import updateProfileReducer from "./slices/updateProfileSlice";

const store = configureStore({
    reducer: {
        jobs: jobReduer,
        user: userReducer,
        applications: applicationReducer,
        updateProfile: updateProfileReducer
    }
});

export default store;