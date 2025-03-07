import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./slice/alertSlice";
import { apiSlice } from "./api/apiSlice";
import { tareaSlice } from "./slice/tareaSlice";

export const store = configureStore({
    reducer: {
        alert: alertSlice.reducer,
        task: tareaSlice.reducer,
        // Almacenamiento de peticiones con RTK Query
        [ apiSlice.reducerPath ] : apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});
