import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { pizzaApi } from 'slices/pizzasSlice/pizzaApi'
import counterReducer from 'slices/counterSlice/counterSlice'
import cartReducer from 'slices/cartSlice/cartSlice'
import filterPizzasReducer from 'slices/filterPizzasSlice/filterPizzasSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filterPizzas: filterPizzasReducer,
    cart: cartReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer
  },

  middleware: getDefaultMiddlware => getDefaultMiddlware().concat(pizzaApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
