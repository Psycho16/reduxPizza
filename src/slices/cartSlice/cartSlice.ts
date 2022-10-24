import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AddedPizza, PizzaInteractionData } from 'models/EntityModels/cart'

import LocalStorageKeys, { setPizzas, setTotalCount, setTotalPrice } from 'constants/localStorage'


interface CartSlice {
  addedPizzas: AddedPizza[]
  totalPrice: number
  totalCount: number
}

const initialState: CartSlice = {
  addedPizzas: [],
  totalPrice: 0,
  totalCount: 0
}

const pizzaInCart = (payloadPizzaData: PizzaInteractionData, addedPizzas: AddedPizza[]) => {
  return addedPizzas.find(
    addedPizza =>
      addedPizza.id === payloadPizzaData.id &&
      addedPizza.size === payloadPizzaData.size &&
      addedPizza.type === payloadPizzaData.type
  )
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addPizzaToCart(state, action: PayloadAction<AddedPizza>) {
      const findPizza = pizzaInCart(action.payload, state.addedPizzas)

      if (findPizza) {
        findPizza.amount++
      } else {
        state.addedPizzas.push({ ...action.payload, amount: 1 })
      }

      state.totalCount++
      state.totalPrice += action.payload.price

      setPizzas(state.addedPizzas)
      setTotalCount(state.totalCount)
      setTotalPrice(state.totalPrice)
    },
    deletePizzaFromCart(state, action: PayloadAction<PizzaInteractionData>) {
      const findPizza = pizzaInCart(action.payload, state.addedPizzas)

      if (findPizza) {
        const filteredPizzas = state.addedPizzas.filter(
          addedPizza =>
            addedPizza.id !== findPizza.id || addedPizza.size !== findPizza.size || addedPizza.type !== findPizza.type
        )

        state.addedPizzas = filteredPizzas

        state.totalCount -= findPizza.amount
        state.totalPrice -= findPizza.price * findPizza.amount
      }

      setPizzas(state.addedPizzas)
      setTotalCount(state.totalCount)
      setTotalPrice(state.totalPrice)
    },
    removePizzaFromCart(state, action: PayloadAction<PizzaInteractionData>) {
      const findPizza = pizzaInCart(action.payload, state.addedPizzas)

      if (findPizza) {
        state.totalCount--
        state.totalPrice -= findPizza.price

        if (findPizza.amount === 1) {
          const filteredPizzas = state.addedPizzas.filter((addedPizza) => {
            return (
              addedPizza.id !== findPizza.id || addedPizza.size !== findPizza.size || addedPizza.type !== findPizza.type
            )
          })

          state.addedPizzas = filteredPizzas
        } else {
          findPizza.amount--
        }
      } else {
        console.error('Такой пиццы нет в корзине')
      }

      setPizzas(state.addedPizzas)
      setTotalCount(state.totalCount)
      setTotalPrice(state.totalPrice)
    },
    clearCart(state) {
      state.addedPizzas = []
      state.totalCount = 0
      state.totalPrice = 0

      setPizzas(state.addedPizzas)
      setTotalCount(state.totalCount)
      setTotalPrice(state.totalPrice)
    }
  },
  extraReducers(builder) {
    builder.addDefaultCase((state) => {
      const storagedPizzas = localStorage.getItem(LocalStorageKeys.cart.pizzas)
      state.addedPizzas = storagedPizzas !== null ? JSON.parse(storagedPizzas) : []

      const storagedTotalCount = localStorage.getItem(LocalStorageKeys.cart.totalCount)
      state.totalCount = storagedTotalCount !== null ? JSON.parse(storagedTotalCount) : 0

      const storagedTotalPrice = localStorage.getItem(LocalStorageKeys.cart.totalPrice)
      state.totalPrice = storagedTotalPrice !== null ? JSON.parse(storagedTotalPrice) : 0
    })
  }
})

export const { addPizzaToCart, removePizzaFromCart, deletePizzaFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
