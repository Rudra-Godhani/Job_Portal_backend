/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const applicationSlice = createSlice({
    name: "applications",
    initialState: {
        applications: [],
        loading: false,
        error: null,
        message: null,
    },
    reducers: {
        requestForAllAppllications(state, action) {
            state.loading = true;
            state.error = null;
        },
        successForAllApplications(state, action) {
            state.loading = false;
            state.applications = action.payload;
            state.error = null;
        },
        failureForAllApplications(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        requestForMyAppllications(state, action) {
            state.loading = true;
            state.error = null;
        },
        successForMyApplications(state, action) {
            state.loading = false;
            state.applications = action.payload;
            state.error = null;
        },
        failureForMyApplications(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        requestForPostApplication(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        successForPostApplication(state, action) {
            state.loading = false;
            state.error = null;
            state.message = action.payload;
        },
        failureForPostApplication(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.message = null;
        },
        requestForDeleteApplication(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        successForDeleteApplication(state, action) {
            state.loading = false;
            state.error = null;
            state.message = action.payload;
        },
        failureForDeleteApplication(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.message = null;
        },
        clearAllErrors(state, action) {
            state.error = null;
            state.applications = state.applications;
        },
        resetApplicationSlice(state, action) {
            state.error = null;
            state.applications = state.applications;
            state.message = null;
            state.loading = false;
        }
    }
});

export const fetchEmployerApplications = () => async (dispatch) => {
    dispatch(applicationSlice.actions.requestForAllAppllications());
    try {
        const response = await axios.get(`http://localhost:4000/api/v1/application/employer/getall`, {
            withCredentials: true,
        });
        dispatch(applicationSlice.actions.successForAllApplications(response.data.applications));
        dispatch(applicationSlice.actions.clearAllErrors());

    } catch (error) {
        dispatch(applicationSlice.actions.failureForMyApplications(error.response.data.message));
    }
};

export const fetchJobSeekerApplications = () => async (dispatch) => {
    dispatch(applicationSlice.actions.requestForMyAppllications());
    try {
        const response = await axios.get(`http://localhost:4000/api/v1/application/jobseeker/getall`, {
            withCredentials: true,
        });
        dispatch(applicationSlice.actions.successForMyApplications(response.data.applications));
        dispatch(applicationSlice.actions.clearAllErrors());

    } catch (error) {
        dispatch(applicationSlice.actions.failureForMyApplications(error.response.data.message));
    }
};

export const postApplication = (data, jobId) => async (dispatch) => {
    dispatch(applicationSlice.actions.requestForPostApplication());
    try {
        const response = await axios.post(`http://localhost:4000/api/v1/application/post/${jobId}`, data, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" }
        });
        dispatch(applicationSlice.actions.successForPostApplication(response.data.message));
        dispatch(applicationSlice.actions.clearAllErrors());

    } catch (error) {
        dispatch(applicationSlice.actions.failureForPostApplication(error.response.data.message));
    }
};

export const deleteApplication = (id) => async (dispatch) => {
    dispatch(applicationSlice.actions.requestForDeleteApplication());
    try {
        const response = await axios.delete(`http://localhost:4000/api/v1/application/delete/${id}`, { withCredentials: true });
        dispatch(applicationSlice.actions.successForDeleteApplication(response.data.message));
        dispatch(clearAllApplicationErrors());
    } catch (error) {
        dispatch(applicationSlice.actions.failureForDeleteApplication(error.response.data.message));
    }
}

export const clearAllApplicationErrors = () => (dispatch) => {
    dispatch(applicationSlice.actions.clearAllErrors());
};

export const resetApplicationSlice = () => (dispatch) => {
    dispatch(applicationSlice.actions.resetApplicationSlice());
};

export default applicationSlice.reducer;