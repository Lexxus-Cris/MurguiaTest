import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    showInputUpdate: false,
    task: {
        id: null,
        descripcion: '',
        fechaCreacion: '',
        fechaVencimiento: '',
        completada: false,
        destacada: false
    }
}

export const tareaSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        getTaskData: (state, { payload }) => {
            state.showInputUpdate = true;
            state.task = payload;
        },
        clearTaskState: (state) => {
            state.showInputUpdate = false;
            state.task = initialState.task;
        }
    }
})

export const { clearTaskState, getTaskData } = tareaSlice.actions;