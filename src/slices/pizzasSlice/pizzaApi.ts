import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { PizzaDTO, PizzaSize, PizzaType } from 'models/apiModels/ApiEntities/pizzas'
import { Pizzas, PizzaSizeVariant, PizzaTypeVariant } from 'models/EntityModels/pizzas'

import { api } from 'constants/api'


const deserializeAvailableSize = (availableSizes: PizzaSize[]): PizzaSizeVariant[] => {
  return availableSizes.map((availableSize) => {
    if (availableSize === PizzaSize.Small)
      return {
        id: PizzaSize.Small,
        value: '26 см'
      }

    if (availableSize === PizzaSize.Medium)
      return {
        id: PizzaSize.Medium,
        value: '30 см'
      }

    if (availableSize === PizzaSize.Large)
      return {
        id: PizzaSize.Large,
        value: '40 см'
      }

    return {
      id: PizzaSize.Small,
      value: '26 см'
    }
  })
}

const deserializeAvailableType = (availableTypes: PizzaType[]): PizzaTypeVariant[] => {
  return availableTypes.map((availableType) => {
    if (availableType === PizzaType.Default)
      return {
        id: PizzaType.Default,
        value: 'традиционное'
      }

    if (availableType === PizzaType.Thin) {
      return {
        id: PizzaType.Thin,
        value: 'тонкое'
      }
    }

    return {
      id: PizzaType.Default,
      value: 'традиционное'
    }
  })
}

const deserializePizzas = (responseData: PizzaDTO[]): Pizzas => {
  return {
    pizzas: responseData.map((pizza) => {
      const { availableSizes, availableTypes, image, name, price, category, id } = pizza
      return {
        id,
        availableSizes: deserializeAvailableSize(availableSizes),
        availableTypes: deserializeAvailableType(availableTypes),
        image,
        name,
        price,
        category
      }
    })
  }
}

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({ baseUrl: api.baseURL }),
  endpoints: build => ({
    getPizzas: build.query<Pizzas, string>({
      query: (queryString = '') => `pizzas${queryString ? `${queryString}` : ''}`,
      transformResponse: (resp: PizzaDTO[]) => deserializePizzas(resp)
    })
  })
})

export const { useGetPizzasQuery } = pizzaApi
