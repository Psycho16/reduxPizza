import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RegisterFormValuesDTO } from 'pages/Register/Register'

import { api } from 'constants/api'


export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({ baseUrl: api.baseURL }),
  endpoints: build => ({
    createUser: build.mutation<RegisterFormValuesDTO, Partial<RegisterFormValuesDTO>>({
      query: body => ({
        url: '/users',
        method: 'post',
        body
      })
    })
  })
})

export const { useCreateUserMutation } = registerApi
