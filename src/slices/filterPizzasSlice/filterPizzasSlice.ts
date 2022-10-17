import { createSlice } from '@reduxjs/toolkit'

import { SortPizzasType } from 'models/EntityModels/pizzas'


interface FilterPizzasSlice {
  categoryId: number
  sortType: SortPizzasType
}
const initialState: FilterPizzasSlice = {
  categoryId: 0,
  sortType: {
    name: 'имени',
    sortProperty: 'name'
  }
}

const filterPizzasSlice = createSlice({
  name: 'filterPizzasSlice',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSortType(state, action) {
      state.sortType = action.payload
    }
  }
})

export const { setCategoryId, setSortType } = filterPizzasSlice.actions

export default filterPizzasSlice.reducer
