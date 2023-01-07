import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { api } from 'constants/api'


export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({ baseUrl: api.baseURL }),
  endpoints: build => ({
    createUser: build.mutation({
      query: data => ({
        url: '/users',
        method: 'post',
        data
      })
    })
  })
})

export const { useCreateUserMutation } = registerApi
