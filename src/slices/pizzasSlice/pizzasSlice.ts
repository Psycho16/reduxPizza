import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from 'app/store'

import { Pizza } from 'models/EntityModels/pizzas'


interface PizzasSlice {
  pizzas: Pizza[]
}
const initialState: PizzasSlice = {
  pizzas: []
}

// export const getPizzasAsync = createAsyncThunk()

// export const pizzasSlice = createSlice({
//   name: 'pizzas',
//   initialState
//   // reducers
// })
