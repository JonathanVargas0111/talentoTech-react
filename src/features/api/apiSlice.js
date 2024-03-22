import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tok = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZjZDM4ZWNjYWEzOTBhY2Q5OGM5MGEiLCJlbWFpbCI6ImZlbGlwZTAxMTFAaG90bWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTEwNjgwNTIsImV4cCI6MTcxMTA3MTY1Mn0.Hhel2Oid_-gYc0G1aNy8wI9J0dJQQOBdjTOtPAnNhrE"
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
        }),
        uploadAvatar:builder.mutation({
            query: (body) => ({
                url: `/upload/${body._id}/user`,
                method: 'POST',
                body: body.file
            }),
            invalidatesTags: ["Users"]
        })
    })
})

/** Segun la nomenclatura de la libreria se usa use al principio 
 * y Query o Mutation al final segun corresponda */
export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation, useUploadAvatarMutation } = apiSlice