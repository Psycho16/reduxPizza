import { AddedPizza } from 'models/EntityModels/cart'


const LocalStorageKeys = {
  cart: {
    pizzas: 'CART_PIZZAS_IN_CART',
    totalPrice: 'CART_TOTAL_PRICE',
    totalCount: 'CART_TOTAL_COUNT'
  }
}

export const setPizzas = (addedPizzas: AddedPizza[]) => {
  localStorage.setItem(LocalStorageKeys.cart.pizzas, JSON.stringify(addedPizzas))
}

export const setTotalCount = (totalCount: number) => {
  localStorage.setItem(LocalStorageKeys.cart.totalCount, JSON.stringify(totalCount))
}

export const setTotalPrice = (totalPrice: number) => {
  localStorage.setItem(LocalStorageKeys.cart.totalPrice, JSON.stringify(totalPrice))
}

export default LocalStorageKeys
