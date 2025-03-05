import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://localhost:7213/api/Tarea'
    }),
    tagTypes: ["Get"],
    endpoints: builder => ({
        getTareasSinCompletar: builder.query({
            query: () => ({
                url: '/sin-completar'
            }),
            providesTags: ['Get']
        }),
        getTareasCompletadas: builder.query({
            query: () => ({
                url: '/completadas'
            }),
            providesTags: ['Get']
        }),
        postTarea: builder.mutation({
            query: (tarea) => ({
                method: 'POST',
                body: tarea
            }),
            invalidatesTags: ['Get']
        }),
        putTarea: builder.mutation({
            query: (tarea) => ({
                url: `/${tarea.id}`,
                method: 'PUT',
                body: tarea
            }),
            invalidatesTags: ['Get']
        }),
        deleteTarea: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Get']
        })
    })
});

export const { useGetTareasSinCompletarQuery, useGetTareasCompletadasQuery, usePostTareaMutation, usePutTareaMutation, useDeleteTareaMutation } = apiSlice;