import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    type: '',
    description: '',
    open: false
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        successAlert: (state, { payload }) => {
            state.open = true;
            state.description = payload;
            state.type = 'success';
        },
        infoAlert: (state, { payload }) => {
            state.open = true;
            state.description = payload;
            state.type = 'info';
        },
        warningAlert: (state, { payload }) => {
            state.open = true;
            state.description = payload;
            state.type = 'warning';
        },
        errorAlert: (state, { payload }) => {
            state.open = true;
            state.description = payload;
            state.type = 'error';
        },
        closeAlert: (state) => {
            state.open = false;
            state.description = '';
            state.type = '';
        }
    }
})

export const { successAlert, infoAlert, warningAlert, errorAlert, closeAlert } = alertSlice.actions;
