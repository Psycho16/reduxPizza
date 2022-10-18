import { createSlice } from '@reduxjs/toolkit'
import { pizzaApi } from 'slices/pizzasSlice/pizzaApi'

import { Category, SortPizzasType } from 'models/EntityModels/pizzas'


interface FilterPizzasSlice {
  categories: Category[]
  category: Category
  sortTypes: SortPizzasType[]
  sortType: SortPizzasType
}

const defaultCategory = {
  categoryId: -1,
  categoryName: 'все'
}

const defaultSortTypes = [
  {
    name: 'имени',
    sortProperty: 'name'
  },
  { name: 'цене', sortProperty: 'price' }
]

const initialState: FilterPizzasSlice = {
  categories: [defaultCategory],
  category: defaultCategory,
  sortTypes: defaultSortTypes,
  sortType: defaultSortTypes[0]
}

const filterPizzasSlice = createSlice({
  name: 'filterPizzasSlice',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    },
    getCategories(state, action) {
      state.categories = action.payload
    },
    resetCategory(state) {
      state.category = defaultCategory
    },
    setSortType(state, action) {
      state.sortType = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(pizzaApi.endpoints.getPizzas.matchFulfilled, (state, { payload }) => {
      state.categories = payload.pizzas.reduce(
        (acc: Category[], currentPizza) => {
          if (!acc.some(category => category.categoryId === currentPizza.category.categoryId)) {
            acc.push(currentPizza.category)
          }
          return acc
        },
        [defaultCategory]
      )
    })
  }
})

export const { setCategory, resetCategory, setSortType, getCategories } = filterPizzasSlice.actions

export default filterPizzasSlice.reducer
