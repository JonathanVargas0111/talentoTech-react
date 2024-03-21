import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tok = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZiODg5MjJiYjhkYzcxZWYwNDgzYTciLCJlbWFpbCI6ImZlbGlwZTAxMTFAaG90bWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTA5ODMzMTgsImV4cCI6MTcxMDk4NjkxOH0.eN2nrcz8SsLaNOxXfC0ByxjEaVTaQZ00N-nEHivU8uM"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        prepareHeaders: (headers, { }) => {
            const token = tok;
            if (token) {
                headers.set('authorization', `Bearer ${token}`) // Se agrega el token a la cabecera
            }
            return headers;
        }
    }), // Hace las veces de Axios
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/user',
            providesTags: ['Users'], // Me permite ejecutar un llamado
            transformResponse: response => response.sort((a, b) =>
                (a.name[0].toUpperCase() < b.name[0].toUpperCase()) ? -1
                    : (a.name[0].toUpperCase() > b.name[0].toUpperCase()) ? 1 : 0)
        }),
        getUserById: builder.query({
            query: (_id) => '/user/' + _id,
            providesTags: ['User']
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: '/user',
                method: 'POST',
                body: newUser
            }),
            invalidatesTags: ["Users"] // Se ejecuta cuando hay un cambio en la BD
        }),
        updateUser: builder.mutation({
            query: (user) => ({
                url: '/user/' + user._id,
                method: 'PATCH',
                body: user
            }),
            invalidatesTags: ["Users", "User"]
        }),
        deleteUser: builder.mutation({
            query: (_id) => ({
                url: '/user/' + _id,
                method: 'DELETE',
            }),
            invalidatesTags: ["Users"]
        })
    })
})

/** Segun la nomenclatura de la libreria se usa use al principio 
 * y Query o Mutation al final segun corresponda */
export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = apiSlice