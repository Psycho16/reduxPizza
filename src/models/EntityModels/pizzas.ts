import { PizzaSize, PizzaType } from 'models/apiModels/ApiEntities/pizzas'


export interface PizzaSizeVariant {
  id: PizzaSize
  value: string
}

export interface PizzaTypeVariant {
  id: PizzaType
  value: string
}
export interface Pizza {
  availableSizes: PizzaSizeVariant[]
  availableTypes: PizzaTypeVariant[]
  name: string
  price: number
  id: string
  image: string
  category: number
}

export interface Pizzas {
  pizzas: Pizza[]
}

export interface PizzaInfo {
  size: PizzaSize
  type: PizzaType
}

export interface SortPizzasType {
  name: 'имени' | 'цене'
  sortProperty: 'name' | 'price'
}
