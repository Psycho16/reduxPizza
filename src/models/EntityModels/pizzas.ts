import { PizzaSize, PizzaType } from 'models/apiModels/ApiEntities/pizzas'


export interface Pizza {
  availableSizes: PizzaSize[]
  availableTypes: PizzaType[]
  image: string
  name: string
  price: number
  id: string
}

export interface Pizzas {
  pizzas: Pizza[]
}
